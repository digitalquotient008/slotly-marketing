# Deploying MeetEasy Marketing Website on Railway

## Quick Setup

### Option 1: Add as New Service in Existing Project (Recommended)

1. **Go to your Railway project** (the one with your backend)
2. **Click "New Service"** → **"GitHub Repo"**
3. **Select the `meeteasy-marketing` repository**
4. **Railway will auto-detect Next.js** and use the `nixpacks.toml` configuration
5. **Set Environment Variables:**
   ```
   NEXT_PUBLIC_APP_URL=https://consultslot-production.up.railway.app
   NEXT_PUBLIC_MARKETING_URL=${{MarketingService.RAILWAY_PUBLIC_DOMAIN}}
   ```
   (Replace `MarketingService` with your actual service name)

6. **Generate Domain** (optional but recommended):
   - Click on the service → Settings → Generate Domain
   - This gives you a public URL like `meeteasy-marketing.up.railway.app`

7. **Deploy!** Railway will automatically build and deploy

### Option 2: Create Separate Railway Project

1. Create a new Railway project
2. Add GitHub repository: `meeteasy-marketing`
3. Set environment variables
4. Generate domain
5. Deploy

## Environment Variables

Set these in Railway dashboard:

- `NEXT_PUBLIC_APP_URL` - Your backend app URL
  - Example: `https://consultslot-production.up.railway.app`
  - Or use Railway variable: `${{BackendService.RAILWAY_PUBLIC_DOMAIN}}`

- `NEXT_PUBLIC_MARKETING_URL` - This marketing site's URL
  - Auto-set by Railway: `${{MarketingService.RAILWAY_PUBLIC_DOMAIN}}`
  - Or manually: `https://meeteasy-marketing.up.railway.app`

- `GOOGLE_ANALYTICS_ID` (optional) - For analytics tracking

## Custom Domain Setup

1. In Railway service settings, add your custom domain
2. Update `NEXT_PUBLIC_MARKETING_URL` to your custom domain
3. Update `public/sitemap.xml` with your custom domain
4. Railway will handle SSL certificates automatically

## Benefits of Railway Deployment

✅ **Same Platform**: Unified infrastructure with backend  
✅ **Easy Integration**: Service-to-service communication  
✅ **Automatic Deploys**: Deploys on every git push  
✅ **Free Tier**: Generous free tier for getting started  
✅ **Simple Setup**: Auto-detects Next.js and builds correctly  

## Troubleshooting

### Build Fails
- Check that `nodejs-18.x` is specified in `nixpacks.toml`
- Verify `package.json` has correct build scripts

### Environment Variables Not Working
- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Restart service after adding variables

### Port Issues
- Next.js defaults to port 3000
- Railway automatically assigns `PORT` environment variable
- Next.js will use `PORT` if available

## Next Steps

After deployment:
1. Test all links point to correct backend URL
2. Verify CTA buttons work
3. Check mobile responsiveness
4. Test SEO meta tags
5. Update any hardcoded URLs in code
