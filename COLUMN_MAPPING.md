# Column Mapping Reference

## Database Table: `public.creators`

### Column Mappings

| Database Column | Website Display | Location |
|----------------|-----------------|----------|
| `photo_count` | "Photos" | Creator Profile Page - Stats Section |
| `video_count` | "Videos" | Creator Profile Page - Stats Section |
| `likes_count` | "Likes" | Creator Profile Page - Stats Section |
| `subscription_price` | "Per Month" | Creator Profile Page & Creator Card |
| `bio` | "About" | Creator Profile Page - About Section |

### Transformation

The API transforms database columns to website interface:
- `photo_count` → `photos_count` (for website compatibility)
- `video_count` → `videos_count` (for website compatibility)
- `likes_count` → `likes_count` (no change)
- `subscription_price` → `subscription_price` (no change)
- `bio` → `bio` (no change)

### Important Notes

- ✅ Query from `public.creators` table directly (NOT `v_creators` view)
- ✅ Database has `photo_count` and `video_count` columns
- ✅ Website interface expects `photos_count` and `videos_count`
- ✅ The API handles the transformation automatically
- ❌ Do NOT use `photos_count` or `videos_count` columns in database (they were deleted)

