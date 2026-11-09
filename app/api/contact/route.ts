import { z } from "zod";

const inquiry = z.object({ name: z.string().trim().min(2).max(100), email: z.string().trim().email().max(254), projectType: z.string().trim().min(2).max(80), budget: z.string().max(80).optional(), timeline: z.string().max(80).optional(), message: z.string().trim().min(20).max(4000), company: z.string().max(0).optional() });
const visits = new Map<string, number[]>();

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now(); const recent = (visits.get(forwarded) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 5) return Response.json({ error: "Please wait a moment before trying again." }, { status: 429 });
  visits.set(forwarded, [...recent, now]);
  const parsed = inquiry.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "Please check the required contact details and project description." }, { status: 400 });
  if (parsed.data.company) return Response.json({ error: "Your inquiry could not be processed." }, { status: 400 });
  // Delivery is intentionally not implemented without an approved provider and secret configuration.
  return Response.json({ error: "Inquiry delivery is not configured yet. Please return when a verified contact channel is available." }, { status: 503 });
}
