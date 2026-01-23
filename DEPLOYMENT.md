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

### Railway

1. Push code to GitHub
2. Create new project in Railway
3. Connect GitHub repository
4. Set environment variables
5. Deploy

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
