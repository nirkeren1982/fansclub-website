# Profile Images HQ Folder

This folder contains high-quality profile images downloaded from the `profile_image_url_hq` database column.

## File Naming Convention

Each image file is named using the creator's **username** exactly as it appears in the database.

**Format:** `{username}.webp`

### Examples:
- `adriannaeves.webp`
- `abbytheredhead.webp`
- `addisondanger.webp`

## Image Format

All images are stored as **WebP** format with 90% quality for optimal web performance while maintaining high quality.

## How to Populate This Folder

Run the download script from the backend:

```bash
cd /Users/nirkeren/fansclub-platform/apps/backend
python3 scripts/download_hq_images.py
```

This script will:
1. Fetch all creators from the database with `profile_image_url_hq` values
2. Download images from those URLs
3. Convert to WebP format
4. Save them here as `{username}.webp`

## Fallback Strategy

The application automatically falls back through this order:
1. `/profile_images_hq/{username}.webp` (HQ images from DB)
2. `/images/{username}.webp` (LQ images)
3. Placeholder image

## Notes

- Images are downloaded directly from the URLs stored in `profile_image_url_hq` column
- The script processes in batches to avoid rate limits
- Already downloaded images are skipped (safe to re-run)
- If an image fails to download, the app will fallback to `/images/` folder

