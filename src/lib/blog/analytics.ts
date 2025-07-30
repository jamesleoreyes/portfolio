import createServerClient from '@/lib/supabase/server';
import createBrowserClient from '@/lib/supabase/client';
import { AnalyticsEventType, Json, ReactionType } from '@/types/supabase';
import { BlogAnalyticsSummary, BlogReaction, PostAnalytics } from '@/types/Blog';

async function trackPageView(slug: string, sessionId: string): Promise<void> {
  const supabase = await createBrowserClient();

  await supabase.rpc('increment_interaction_count', {
    post_slug: slug,
    interaction_name: 'view',
  });

  await supabase.from('blog_analytics').insert({
    post_slug: slug,
    event_type: 'page_view',
    session_id: sessionId,
    event_data: {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      viewport_width: window.innerWidth,
    },
  });
};

async function trackAnalyticsEvent(
  eventType: AnalyticsEventType,
  sessionId: string,
  postSlug: string,
  eventData: Json,
): Promise<void> {
  const supabase = await createBrowserClient();

  await supabase.from('blog_analytics').insert({
    post_slug: postSlug || null,
    event_type: eventType,
    session_id: sessionId,
    event_data: eventData || null,
  });
};

async function getPostAnalytics(slug: string): Promise<PostAnalytics | null> {
  const supabase = await createServerClient();

  const { data } = await supabase
    .from('blog_posts')
    .select(
      'view_count, like_count, comment_count, share_count, reaction_count'
    )
    .eq('slug', slug)
    .single();

  return data;
};

async function getBlogAnalytics(): Promise<BlogAnalyticsSummary[]> {
  const supabase = await createServerClient();

  const { data } = await supabase
    .from('blog_posts')
    .select('slug, title, view_count, like_count, comment_count, share_count, reaction_count, created_at')
    .order('view_count', { ascending: false });

  return data || [];
};

async function getPostReactions(slug: string): Promise<BlogReaction[]> {
  const supabase = await createServerClient();

  const { data } = await supabase.rpc('get_post_reactions', {
    post_slug: slug,
  });

  return (data || []).map(item => ({
    emoji: item.emoji as ReactionType,
    count: item.count,
  }));
};

export { trackPageView, trackAnalyticsEvent, getBlogAnalytics, getPostAnalytics, getPostReactions };