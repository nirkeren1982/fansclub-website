# Setting Up Website as Separate Repository for Vercel

## Current Status

✅ Website directory is a git repository  
❌ No remote repository configured  
✅ Ready to be deployed separately

---

## Option 1: Create New GitHub Repository (Recommended)

### Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `fansclub-website` (or your preferred name)
3. Description: "FansClubOnly Website - Vite React App"
4. Visibility: Private or Public (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

After creating the repo, GitHub will show you commands. Run these in the website directory:

```bash
cd /Users/nirkeren/fansclub-platform/apps/website

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/fansclub-website.git

# Verify remote was added
git remote -v

# Push all code to GitHub
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to Vercel Dashboard
2. Click **"Add New..." → "Project"**
3. **Import Git Repository** → Select `fansclub-website`
4. Configure:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./` (leave empty - it's the root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SITE_URL=https://fanclubonly.com`
   - `VITE_API_URL=https://onlyfans-api.vercel.app`
6. Click **"Deploy"**

---

## Option 2: Use Existing Repository (If You Have One)

If you already have a GitHub repository for the website:

```bash
cd /Users/nirkeren/fansclub-platform/apps/website

# Add your existing remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify
git remote -v

# Push code
git push -u origin main
```

---

## Quick Setup Script

Run this script to set up everything:

```bash
cd /Users/nirkeren/fansclub-platform/apps/website

# Replace YOUR_USERNAME and REPO_NAME with your values
GITHUB_USER="nirkeren1982"
REPO_NAME="fansclub-website"

# Add remote
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

# Verify
echo "Remote configured:"
git remote -v

# Push code
echo "Pushing to GitHub..."
git push -u origin main
```

---

## After Pushing to GitHub

### Verify Repository

Visit: `https://github.com/YOUR_USERNAME/fansclub-website`

You should see:
- ✅ All your code files
- ✅ package.json
- ✅ vite.config.ts
- ✅ src/ directory
- ✅ public/ directory

### Deploy on Vercel

1. **Vercel Dashboard** → **Add New Project**
2. **Import** your `fansclub-website` repository
3. **Framework:** Vite (auto-detected)
4. **Root Directory:** `./` (root of repo)
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. **Environment Variables:**
   ```
   VITE_SUPABASE_URL=https://cialbunpmcvxozltkblg.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGci...
   VITE_SITE_URL=https://fanclubonly.com
   VITE_API_URL=https://onlyfans-api.vercel.app
   ```
8. **Deploy!**

---

## Troubleshooting

### Error: "remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### Error: "repository not found"

- Make sure the repository exists on GitHub
- Check you have access to the repository
- Verify the repository name is correct

### Error: "authentication failed"

- Use GitHub Personal Access Token instead of password
- Or use SSH: `git@github.com:USERNAME/REPO.git`

---

## Next Steps After Deployment

1. ✅ Website deployed on Vercel
2. ✅ Custom domain configured (if needed)
3. ✅ Environment variables set
4. ✅ Build successful
5. ✅ Site accessible at your domain

