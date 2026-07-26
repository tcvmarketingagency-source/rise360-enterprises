"use server";

import { createHash } from "crypto";
import { headers } from "next/headers";
import { consultationSchema } from "@/lib/consultation-schema";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

export interface ConsultationActionResult {
  ok: boolean;
  error?: string;
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

// In-memory, single-instance only — resets on restart/redeploy and isn't
// shared across instances. A first line of defense, not a real rate limiter.
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ipHash: string): boolean {
  const now = Date.now();
  const timestamps = (recentSubmissions.get(ipHash) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  recentSubmissions.set(ipHash, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function submitConsultation(input: unknown): Promise<ConsultationActionResult> {
  const parsed = consultationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please review your answers and try again." };
  }

  const { website, ...data } = parsed.data;

  // Honeypot tripped — report success so the bot learns nothing, but never
  // touch the database.
  if (website) {
    return { ok: true };
  }

  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";
  const ipHash = createHash("sha256").update(ip).digest("hex");
  const userAgent = headersList.get("user-agent") ?? null;

  if (isRateLimited(ipHash)) {
    return { ok: false, error: "Too many requests. Please try again in a minute." };
  }

  const supabase = createSupabaseServiceClient();

  const { error } = await supabase.from("consultations").insert({
    objective: data.objective,
    practices: data.practices,
    jurisdictions: data.jurisdictions,
    horizon: data.horizon,
    scale: data.scale || null,
    full_name: data.fullName,
    entity: data.entity || null,
    email: data.email,
    phone: data.phone || null,
    message: data.message || null,
    user_agent: userAgent,
    ip_hash: ipHash,
  });

  if (error) {
    console.error("consultations insert failed", error);
    return {
      ok: false,
      error: "Something went wrong on our end. Please try again in a moment.",
    };
  }

  return { ok: true };
}
