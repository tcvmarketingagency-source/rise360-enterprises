import "server-only";
import { createClient } from "@supabase/supabase-js";

// Service-role client. Bypasses RLS entirely, so it must never be imported
// into a client component or otherwise reach the browser bundle.
export function createSupabaseServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase service-role environment variables are not configured.");
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
