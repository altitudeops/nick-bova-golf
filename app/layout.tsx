import type { Metadata } from 'next';
import { Teko, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Grain from '@/components/Grain';
import { SITE } from '@/lib/content';

const display = Teko({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    'Nick Bova',
    'golf instruction New Jersey',
    'PGA teaching professional',
    'Hamilton Farm Golf Club',
    'golf lessons Gladstone NJ',
    'junior golf coaching',
    'online golf lessons',
    'TrackMan lessons NJ',
  ],
  authors: [{ name: 'Nick Bova' }],
  openGraph: {
    type: 'website',
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: '/images/hamilton-farm-aerial.jpg', width: 1400, height: 783, alt: 'Hamilton Farm Golf Club' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/images/hamilton-farm-aerial.jpg'],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/hamilton-farm-aerial.jpg`,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'Nick Bova',
    jobTitle: 'PGA Director of Instruction',
    worksFor: { '@type': 'Organization', name: 'Hamilton Farm Golf Club' },
  },
  sameAs: [SITE.instagram, SITE.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Grain />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
