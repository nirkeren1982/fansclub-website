# Vercel Deployment Configuration Guide

## ✅ Local Environment Files Status

### `.env` file (Production-ready)
```env
VITE_SUPABASE_URL=https://cialbunpmcvxozltkblg.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SITE_URL=https://fanclubonly.com
VITE_API_URL=https://onlyfans-api.vercel.app
```

### `.env.local` file (Updated)
```env
VITE_SUPABASE_URL=https://cialbunpmcvxozltkblg.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SITE_URL=https://fanclubonly.com
VITE_API_URL=https://onlyfans-api.vercel.app
```

**✅ Both files use `VITE_` prefix (correct for Vite apps)**
**✅ No `NEXT_PUBLIC_` references found in codebase**

---

## 🔧 Vercel Configuration Checklist

### Build Settings

**Go to:** Vercel Dashboard → Your Project → Settings → General

| Setting | Value |
|---------|-------|
| **Framework Preset** | `Vite` ✅ |
| **Root Directory** | `apps/website` ✅ |
| **Build Command** | `npm run build` ✅ |
| **Output Directory** | `dist` ✅ |
| **Install Command** | `npm install` ✅ |

---

### Environment Variables

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

#### ✅ Required Variables (VITE_ prefix)

| Variable Name | Value | Environments |
|---------------|-------|--------------|
| `VITE_SUPABASE_URL` | `https://cialbunpmcvxozltkblg.supabase.co` | Production, Preview, Development |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Production, Preview, Development |
| `VITE_SITE_URL` | `https://fanclubonly.com` | Production, Preview, Development |
| `VITE_API_URL` | `https://onlyfans-api.vercel.app` | Production, Preview, Development |

#### ❌ Delete These (If They Exist)

- `NEXT_PUBLIC_SUPABASE_URL` ❌ (Wrong prefix!)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` ❌ (Wrong prefix!)
- `NEXT_PUBLIC_SITE_URL` ❌ (Wrong prefix!)
- `NEXT_PUBLIC_API_URL` ❌ (Wrong prefix!)

#### ℹ️ Keep These (Server-side)

- `SUPABASE_KEY` ✅ (Keep - for server-side if needed)
- `SUPABASE_URL` ✅ (Keep - for server-side if needed)

---

## 📋 Step-by-Step Vercel Setup

### Step 1: Delete Wrong Variables

1. Go to **Settings → Environment Variables**
2. Find any variables starting with `NEXT_PUBLIC_`
3. Click the **trash icon** to delete each one
4. Confirm deletion

### Step 2: Add Correct Variables

For each variable below, click **"Add New"**:

1. **Name:** `VITE_SUPABASE_URL`
   - **Value:** `https://cialbunpmcvxozltkblg.supabase.co`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **Save**

2. **Name:** `VITE_SUPABASE_ANON_KEY`
   - **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYWxidW5wbWN2eG96bHRrYmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3Mzk1NTcsImV4cCI6MjA3NzMxNTU1N30.bsIamwBxEuT-nHgTlRe3hnBSut6Y6XhrPGU4xDNh13Y`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **Save**

3. **Name:** `VITE_SITE_URL`
   - **Value:** `https://fanclubonly.com`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **Save**

4. **Name:** `VITE_API_URL`
   - **Value:** `https://onlyfans-api.vercel.app`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Click **Save**

### Step 3: Verify Build Settings

1. Go to **Settings → General**
2. Scroll to **Build & Development Settings**
3. Verify:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `apps/website`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click **three dots (•••)** → **"Redeploy"**
4. **Uncheck** "Use existing Build Cache" (force fresh build)
5. Click **"Redeploy"**
6. Wait 2-3 minutes for build to complete

### Step 5: Verify Build Logs

Click on the building deployment to see logs. Should show:

```
✅ Detected Framework: Vite
✅ Build Command: npm run build
✅ Root Directory: apps/website
✅ Installing dependencies...
✅ Building...
✅ vite v5.x.x building for production...
✅ ✓ modules transformed.
✅ dist/index.html
✅ dist/assets/index-*.js
✅ Build completed successfully
✅ Deploying...
✅ Deployment Ready ✅
```

---

## ✅ Final Checklist

Before redeploying, verify:

- [ ] Root Directory = `apps/website`
- [ ] Framework = `Vite`
- [ ] Build Command = `npm run build`
- [ ] Output Directory = `dist`
- [ ] Deleted all `NEXT_PUBLIC_*` variables
- [ ] Added all `VITE_*` variables (4 total)
- [ ] All variables set to "All Environments"
- [ ] Ready to redeploy!

---

## 🚨 Common Issues

### Issue: Build fails with "Cannot find module"

**Solution:** Make sure Root Directory is set to `apps/website`

### Issue: Environment variables not working

**Solution:** 
1. Verify variables use `VITE_` prefix (not `NEXT_PUBLIC_`)
2. Make sure variables are set for the correct environment
3. Redeploy after adding variables

### Issue: Site shows blank page

**Solution:**
1. Check browser console for errors
2. Verify all `VITE_*` variables are set in Vercel
3. Check build logs for errors
4. Ensure `VITE_SITE_URL` is set correctly

---

## 📞 Need Help?

If deployment still fails:
1. Check Vercel build logs for specific errors
2. Verify all environment variables are set correctly
3. Ensure Root Directory matches your project structure
4. Try redeploying with cache disabled

