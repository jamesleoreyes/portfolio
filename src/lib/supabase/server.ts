import { cookies } from "next/headers";
import { createServerClient as supabaseServerClient } from "@supabase/ssr";
import { Database } from "@/types/supabase/Supabase";
import { supabaseConfig } from "@/configs/app";

async function createServerClient() {
  const cookieStore = await cookies();

  return supabaseServerClient<Database>(
    supabaseConfig.url,
    supabaseConfig.anonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set({ name, value, ...options });
            });
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};

export default createServerClient;