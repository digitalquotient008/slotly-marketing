# Deploying Slotly Marketing Website on Vercel

## Quick Setup (Recommended)

Vercel is the best platform for Next.js applications. It's built by the Next.js team and offers automatic deployments, global CDN, and zero configuration.

### Step 1: Push to GitHub

Make sure your code is pushed to GitHub:
```bash
git push origin main
```

### Step 2: Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Click "Add New Project"**
3. **Import your GitHub repository** (`slotly-marketing`)
4. **Vercel will auto-detect Next.js** - no configuration needed!
5. **Set Environment Variables:**
   ```
   NEXT_PUBLIC_APP_URL=https://app.slotly.com
   NEXT_PUBLIC_MARKETING_URL=https://slotly.com
   GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX (optional)
   ```
6. **Click "Deploy"**

That's it! Vercel will:
- Build your Next.js app
- Deploy it globally
- Give you a URL like `slotly-marketing.vercel.app`
- Set up automatic deployments on every git push

### Step 3: Custom Domain (Optional)

1. In Vercel project settings, go to **"Domains"**
2. Add your custom domain: `slotly.com`
3. Vercel will provide DNS instructions
4. Update your DNS records
5. SSL certificate is automatic!

## Environment Variables

Set these in Vercel dashboard (Project → Settings → Environment Variables):

- `NEXT_PUBLIC_APP_URL` - Your backend app URL
  - Example: `https://consultslot-production.up.railway.app`
  - Or: `https://app.slotly.com` (if you have a custom domain)

- `NEXT_PUBLIC_MARKETING_URL` - This marketing site's URL
  - Auto-set by Vercel: `https://slotly-marketing.vercel.app`
  - Or your custom domain: `https://slotly.com`

- `GOOGLE_ANALYTICS_ID` (optional) - For analytics tracking

## Benefits of Vercel

✅ **Zero Configuration** - Auto-detects Next.js  
✅ **Automatic Deployments** - Deploys on every git push  
✅ **Global CDN** - Fast worldwide  
✅ **Preview Deployments** - Test PRs before merging  
✅ **Free Tier** - Generous for marketing sites  
✅ **Built-in Analytics** - Performance insights  
✅ **Automatic SSL** - HTTPS by default  

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` → Production deployment
- Every PR → Preview deployment
- Automatic rollback on errors

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify `package.json` has correct build scripts
- Ensure all dependencies are listed

### Environment Variables Not Working
- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables
- Check variable names match exactly

### Custom Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check SSL certificate status in Vercel dashboard

## Next Steps

After deployment:
1. ✅ Test the marketing website loads correctly
2. ✅ Verify all links point to correct backend URL
3. ✅ Test CTA buttons (Sign Up, Log In)
4. ✅ Check mobile responsiveness
5. ✅ Verify SEO meta tags are working
6. ✅ Set up custom domain (if desired)

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
