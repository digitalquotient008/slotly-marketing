# Deployment Guide for MeetEasy Marketing Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   Create `.env.local`:
   ```env
   NEXT_PUBLIC_APP_URL=https://app.meeteasy.com
   NEXT_PUBLIC_MARKETING_URL=https://meeteasy.com
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set environment variables in Vercel dashboard
5. Deploy automatically

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Set environment variables

### Railway (Same Project as Backend)

**Option A: Separate Service in Same Project (Recommended)**

1. In your existing Railway project, click "New Service"
2. Select "GitHub Repo" and choose the `meeteasy-marketing` repository
3. Railway will auto-detect Next.js and use `nixpacks.toml`
4. Set environment variables:
   - `NEXT_PUBLIC_APP_URL` = Your backend Railway URL (e.g., `https://consultslot-production.up.railway.app`)
   - `NEXT_PUBLIC_MARKETING_URL` = This service's Railway URL (auto-generated)
5. Railway will automatically deploy

**Option B: Separate Railway Project**

1. Create new Railway project
2. Connect GitHub repository (`meeteasy-marketing`)
3. Set environment variables
4. Deploy

**Benefits of Railway:**
- Same platform as backend (unified infrastructure)
- Easy service-to-service communication
- Shared environment variables
- Simple deployment workflow

### GitHub Pages (Static Export)

1. Update `next.config.js`:
   ```js
   output: 'export'
   ```
2. Build: `npm run build`
3. Deploy `out/` directory to GitHub Pages

## Environment Variables

- `NEXT_PUBLIC_APP_URL` - Backend application URL (default: https://app.meeteasy.com)
- `NEXT_PUBLIC_MARKETING_URL` - Marketing website URL (default: https://meeteasy.com)
- `GOOGLE_ANALYTICS_ID` - Optional Google Analytics ID

## Custom Domain Setup

1. Add domain in hosting provider
2. Update `NEXT_PUBLIC_MARKETING_URL` environment variable
3. Update `sitemap.xml` with new domain
4. Update `robots.txt` if needed
