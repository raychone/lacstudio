import { z } from "zod";
import { pageCopy } from "../../../content/i18n/page-copy.ts";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const resendEndpoint = "https://api.resend.com/emails";
const controlCharacters = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const headerBreaks = /[\r\n]/;
const safeText = (maximum: number, minimum = 0) => z.string().trim().min(minimum).max(maximum).refine((value) => !headerBreaks.test(value), "Invalid characters");
const safeEmail = z.string().trim().email().max(254).refine((value) => !headerBreaks.test(value), "Invalid characters");
const inquiry = z.object({ name: safeText(100, 2), email: safeEmail, projectType: safeText(80, 2), budget: safeText(80).optional(), timeline: safeText(80).optional(), message: safeText(4_000, 20), website: safeText(200).optional() });

type ContactLocale = "en" | "fr" | "ro" | "es";
type ContactConfig = { resendApiKey: string; toEmail: string; fromEmail: string; upstashUrl: string; upstashToken: string };

const contactLocale = (request: Request): ContactLocale => {
  const language = request.headers.get("accept-language")?.slice(0, 2).toLowerCase();
  return language === "fr" || language === "ro" || language === "es" ? language : "en";
};
const response = (body: Record<string, unknown>, status: number) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

function getConfig(): ContactConfig | null {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!resendApiKey || !toEmail || !fromEmail || !upstashUrl || !upstashToken) return null;
  return { resendApiKey, toEmail, fromEmail, upstashUrl, upstashToken };
}

async function readJson(request: Request): Promise<unknown> {
  const length = Number(request.headers.get("content-length"));
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) throw new RangeError("Body too large");
  if (!request.body) return null;
  const reader = request.body.getReader(); const chunks: Uint8Array[] = []; let size = 0;
  while (true) {
    const next = await reader.read();
    if (next.done) break;
    size += next.value.byteLength;
    if (size > MAX_BODY_BYTES) { await reader.cancel(); throw new RangeError("Body too large"); }
    chunks.push(next.value);
  }
  const body = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  try { return JSON.parse(new TextDecoder().decode(body)); } catch { return null; }
}

function clientAddress(request: Request) { return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip")?.trim() || "unknown"; }
async function digest(value: string) {
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function consumeRateLimit(request: Request, config: ContactConfig) {
  const key = `contact:rate:${Math.floor(Date.now() / (RATE_LIMIT_WINDOW_SECONDS * 1_000))}:${await digest(clientAddress(request))}`;
  const providerResponse = await fetch(`${config.upstashUrl}/pipeline`, { method: "POST", headers: { Authorization: `Bearer ${config.upstashToken}`, "Content-Type": "application/json" }, body: JSON.stringify([["incr", key], ["expire", key, RATE_LIMIT_WINDOW_SECONDS, "NX"]]), cache: "no-store" });
  if (!providerResponse.ok) throw new Error("Rate limit provider failure");
  const payload = await providerResponse.json() as Array<{ result?: number | string }>;
  const count = Number(payload[0]?.result);
  if (!Number.isFinite(count)) throw new Error("Invalid rate limit provider response");
  return count <= RATE_LIMIT_MAX_REQUESTS;
}

export function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!); }
function cleanHeader(value: string) { return value.replace(controlCharacters, " ").replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 100); }
function emailContent(data: z.infer<typeof inquiry>, locale: ContactLocale, submittedAt: Date) {
  const fields = [["Name", data.name], ["Email", data.email], ["Project type", data.projectType], ["Budget", data.budget || "Not provided"], ["Timeline", data.timeline || "Not provided"], ["Locale", locale], ["Submitted", submittedAt.toISOString()], ["Message", data.message]] as const;
  return { text: fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n"), html: `<h1>New LAC STUDIO inquiry</h1><dl>${fields.map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value).replace(/\n/g, "<br>")}</dd>`).join("")}</dl>` };
}

export async function GET() { return response({ available: Boolean(getConfig()) }, 200); }

export async function POST(request: Request) {
  const locale = contactLocale(request); const messages = pageCopy[locale].contact.formMessages!; const config = getConfig();
  if (!config) return response({ error: messages.unavailable, code: "unavailable" }, 503);
  let body: unknown;
  try { body = await readJson(request); } catch (error) { return response({ error: messages.validation, code: "validation" }, error instanceof RangeError ? 413 : 400); }
  const parsed = inquiry.safeParse(body);
  if (!parsed.success) return response({ error: messages.validation, code: "validation" }, 400);
  if (parsed.data.website) return response({ error: messages.rejected, code: "rejected" }, 400);
  try { if (!await consumeRateLimit(request, config)) return response({ error: messages.rateLimit, code: "rate_limit" }, 429); } catch { return response({ error: messages.unavailable, code: "unavailable" }, 503); }
  const content = emailContent(parsed.data, locale, new Date());
  try {
    const delivery = await fetch(resendEndpoint, { method: "POST", headers: { Authorization: `Bearer ${config.resendApiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: config.fromEmail, to: [config.toEmail], reply_to: parsed.data.email, subject: `New LAC STUDIO inquiry — ${cleanHeader(parsed.data.name)}`, text: content.text, html: content.html }), cache: "no-store" });
    if (!delivery.ok) return response({ error: messages.failure, code: "delivery_failure" }, 502);
    const receipt = await delivery.json().catch(() => null) as { id?: string } | null;
    if (!receipt?.id) return response({ error: messages.failure, code: "delivery_failure" }, 502);
  } catch { return response({ error: messages.failure, code: "delivery_failure" }, 502); }
  return response({ message: messages.success, accepted: true }, 202);
}
