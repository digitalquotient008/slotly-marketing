# Complete Setup Guide - Slotly Marketing Website

## Step 1: Create GitHub Repository

**IMPORTANT: Do this first!**

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name**: `slotly-marketing`
   - **Description**: "Marketing website for Slotly scheduling platform"
   - **Visibility**: Public (or Private if you prefer)
   - **⚠️ IMPORTANT**: Do NOT check any boxes (no README, no .gitignore, no license)
3. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, run:

```bash
cd /Users/girishreddy/DEV_WORKSPACES/slotly-marketing
./PUSH_TO_GITHUB.sh
```

Or manually:

```bash
cd /Users/girishreddy/DEV_WORKSPACES/slotly-marketing
git remote add origin https://github.com/digitalquotient008/slotly-marketing.git
git branch -M main
git push -u origin main
```

## Step 3: Verify Repository

Check that everything is pushed:
- Visit: https://github.com/digitalquotient008/slotly-marketing
- You should see all files including:
  - `package.json`
  - `src/` directory
  - `public/` directory
  - `README.md`
  - etc.

## Step 4: Deploy to Railway

Once the code is on GitHub:

1. **Go to your Railway project** (the one with your backend)
2. **Click "New Service"** → **"GitHub Repo"**
3. **Select `slotly-marketing` repository**
4. **Railway will auto-detect Next.js** and use `nixpacks.toml`
5. **Set Environment Variables:**
   ```
   NEXT_PUBLIC_APP_URL=${{BackendService.RAILWAY_PUBLIC_DOMAIN}}
   NEXT_PUBLIC_MARKETING_URL=${{MarketingService.RAILWAY_PUBLIC_DOMAIN}}
   ```
   (Replace service names with your actual Railway service names)
6. **Generate Domain** for the marketing service
7. **Deploy!**

## Troubleshooting

### "Repository not found" error
- Make sure you created the repository on GitHub first (Step 1)
- Check the repository name matches exactly: `slotly-marketing`
- Verify you have access to `digitalquotient008` organization/account

### Authentication issues
- Make sure you're logged into GitHub
- Check your Git credentials: `git config --global user.name`
- You may need to use a Personal Access Token instead of password

### Push permission denied
- Verify you have write access to the repository
- Check if you're using the correct GitHub account

## Next Steps After Deployment

1. ✅ Test the marketing website loads correctly
2. ✅ Verify all links point to the correct backend URL
3. ✅ Test CTA buttons (Sign Up, Log In)
4. ✅ Check mobile responsiveness
5. ✅ Verify SEO meta tags are working

## Repository URL

Once created, your repository will be at:
**https://github.com/digitalquotient008/slotly-marketing**
