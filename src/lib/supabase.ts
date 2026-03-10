import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function isConfigured(val: string | undefined): val is string {
  return !!val && !val.startsWith("your-");
}

export const supabaseConfigured = isConfigured(supabaseUrl) && isConfigured(supabaseAnonKey);

if (!supabaseConfigured) {
  console.warn(
    "[Supabase] Authentication is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local to enable auth."
  );
}

export const supabase: SupabaseClient | null = supabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
