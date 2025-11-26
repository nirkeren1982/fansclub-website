-- ================================================
-- 0005_recommendation_analytics.sql
-- Description: Analytics views for recommendation clicks
-- ================================================

begin;

-- View: Top clicked similar creators per source creator
create or replace view public.v_top_similar_creators as
select
  source_creator_username,
  clicked_creator_username,
  count(*) as click_count,
  max(created_at) as last_clicked_at
from public.recommendation_click_events
group by source_creator_username, clicked_creator_username
order by source_creator_username, click_count desc;

commit;


