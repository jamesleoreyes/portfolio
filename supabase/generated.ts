export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      post_reactions: {
        Row: {
          anon_id: string
          created_at: string | null
          id: number
          kind: Database["public"]["Enums"]["reaction_kind"]
          post_slug: string
        }
        Insert: {
          anon_id: string
          created_at?: string | null
          id?: number
          kind: Database["public"]["Enums"]["reaction_kind"]
          post_slug: string
        }
        Update: {
          anon_id?: string
          created_at?: string | null
          id?: number
          kind?: Database["public"]["Enums"]["reaction_kind"]
          post_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_reactions_post_slug_fkey"
            columns: ["post_slug"]
            isOneToOne: false
            referencedRelation: "post_stats"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "post_reactions_post_slug_fkey"
            columns: ["post_slug"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["slug"]
          },
        ]
      }
      post_views: {
        Row: {
          anon_id: string
          created_at: string | null
          id: number
          post_slug: string
        }
        Insert: {
          anon_id: string
          created_at?: string | null
          id?: number
          post_slug: string
        }
        Update: {
          anon_id?: string
          created_at?: string | null
          id?: number
          post_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_views_post_slug_fkey"
            columns: ["post_slug"]
            isOneToOne: false
            referencedRelation: "post_stats"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "post_views_post_slug_fkey"
            columns: ["post_slug"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["slug"]
          },
        ]
      }
      posts: {
        Row: {
          canonical_url: string | null
          cover_url: string | null
          created_at: string | null
          id: string
          published_at: string
          slug: string
          status: Database["public"]["Enums"]["post_status"]
          summary: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          cover_url?: string | null
          created_at?: string | null
          id?: string
          published_at: string
          slug: string
          status?: Database["public"]["Enums"]["post_status"]
          summary?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          cover_url?: string | null
          created_at?: string | null
          id?: string
          published_at?: string
          slug?: string
          status?: Database["public"]["Enums"]["post_status"]
          summary?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      post_stats: {
        Row: {
          last_activity_at: string | null
          reactions_by_kind: Json | null
          reactions_total: number | null
          slug: string | null
          views: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      decrement_interaction_count: {
        Args: { interaction_name: string; post_slug: string }
        Returns: undefined
      }
      get_interaction_counts: {
        Args: { post_slug: string }
        Returns: {
          count: number
          interaction_type: string
        }[]
      }
      get_post_reactions: {
        Args: { post_slug: string }
        Returns: {
          count: number
          emoji: string
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      increment_interaction_count: {
        Args: { interaction_name: string; post_slug: string }
        Returns: undefined
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      post_status: "draft" | "published" | "archived"
      reaction_kind: "like" | "heart" | "fire" | "mindblown"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      post_status: ["draft", "published", "archived"],
      reaction_kind: ["like", "heart", "fire", "mindblown"],
    },
  },
} as const
