# MeetVault Marketing Website

Modern, SEO-optimized marketing website for MeetVault built with Next.js, TypeScript, and TailwindCSS.

## Features

- SEO-optimized with meta tags and structured data
- Responsive design (mobile-first)
- Fast performance with Next.js static generation
- MVP-focused content highlighting core features
- FAQ section
- Roadmap for future features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=https://meetvault.app
NEXT_PUBLIC_MARKETING_URL=https://meetvault.app
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Other Options

- Netlify
- Railway
- GitHub Pages (with static export)

## Project Structure

```
meetvault-marketing/
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js pages
│   ├── components/  # React components
│   ├── lib/         # Constants and utilities
│   └── styles/      # Global styles
└── package.json
```

## License

MIT
