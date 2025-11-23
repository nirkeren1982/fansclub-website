# 📸 How to Create OG Image - Step by Step

**Time Required:** 5-10 minutes  
**Image Specs:** 1200 x 630 pixels, JPG format

---

## 🚀 **Quick Method: Screenshot (5 minutes)**

### **Step 1: Open the Template**

```bash
# Open this file in your browser:
/Users/nirkeren/fansclub-platform/apps/website/public/og-image-template.html

# Or just double-click it in Finder
```

### **Step 2: Take Screenshot Using Chrome DevTools**

1. **Open in Chrome or Safari**
2. **Right-click** on the purple gradient box
3. Click **"Inspect"** (or press `F12`)
4. In the DevTools panel (Elements tab), find:
   ```html
   <div class="og-image" id="og-image">
   ```
5. **Right-click** on that `<div>` element
6. Select **"Capture node screenshot"**
7. Image will save to your Downloads folder

### **Step 3: Move and Rename**

```bash
# Move from Downloads to public folder
mv ~/Downloads/og-image.png /Users/nirkeren/fansclub-platform/apps/website/public/og-default.jpg

# Or if it saved with a different name:
mv ~/Downloads/Screenshot*.png /Users/nirkeren/fansclub-platform/apps/website/public/og-default.jpg
```

**Note:** Make sure it's named exactly `og-default.jpg` (lowercase, no spaces)

### **Step 4: Commit and Deploy**

```bash
cd /Users/nirkeren/fansclub-platform/apps/website
git add public/og-default.jpg
git commit -m "Add default OpenGraph image for social sharing"
git push origin main
vercel --prod
```

---

## 🎨 **Professional Method: Canva (15 minutes)**

### **Step 1: Create Canva Account**

1. Go to [https://www.canva.com](https://www.canva.com)
2. Sign up (free account is fine)

### **Step 2: Create Custom Size**

1. Click **"Create a design"**
2. Click **"Custom size"**
3. Enter dimensions:
   - Width: **1200 pixels**
   - Height: **630 pixels**
4. Click **"Create new design"**

### **Step 3: Design Your Image**

**Background:**
- Add gradient background
- Colors: #667eea (top) to #764ba2 (bottom)
- Or use purple solid color

**Add Elements:**

1. **Logo/Icon:**
   - Add a white rounded square (80x80px)
   - Add letter "F" in purple (#667eea)
   - Position: Center-top

2. **Brand Name:**
   - Text: "FansClubOnly"
   - Font: Montserrat Bold or similar
   - Size: 72pt
   - Color: White
   - Position: Below logo

3. **Tagline:**
   - Text: "Discover Top OnlyFans Creators"
   - Font: Montserrat Medium
   - Size: 36pt
   - Color: White (90% opacity)
   - Position: Below brand name

4. **Stats (Optional):**
   - Text: "967+ Creators | 97 Categories | Free"
   - Font: Montserrat Regular
   - Size: 24pt
   - Color: White (85% opacity)
   - Position: Bottom center

**Design Tips:**
- Keep text centered
- Leave 60px margin on all sides
- Use high contrast (white text on dark purple)
- Add subtle shadow to text for depth
- Keep it simple and clean

### **Step 4: Download**

1. Click **"Share"** → **"Download"**
2. File type: **JPG**
3. Quality: **Standard** (compressed)
4. Click **"Download"**

### **Step 5: Save and Deploy**

1. Save downloaded file as:
   ```
   /Users/nirkeren/fansclub-platform/apps/website/public/og-default.jpg
   ```

2. Deploy:
   ```bash
   cd /Users/nirkeren/fansclub-platform/apps/website
   git add public/og-default.jpg
   git commit -m "Add professional OpenGraph image"
   git push origin main
   vercel --prod
   ```

---

## 📐 **Image Specifications**

**Required:**
- **Dimensions:** 1200 x 630 pixels (exact)
- **Format:** JPG (recommended) or PNG
- **File size:** Under 1MB (ideally under 300KB)
- **Filename:** `og-default.jpg` (exact, lowercase)
- **Location:** `/public/` folder

**Recommended Content:**
- Brand name/logo
- Tagline or value proposition
- High contrast colors
- Readable text (avoid small fonts)
- Professional appearance
- No complex details (will be shown small on social media)

**Don't Include:**
- Too much text
- Small fonts (under 30pt)
- Important details in corners (may be cropped)
- Low contrast colors
- Blurry or pixelated images

---

## ✅ **Verify It Works**

### **Test on Facebook:**
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL: `https://website-4j38y8xfw-nirk2111s-projects.vercel.app`
3. Click "Debug"
4. Should show your OG image

### **Test on Twitter:**
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL
3. Click "Preview card"
4. Should show your OG image

### **Test on LinkedIn:**
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL
3. Should show preview with OG image

---

## 🆘 **Troubleshooting**

### **Image not showing on social media:**

**Solution 1: Clear cache**
- Facebook: Use [Sharing Debugger](https://developers.facebook.com/tools/debug/) and click "Scrape Again"
- Twitter: Clear cache in Card Validator
- Wait 5-10 minutes for CDN to update

**Solution 2: Check file location**
```bash
# Verify file exists
ls -la /Users/nirkeren/fansclub-platform/apps/website/public/og-default.jpg

# Should show a file around 100-300KB
```

**Solution 3: Check meta tag**
- View page source
- Look for: `<meta property="og:image" content="https://fanclubonly.com/og-default.jpg" />`

### **Image is too large:**

```bash
# Compress using ImageOptim (Mac) or online tool
# Target: Under 300KB
```

### **Wrong dimensions:**

- Use online tool: [Simple Image Resizer](https://www.simpleimageresizer.com/)
- Set to exactly 1200 x 630 pixels
- Save as JPG

---

## 🎯 **Success Checklist**

- [ ] Image is 1200 x 630 pixels
- [ ] File is named `og-default.jpg` (exact)
- [ ] Saved in `/public/` folder
- [ ] File size under 1MB
- [ ] Committed to Git
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Verified in page source
- [ ] Tested on Facebook Debugger
- [ ] Shows correctly when sharing links

---

## 📚 **Additional Resources**

- [OpenGraph Protocol](https://ogp.me/) - Official spec
- [Canva](https://www.canva.com) - Free design tool
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Test OG tags
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Test Twitter cards
- [OG Image Examples](https://www.opengraph.xyz/gallery) - Inspiration

---

## 💡 **Pro Tips**

1. **Use your brand colors** - Purple gradient (#667eea to #764ba2)
2. **Keep it simple** - Less is more for social sharing
3. **Test on mobile** - Image will be shown small
4. **Update seasonally** - Change for holidays/special events
5. **A/B test** - Try different versions, see what gets more clicks

---

**Need help?** If you get stuck, just ask! 🙋‍♂️

**Estimated time:** 5 minutes (screenshot) or 15 minutes (Canva)

🚀 **Let's create your OG image!**

