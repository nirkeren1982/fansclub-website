-- ================================================
-- 0004_user_tracking.sql
-- Description: Anonymous user + tracking tables for
--              search behaviour and recommendation clicks
-- ================================================

begin;

-- ---------- Table: users_anonymous ----------
create table if not exists public.users_anonymous (
  id uuid primary key default gen_random_uuid(),
  anon_user_id text not null unique,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),

  -- Optional, populated from geo-IP or explicit user input
  country text,
  city text,
  inferred_gender text, -- e.g. 'man','woman','couple','other'
  age_range text,       -- e.g. '18-24','25-34','35-44','45+'

  user_agent text
);

create index if not exists idx_users_anonymous_anon_user_id
  on public.users_anonymous (anon_user_id);

-- ---------- Table: search_events ----------
create table if not exists public.search_events (
  id uuid primary key default gen_random_uuid(),

  anon_user_id text not null,
  session_id text,

  query text not null,
  normalized_query text,
  result_count integer,

  clicked_creator_username text,
  clicked_position integer,

  source text, -- e.g. 'header_search','landing_search'

  country text,
  city text,

  created_at timestamptz not null default now()
);

create index if not exists idx_search_events_anon_user_id
  on public.search_events (anon_user_id);

create index if not exists idx_search_events_created_at
  on public.search_events (created_at desc);

create index if not exists idx_search_events_normalized_query
  on public.search_events (normalized_query);

-- ---------- Table: recommendation_click_events ----------
create table if not exists public.recommendation_click_events (
  id uuid primary key default gen_random_uuid(),

  anon_user_id text not null,
  session_id text,

  source_creator_username text not null,
  clicked_creator_username text not null,
  position integer,
  section text, -- e.g. 'similar_creators','trending_creators'

  country text,
  city text,

  created_at timestamptz not null default now()
);

create index if not exists idx_rec_click_events_anon_user_id
  on public.recommendation_click_events (anon_user_id);

create index if not exists idx_rec_click_events_source_creator
  on public.recommendation_click_events (source_creator_username);

create index if not exists idx_rec_click_events_clicked_creator
  on public.recommendation_click_events (clicked_creator_username);

create index if not exists idx_rec_click_events_created_at
  on public.recommendation_click_events (created_at desc);

commit;


