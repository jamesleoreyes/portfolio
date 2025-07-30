import { supabaseConfig } from "@/configs/app";
import { createBrowserClient as supabaseBrowserClient } from "@supabase/ssr";

function createBrowserClient() {
  return supabaseBrowserClient(
    supabaseConfig.url,
    supabaseConfig.anonKey,
  );
};

export default createBrowserClient;