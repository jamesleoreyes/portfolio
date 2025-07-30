import { Constants, Database } from "./Supabase";

type BlogAnalytic = Database['public']['Tables']['blog_analytics']['Row'];
type BlogComment = Database['public']['Tables']['blog_comments']['Row'];
type BlogInteraction = Database['public']['Tables']['blog_interactions']['Row'];
type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
type BlogSearch = Database['public']['Tables']['blog_searches']['Row'];
type NewsletterSubscription = Database['public']['Tables']['newsletter_subscriptions']['Row'];

const AnalyticsEventType = Constants.public.Enums.analytics_event_type;
const InteractionType = Constants.public.Enums.interaction_type;
const ReactionType = Constants.public.Enums.reaction_type;

export type { BlogAnalytic, BlogComment, BlogInteraction, BlogPost, BlogSearch, NewsletterSubscription };
export { AnalyticsEventType, InteractionType, ReactionType };
export * from "./Supabase";