# High-Quality Creator Images Folder

This folder contains high-quality profile images for creators.

## File Naming Convention

Each image file should be named using the creator's **username** exactly as it appears in the database.

**Format:** `{username}.{extension}`

### Examples:
- `adriannaeves.webp`
- `abbytheredhead.jpg`
- `addisondanger.png`

## Supported Image Formats

- `.webp` (preferred - best compression)
- `.jpg` / `.jpeg`
- `.png`

## Fallback Strategy

The application will automatically:
1. Try to load from `/images-hq/{username}.webp` (HQ images)
2. Try alternative extensions (jpg, jpeg, png) in HQ folder
3. Fallback to `/images/{username}.webp` (LQ images)
4. Fallback to placeholder image if none found

## Organization

- Place all high-quality creator images in this folder
- Use the creator's exact username from the database
- Match the naming convention of the low-quality images in `/public/images/`

## Notes

- Images should be high resolution (minimum 400x400px recommended)
- Optimize file sizes for web performance
- Keep the same naming pattern as existing images in `/public/images/`

