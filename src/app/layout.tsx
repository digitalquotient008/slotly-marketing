import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meetvault.app'),
  title: 'MeetVault - Schedule Meetings Without the Back-and-Forth',
  description: 'Simple scheduling platform with built-in CRM and booking management. Create event types, set availability, and let clients book automatically.',
  keywords: 'scheduling, calendar, booking, appointment scheduling, CRM, meeting scheduler, MeetVault',
  openGraph: {
    title: 'MeetVault - Schedule Meetings Without the Back-and-Forth',
    description: 'Simple scheduling platform with built-in CRM and booking management.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MeetVault',
    url: 'https://meetvault.app',
    description: 'Schedule meetings without the back-and-forth. Built-in CRM and self-hosted options.',
  };

  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} bg-slate-950 text-slate-200`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
