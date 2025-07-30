import { BlogPost, ReactionType } from "./supabase";

interface BlogReaction {
  emoji: ReactionType;
  count: number;
}

type PostAnalytics = Pick<BlogPost, 'view_count' | 'like_count' | 'comment_count' | 'share_count' | 'reaction_count'>;
type BlogAnalyticsSummary = Pick<BlogPost, 'slug' | 'title' | 'view_count' | 'like_count' | 'comment_count' | 'share_count' | 'reaction_count' | 'created_at'>;

interface InteractionCounts {
  likes: number;
  views: number;
  shares: number;
  reactions: number;
  scroll_completes: number;
}

interface UserInteractionState {
  hasLiked: boolean;
  hasShared: boolean;
  userReactions: ReactionType[];
  hasScrolledComplete: boolean;
}

export type {
  BlogReaction,
  InteractionCounts,
  PostAnalytics,
  BlogAnalyticsSummary,
  UserInteractionState
};