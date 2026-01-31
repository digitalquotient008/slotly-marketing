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
  title: 'Slotly - Schedule Meetings Without the Back-and-Forth',
  description: 'Simple scheduling platform with built-in CRM and booking management. Create event types, set availability, and let clients book automatically.',
  keywords: 'scheduling, calendar, booking, appointment scheduling, CRM, meeting scheduler',
  openGraph: {
    title: 'Slotly - Schedule Meetings Without the Back-and-Forth',
    description: 'Simple scheduling platform with built-in CRM and booking management.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} bg-slate-950 text-slate-200`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
