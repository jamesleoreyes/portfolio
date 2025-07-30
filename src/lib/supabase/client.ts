import { createBrowserClient as supabaseBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/supabase/Supabase";
import { supabaseConfig } from "@/configs/app";

function createBrowserClient() {
  return supabaseBrowserClient<Database>(
    supabaseConfig.url,
    supabaseConfig.anonKey,
  );
};

export default createBrowserClient;