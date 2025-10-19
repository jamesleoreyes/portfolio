import { Enums, Tables } from "./generated";

type Post = Tables<'posts'>
type PostReaction = Tables<'post_reactions'>
type PostView = Tables<'post_views'>

type PostStat = Tables<'post_stats'>

type ReactionKind = Enums<'reaction_kind'>
type PostStatus = Enums<'post_status'>

export * from './generated'
export type {
  Post,
  PostReaction,
  PostView,
  PostStat,
  ReactionKind,
  PostStatus
}