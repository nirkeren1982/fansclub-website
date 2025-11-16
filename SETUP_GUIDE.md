# Setup Guide - FansClubOnly

## ✅ Step-by-Step Setup Instructions

---

## **Step 1: Environment Variables** 🔐

### **1.1 Check your `.env` file**

Make sure your `.env` file exists in the root directory:
```
/Users/nirkeren/fansclub-platform/apps/website/.env
```

### **1.2 Required Environment Variables**

Your `.env` file should contain:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### **1.3 Where to Find Your Supabase Credentials**

1. Go to [https://supabase.com](https://supabase.com)
2. Log in to your account
3. Select your project
4. Go to **Settings** → **API**
5. Copy:
   - **Project URL** → Use for `VITE_SUPABASE_URL`
   - **anon public** key → Use for `VITE_SUPABASE_ANON_KEY`

### **1.4 Example Format**

```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjE2MTYxNiwiZXhwIjoxOTMxNzM3NjE2fQ.abc123xyz
```

⚠️ **Important**: Never commit your `.env` file to Git!

---

## **Step 2: Generate Sitemap** 🗺️

### **2.1 After Setting Environment Variables**

Once your `.env` file is properly configured, run:

```bash
cd /Users/nirkeren/fansclub-platform/apps/website
npm run generate-sitemap
```

### **2.2 Expected Output**

```
Starting sitemap generation...
Adding static pages...
Adding category pages...
Fetching creators from database...
Adding 1700 creator profiles...
Generating XML...
✅ Sitemap generated successfully!
   Total URLs: 1806
   Output: /Users/nirkeren/fansclub-platform/apps/website/public/sitemap.xml
Done!
```

### **2.3 Verify Sitemap**

Check that the file was created:
```bash
ls -la public/sitemap.xml
```

You should see a file around 200-300KB in size.

---

## **Step 3: Create Default OG Image** 📸

### **Option A: Use the HTML Template** (Quick)

1. Open in browser:
   ```
   /Users/nirkeren/fansclub-platform/apps/website/public/og-image-template.html
   ```

2. Take a screenshot of the gradient box (1200x630px)

3. **Using Chrome DevTools** (Recommended):
   - Right-click on the gradient box
   - Click "Inspect"
   - In DevTools, right-click on `<div class="og-image">`
   - Select "Capture node screenshot"
   - Save as: `og-default.jpg`

4. Move the file to:
   ```
   /Users/nirkeren/fansclub-platform/apps/website/public/og-default.jpg
   ```

### **Option B: Use Canva** (Professional)

1. Go to [https://www.canva.com](https://www.canva.com)
2. Create custom size: **1200 x 630 pixels**
3. Design your image with:
   - FansClubOnly branding
   - Tagline: "Discover Top OnlyFans Creators"
   - Purple gradient background (#667eea to #764ba2)
   - Logo/icon
4. Download as JPG
5. Save to: `/Users/nirkeren/fansclub-platform/apps/website/public/og-default.jpg`

### **Option C: Use Design Software**

Use Figma, Photoshop, or any design tool:
- **Dimensions**: 1200 x 630 pixels
- **Format**: JPG (recommended) or PNG
- **File size**: Under 1MB
- **Filename**: `og-default.jpg`
- **Location**: `/public/` directory

---

## **Step 4: Verify Everything Works** ✅

### **4.1 Start Development Server**

```bash
cd /Users/nirkeren/fansclub-platform/apps/website
npm run dev
```

### **4.2 Test Pages**

Visit these URLs to verify:
- [http://localhost:8081/](http://localhost:8081/) - Homepage
- [http://localhost:8081/explore](http://localhost:8081/explore) - Explore page
- [http://localhost:8081/category/fitness](http://localhost:8081/category/fitness) - Category page
- [http://localhost:8081/search?q=test](http://localhost:8081/search?q=test) - Search

### **4.3 Check Meta Tags**

1. Open any page
2. Right-click → "View Page Source"
3. Look for these tags in `<head>`:
   ```html
   <title>...</title>
   <meta name="description" content="..." />
   <meta property="og:image" content="https://fansclubonly.com/og-default.jpg" />
   <script type="application/ld+json">...</script>
   ```

### **4.4 Verify Sitemap**

Visit: [http://localhost:8081/sitemap.xml](http://localhost:8081/sitemap.xml)

You should see XML content with all your URLs.

---

## **Step 5: Build for Production** 🏗️

### **5.1 Create Production Build**

```bash
npm run build
```

### **5.2 Preview Production Build**

```bash
npm run preview
```

### **5.3 Check Build Output**

The build creates a `/dist` folder with:
- Optimized HTML, CSS, JS
- All assets (images, fonts)
- `sitemap.xml`
- `robots.txt`

---

## **Common Issues & Solutions** 🔧

### **Issue 1: Sitemap Generation Fails**

**Error**: `VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set`

**Solution**:
1. Check `.env` file exists
2. Verify variable names are correct (must start with `VITE_`)
3. No spaces around `=` sign
4. Values should not have quotes

### **Issue 2: Images Don't Load**

**Solution**:
- Make sure `og-default.jpg` is in `/public/` directory
- Check file size (under 1MB)
- Verify filename is exactly `og-default.jpg` (lowercase)

### **Issue 3: Meta Tags Not Showing**

**Solution**:
- Clear browser cache
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check browser console for errors

---

## **Quick Checklist** ✅

Before launching, make sure:

- [ ] `.env` file has Supabase credentials
- [ ] Sitemap generated successfully (`npm run generate-sitemap`)
- [ ] `og-default.jpg` created and placed in `/public/`
- [ ] All pages load without errors
- [ ] Search functionality works
- [ ] Creator profiles display correctly
- [ ] Mobile responsive design works
- [ ] Build completes successfully (`npm run build`)

---

## **Next Steps After Setup** 🚀

Once these steps are complete:

1. **Deploy to Production**
   - Vercel, Netlify, or your hosting platform
   - Configure environment variables on hosting platform

2. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

3. **Set Up Analytics**
   - Google Analytics 4
   - Track conversions and traffic

4. **Monitor & Optimize**
   - Check error logs
   - Monitor page speed
   - Analyze user behavior

---

## **Need Help?** 💬

If you encounter any issues:
1. Check the error message carefully
2. Verify all steps were followed
3. Check browser console for JavaScript errors
4. Review server logs if deployed

---

**Good luck with your launch! 🎉**

