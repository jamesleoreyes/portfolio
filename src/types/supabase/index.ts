import { Constants, Database } from "./Supabase";

type BlogAnalytic = Database['public']['Tables']['blog_analytics']['Row'];
type BlogComment = Database['public']['Tables']['blog_comments']['Row'];
type BlogInteraction = Database['public']['Tables']['blog_interactions']['Row'];
type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
type BlogSearch = Database['public']['Tables']['blog_searches']['Row'];
type NewsletterSubscription = Database['public']['Tables']['newsletter_subscriptions']['Row'];

type AnalyticsEventType = (typeof ANALYTICS_EVENT_TYPES)[number];
type InteractionType = (typeof INTERACTION_TYPES)[number];
type ReactionType = (typeof REACTION_TYPES)[number];

const ANALYTICS_EVENT_TYPES = Constants.public.Enums.analytics_event_type;
const INTERACTION_TYPES = Constants.public.Enums.interaction_type;
const REACTION_TYPES = Constants.public.Enums.reaction_type;

export type {
  BlogAnalytic,
  BlogComment,
  BlogInteraction,
  BlogPost,
  BlogSearch,
  NewsletterSubscription,
  AnalyticsEventType,
  InteractionType,
  ReactionType
};
export {
  ANALYTICS_EVENT_TYPES,
  INTERACTION_TYPES,
  REACTION_TYPES
};
export * from "./Supabase";