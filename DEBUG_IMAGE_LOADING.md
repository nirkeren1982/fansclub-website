# Debug Image Loading - Step by Step Guide

## How to Verify Image Loading is Working Correctly

### Step 1: Open Browser DevTools
1. Open your website in the browser
2. Press `F12` (or right-click → Inspect)
3. Go to the **Console** tab

### Step 2: Check Console Logs

You should see logs like this when images load:

```
[getCreatorImageUrl] Loading local image for "dianawhales": /images/dianawhales.webp
[CreatorCard] Loading image for dianawhales: /images/dianawhales.webp
```

If the image file doesn't exist, you'll see:

```
[handleImageError] Image failed for "dianawhales": {currentSrc: "...", currentExt: "webp", tryingNext: true}
[handleImageError] Trying next extension: /images/dianawhales.jpg
[handleImageError] Trying next extension: /images/dianawhales.jpeg
[handleImageError] Trying next extension: /images/dianawhales.png
[handleImageError] All extensions tried for "dianawhales", using default image
```

### Step 3: Check Network Tab

1. Go to **Network** tab in DevTools
2. Filter by **Img** (images only)
3. Refresh the page
4. Look for requests to `/images/` folder

**Expected behavior:**
- ✅ First request: `/images/dianawhales.webp` → 404 (if file doesn't exist)
- ✅ Then tries: `/images/dianawhales.jpg` → 404
- ✅ Then tries: `/images/dianawhales.jpeg` → 404
- ✅ Then tries: `/images/dianawhales.png` → 404
- ✅ Finally loads: Unsplash default image

### Step 4: Inspect HTML Element

1. Right-click on a creator card image
2. Select **Inspect Element**
3. Look at the `<img>` tag's `src` attribute

**What you should see:**
```html
<!-- Initial load (before error) -->
<img src="/images/dianawhales.webp" ... />

<!-- After all extensions fail -->
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" ... />
```

### Step 5: Verify Code is NOT Using Database

Check that the code is NOT using `creator.profile_image_url`:

1. In DevTools, go to **Sources** tab
2. Find `CreatorCard.tsx`
3. Search for `profile_image_url`
4. Should NOT find it being used for `src` attribute

### Common Issues

#### Issue: Still seeing database URLs
**Solution:** Clear browser cache and hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`)

#### Issue: No console logs appearing
**Solution:** Make sure you're on `localhost` (logs only appear in development)

#### Issue: Images not loading even when files exist
**Solution:** 
- Check file names match exactly (case-sensitive)
- Check file extensions (.webp, .jpg, etc.)
- Verify files are in `apps/website/public/images/` folder
- Restart dev server after adding images

### Quick Test

Create a test image to verify the system works:

```bash
# Create a test image file
touch apps/website/public/images/dianawhales.webp
# Or copy an existing image
cp some-image.webp apps/website/public/images/dianawhales.webp
```

Then refresh the page - the image should load!

