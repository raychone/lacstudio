import { z } from "zod";
import { pageCopy } from "@/content/i18n/page-copy";

const inquiry = z.object({ name: z.string().trim().min(2).max(100), email: z.string().trim().email().max(254), projectType: z.string().trim().min(2).max(80), budget: z.string().max(80).optional(), timeline: z.string().max(80).optional(), message: z.string().trim().min(20).max(4000), company: z.string().max(0).optional() });
const visits = new Map<string, number[]>();
const contactLocale = (request: Request) => {
  const language = request.headers.get("accept-language")?.slice(0, 2).toLowerCase();
  return language === "fr" || language === "ro" || language === "es" ? language : "en";
};

export async function POST(request: Request) {
  const messages = pageCopy[contactLocale(request)].contact.formMessages!;
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now(); const recent = (visits.get(forwarded) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 5) return Response.json({ error: messages.rateLimit }, { status: 429 });
  visits.set(forwarded, [...recent, now]);
  const parsed = inquiry.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: messages.validation }, { status: 400 });
  if (parsed.data.company) return Response.json({ error: messages.rejected }, { status: 400 });
  // Delivery is intentionally not implemented without an approved provider and secret configuration.
  return Response.json({ error: messages.unavailable }, { status: 503 });
}
