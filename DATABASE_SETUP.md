# Database Setup - Column Reference

## ✅ Correct Setup

### Table: `public.creators`

**Query this table directly** - NOT the `v_creators` view.

### Column Names in Database:

| Column Name | Website Display | Notes |
|------------|-----------------|-------|
| `photo_count` | "Photos" | Stats section on creator page |
| `video_count` | "Videos" | Stats section on creator page |
| `likes_count` | "Likes" | Stats section on creator page |
| `subscription_price` | "Per Month" | Creator page & card |
| `bio` | "About" | About section on creator page |

### ✅ Correct SQL Query:

```sql
SELECT username, photo_count, video_count, likes_count, subscription_price 
FROM public.creators 
WHERE username = 'jessicabarton'
LIMIT 1;
```

### ❌ Wrong SQL Query (DO NOT USE):

```sql
-- WRONG - these columns don't exist or were deleted
SELECT username, photos_count, videos_count, likes_count, subscription_price 
FROM public.creators 
WHERE username = 'jessicabarton'
LIMIT 1;
```

---

## Website Code

The website API (`apps/website/src/lib/api.ts`) automatically:
1. ✅ Queries from `public.creators` table
2. ✅ Maps `photo_count` → `photos_count` for website interface
3. ✅ Maps `video_count` → `videos_count` for website interface
4. ✅ Keeps `likes_count`, `subscription_price`, `bio` as-is

---

## Summary

- **Database has:** `photo_count`, `video_count`
- **Website expects:** `photos_count`, `videos_count`
- **API handles:** Automatic transformation
- **Source:** `public.creators` table (directly from scraper)

