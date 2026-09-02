import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rashad-the-helper-houston.blairhenderson617.chatgpt.site'),
  title: 'Rashad the Helper | Houston Moving Labor',
  description: 'Book straightforward moving labor in Houston for loading, unloading, heavy lifting, furniture assembly, and rental truck driving.',
  openGraph: {
    title: 'Rashad the Helper | Houston Moving Labor',
    description: 'You bring the truck. Rashad brings the help — loading, unloading, heavy lifting, furniture setup, and rental-truck driving.',
    url: '/',
    siteName: 'Rashad the Helper',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rashad the Helper — Houston moving labor' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashad the Helper | Houston Moving Labor',
    description: 'You bring the truck. Rashad brings the help.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
