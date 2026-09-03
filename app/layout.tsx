import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rashadthehelper.netlify.app';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Rashad the Helper | Houston Moving Labor',
  description: 'Book straightforward moving labor in Houston for loading, unloading, heavy lifting, furniture assembly, and rental truck driving.',
  openGraph: {
    title: 'Rashad the Helper | Houston Moving Labor',
    description: 'Straightforward moving help in Greater Houston for loading, unloading, heavy lifting, furniture setup, and rental-truck driving.',
    url: '/',
    siteName: 'Rashad the Helper',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashad the Helper | Houston Moving Labor',
    description: 'Straightforward moving help in Greater Houston.',
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
