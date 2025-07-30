import createServerClient from "@/lib/supabase/server";
import { UserInteractionState } from "@/types/Blog";
import { InteractionType, ReactionType } from "@/types/supabase";

async function toggleInteraction(
  slug: string,
  sessionId: string,
  interactionType: InteractionType,
  reactionEmoji?: ReactionType,
) {
  const supabase = await createServerClient();

  let query = supabase
    .from('blog_interactions')
    .select('id')
    .eq('post_slug', slug)
    .eq('session_id', sessionId)
    .eq('interaction_type', interactionType);

  if (interactionType === 'reaction' && reactionEmoji) {
    query = query.eq('reaction_emoji', reactionEmoji);
  }

  const { data: existingInteraction } = await query.single();

  if (existingInteraction) {
    await supabase.from('blog_interactions').delete().eq('id', existingInteraction.id);
    await supabase.rpc('decrement_interaction_count', {
      post_slug: slug,
      interaction_name: interactionType,
    });
  } else {
    const insertData: any = {
      post_slug: slug,
      session_id: sessionId,
      interaction_type: interactionType,
    };

    if (interactionType === 'reaction' && reactionEmoji) {
      insertData.reaction_emoji = reactionEmoji;
    }

    await supabase.from('blog_interactions').insert(insertData);
    await supabase.rpc('increment_interaction_count', {
      post_slug: slug,
      interaction_name: interactionType,
    });
  };

  const { data } = await supabase
    .from('blog_posts')
    .select('like_count, share_count, reaction_count')
    .eq('slug', slug)
    .single();

  return data;
};

async function toggleLike(slug: string, sessionId: string) {
  const result = await toggleInteraction(slug, sessionId, 'like');
  return result?.like_count || 0;
};

async function toggleShare(slug: string, sessionId: string, platform?: string) {
  if (platform) {
    const supabase = await createServerClient();
    await supabase.from('blog_analytics').insert({
      post_slug: slug,
      event_type: 'post_shared',
      session_id: sessionId,
      event_data: { platform },
    });
  };

  const result = await toggleInteraction(slug, sessionId, 'share');
  return result?.share_count || 0;
};

async function toggleReaction(slug: string, sessionId: string, emoji: ReactionType) {
  const result = await toggleInteraction(slug, sessionId, 'reaction', emoji);
  return result?.reaction_count || 0;
};

async function recordScrolleComplete(slug: string, sessionId: string, scrollPercentage: number) {
  const supabase = await createServerClient();

  const { data: existingInteraction } = await supabase
    .from('blog_interactions')
    .select('id')
    .eq('post_slug', slug)
    .eq('session_id', sessionId)
    .eq('interaction_type', 'scroll_complete')
    .single();

  if (!existingInteraction) {
    await supabase.from('blog_interactions').insert({
      post_slug: slug,
      session_id: sessionId,
      interaction_type: 'scroll_complete',
      metadata: { scroll_percentage: scrollPercentage },
    });

    await supabase.from('blog_analytics').insert({
      post_slug: slug,
      event_type: 'scroll_depth',
      session_id: sessionId,
      event_data: { scroll_percentage: scrollPercentage },
    });
  };
};

async function getUserInteractionState(slug: string, sessionId: string): Promise<UserInteractionState> {
  const supabase = await createServerClient();

  const { data: interactions } = await supabase
    .from('blog_interactions')
    .select('interaction_type, reaction_emoji')
    .eq('post_slug', slug)
    .eq('session_id', sessionId);

  const hasLiked = interactions?.some((i) => i.interaction_type === 'like') || false;
  const hasShared = interactions?.some((i) => i.interaction_type === 'share') || false;
  const hasScrolledComplete = interactions?.some((i) => i.interaction_type === 'scroll_complete') || false;

  const userReactions =
    interactions
      ?.filter((i) => i.interaction_type === 'reaction' && i.reaction_emoji)
      .map((i) => i.reaction_emoji as ReactionType) || [];

  return { hasLiked, hasShared, hasScrolledComplete, userReactions };
};

export {
  toggleInteraction,
  toggleLike,
  toggleShare,
  toggleReaction,
  recordScrolleComplete,
  getUserInteractionState
};