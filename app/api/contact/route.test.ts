import assert from "node:assert/strict";
import { GET, POST } from "./route.ts";
import { pageCopy } from "../../../content/i18n/page-copy.ts";

const environmentKeys = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"] as const;
const savedEnvironment = Object.fromEntries(environmentKeys.map((key) => [key, process.env[key]]));
const originalFetch = globalThis.fetch;
let rateLimitCount = 1;
let resendStatus = 200;
let sentMail: Record<string, unknown> | null = null;

function configure() {
  process.env.RESEND_API_KEY = "re_test";
  process.env.CONTACT_TO_EMAIL = "contact@lacstudio.ro";
  process.env.CONTACT_FROM_EMAIL = "LAC STUDIO <contact@lacstudio.ro>";
  process.env.UPSTASH_REDIS_REST_URL = "https://rate-limit.example";
  process.env.UPSTASH_REDIS_REST_TOKEN = "token";
}
function request(body: Record<string, string>, locale = "en") {
  return new Request("https://lacstudio.ro/api/contact", { method: "POST", headers: { "content-type": "application/json", "accept-language": locale, "x-forwarded-for": "203.0.113.10" }, body: JSON.stringify(body) });
}
const validInquiry = { name: "Ana Pop", email: "ana@example.com", projectType: "Web application", budget: "", timeline: "", message: "I need a customer portal for a growing service team.", company: "" };

globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input);
  if (url.includes("rate-limit.example")) return Response.json([{ result: rateLimitCount++ }, { result: 1 }]);
  if (url.includes("api.resend.com")) {
    sentMail = JSON.parse(String(init?.body));
    return resendStatus === 200 ? Response.json({ id: "email_123" }) : Response.json({ message: "Provider error" }, { status: resendStatus });
  }
  throw new Error(`Unexpected fetch: ${url}`);
}) as typeof fetch;

for (const key of environmentKeys) delete process.env[key];
assert.equal((await GET()).status, 200, "Availability endpoint remains safe to call without configuration");
for (const locale of ["en", "fr", "ro", "es"] as const) {
  const result = await POST(request(validInquiry, locale));
  assert.equal(result.status, 503, `${locale}: unconfigured delivery is unavailable`);
  assert.equal((await result.json()).error, pageCopy[locale].contact.formMessages?.unavailable, `${locale}: unavailable response is localized`);
}

configure(); rateLimitCount = 1; resendStatus = 200; sentMail = null;
const successful = await POST(request(validInquiry, "ro"));
assert.equal(successful.status, 202, "A Resend acceptance produces success");
assert.equal((await successful.json()).accepted, true);
assert.equal(sentMail?.to?.[0], "contact@lacstudio.ro");
assert.equal(sentMail?.reply_to, validInquiry.email);
assert.match(String(sentMail?.subject), /^New LAC STUDIO inquiry — Ana Pop$/);
assert.match(String(sentMail?.text), /Locale:\nro/);

rateLimitCount = 1; sentMail = null;
const escaped = await POST(request({ ...validInquiry, message: "A safe message with <img src=x onerror=alert(1)> included." }));
assert.equal(escaped.status, 202);
assert.match(String(sentMail?.html), /&lt;img src=x onerror=alert\(1\)&gt;/, "Untrusted HTML is escaped");
assert.doesNotMatch(String(sentMail?.html), /<img src=x/, "Untrusted HTML is never interpolated as markup");

rateLimitCount = 1; sentMail = null;
const invalid = await POST(request({ ...validInquiry, email: "not-an-email" }));
assert.equal(invalid.status, 400, "Invalid inputs are rejected server-side");
assert.equal(sentMail, null);
const injection = await POST(request({ ...validInquiry, name: "Ana\r\nBcc: attacker@example.com" }));
assert.equal(injection.status, 400, "Header injection characters are rejected");
assert.equal(sentMail, null);
const honeypot = await POST(request({ ...validInquiry, company: "Bots Ltd" }));
assert.equal(honeypot.status, 400, "Honeypot submissions are rejected");
assert.equal(sentMail, null);

rateLimitCount = 6;
const limited = await POST(request(validInquiry));
assert.equal(limited.status, 429, "Durable rate limit response is enforced");

rateLimitCount = 1; resendStatus = 500;
const providerFailure = await POST(request(validInquiry, "fr"));
assert.equal(providerFailure.status, 502, "Provider failures are not represented as success");
assert.equal((await providerFailure.json()).error, pageCopy.fr.contact.formMessages?.failure, "Provider failure is localized");

globalThis.fetch = originalFetch;
for (const key of environmentKeys) {
  const value = savedEnvironment[key];
  if (value === undefined) delete process.env[key]; else process.env[key] = value;
}
console.log("Contact route tests passed.");
