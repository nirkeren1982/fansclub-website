# 🚀 Quick Start - FansClubOnly

## **Complete These 3 Steps Before Launch**

---

## **Step 1: Configure Environment Variables** 🔐

### Edit your `.env` file:

```bash
# Open .env file in your editor
code .env
# or
nano .env
```

### Add these two lines with YOUR credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to get these?**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings → API
4. Copy "Project URL" and "anon public" key

---

## **Step 2: Create OG Image** 📸

### Quick Method:

1. **Open the template in your browser:**
   ```
   /public/og-image-template.html
   ```

2. **Take a screenshot:**
   - Right-click the gradient box → Inspect
   - Right-click `<div class="og-image">` in DevTools
   - Click "Capture node screenshot"

3. **Save it as:**
   ```
   /public/og-default.jpg
   ```

**OR use Canva/Figma:**
- Size: 1200 x 630 pixels
- Save as: `og-default.jpg` in `/public/` folder

---

## **Step 3: Generate Sitemap** 🗺️

### Run this command:

```bash
npm run generate-sitemap
```

**Expected output:**
```
✅ Sitemap generated successfully!
   Total URLs: 1806
```

---

## **Verify Everything Works** ✅

### Run the setup checker:

```bash
npm run check-setup
```

This will verify:
- ✅ Environment variables configured
- ✅ OG image exists
- ✅ Sitemap generated
- ✅ All files in place

---

## **If Setup Checker Passes** 🎉

You're ready to build and deploy!

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## **Common Issues** 🔧

### ❌ "Environment variables must be set"
**Fix:** Make sure `.env` file exists and has both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

### ❌ "og-default.jpg not found"
**Fix:** Create the image and save it as `/public/og-default.jpg` (exactly this name)

### ❌ Sitemap generation fails
**Fix:** Check your Supabase credentials are correct and the database has creators

---

## **Ready to Deploy?** 🚀

After all checks pass:

1. **Push to GitHub** (if using version control)
2. **Deploy to Vercel/Netlify:**
   ```bash
   # Vercel
   vercel

   # Or Netlify
   netlify deploy
   ```
3. **Set environment variables on your hosting platform**
4. **Submit sitemap to Google Search Console**

---

## **Need Detailed Help?** 📖

See **SETUP_GUIDE.md** for comprehensive step-by-step instructions.

---

**That's it! Your site is ready to launch! 🎉**

