# Image Loading Changes - Local Images from Folder

## Overview
The website now loads creator profile images from the local `/public/images/` folder instead of from the database `profile_image_url` column.

## Changes Made

### 1. New Utility Function
**File:** `apps/website/src/utils/imageUtils.ts`

Created utility functions to handle local image loading:
- `getCreatorImageUrl(username)` - Returns `/images/{username}.webp` path
- `handleImageError(event, username)` - Handles image load errors by trying alternative extensions (jpg, jpeg, png)
- `getDefaultImageUrl()` - Returns fallback image URL

### 2. Updated Components

#### `CreatorCard.tsx`
- Changed from: `creator.profile_image_url`
- Changed to: `getCreatorImageUrl(creator.username)`
- Added: `onError` handler to try alternative image extensions

#### `CreatorProfile.tsx`
- Changed from: `creator.profile_image_url`
- Changed to: `getCreatorImageUrl(creator.username)`
- Updated: Hero image, MetaTags ogImage, and added error handling

#### `StructuredData.tsx`
- Updated `PersonSchema` to use local image URLs
- Updated `ItemListSchema` to use local image URLs

## Image File Structure

Images should be placed in:
```
apps/website/public/images/
├── username1.webp
├── username2.jpg
├── username3.png
└── ...
```

## Supported Formats
The system tries these extensions in order:
1. `.webp` (primary)
2. `.jpg`
3. `.jpeg`
4. `.png`

If none are found, it falls back to a default Unsplash image.

## How It Works

1. **Initial Load**: Tries `/images/{username}.webp`
2. **On Error**: Automatically tries `.jpg`, `.jpeg`, `.png` in sequence
3. **Final Fallback**: Uses default Unsplash image if all fail

## Benefits

- ✅ Faster loading (local files vs external URLs)
- ✅ No dependency on external image hosting
- ✅ Better control over image optimization
- ✅ Reduced database queries
- ✅ Automatic fallback handling

## Next Steps

1. Ensure scraper saves images to `/apps/website/public/images/` folder
2. Image files should be named exactly as the username (e.g., `jessicabarton.webp`)
3. Test image loading on the website
4. Verify fallback behavior for missing images

