import type { Metadata, Viewport } from 'next';
import './globals.css';
import './design.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lemancave.co.uk'),
  title: { default: 'LeMan Cave Norwich — Racing Simulators, Scalextric & Party Venue', template: '%s | LeMan Cave Norwich' },
  description: 'Norwich’s motorsport entertainment venue: full-motion racing simulators, digital Scalextric, PS5, pool, darts and arcade. Parties, team days and nights out.',
  openGraph: { siteName: 'LeMan Cave', locale: 'en_GB', type: 'website' },
  icons: { icon: '/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg' },
};

export const viewport: Viewport = { themeColor: '#09090B', width: 'device-width', initialScale: 1 };

// Structured data for Google (LocalBusiness / EntertainmentBusiness)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  name: 'LeMan Cave',
  url: 'https://lemancave.co.uk',
  logo: 'https://lemancave.co.uk/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg',
  email: 'bookings@lemancave.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 1, Consensus House, St Faith’s Rd',
    addressLocality: 'Norwich',
    addressRegion: 'Norfolk',
    postalCode: 'NR6 7BW',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:30', closes: '21:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '21:00' },
  ],
  sameAs: ['https://www.instagram.com/leman.cave/'],
  priceRange: '££',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;800;900&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        {/* CRM site search (floating Search button, "/" or Ctrl/Cmd+K) and the AI enquiry bot. Both are set up in the
            Race Car Graphics CRM (Marketing → Site search; Channels → LeMan Cave Enquiry Bot); leads go to LeMan Cave leads. */}
        <script src="https://crm.racecargraphics.uk/embed/site-search.js" data-key="9d5420c16e364a7da808bb67" defer />
        <script src="https://crm.racecargraphics.uk/rcg-enquiry-bot.js" data-bot-key="33e6abf2-2ff6-4e91-9076-1834fea322f8" defer />
      </body>
    </html>
  );
}
