import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import CookieConsent from '../components/CookieConsent';
import MobileScrollers from '../components/MobileScrollers';
import WidgetTweaks from '../components/WidgetTweaks';
import AdClick from '../components/AdClick';
import './globals.css';
import './design.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lemancave.co.uk'),
  title: { default: 'Le Man Cave Norwich — Racing Simulators, Scalextric & Party Venue', template: '%s | Le Man Cave Norwich' },
  description: 'Norwich’s motorsport entertainment venue: racing simulators, digital Scalextric, games consoles, pool, darts and arcade. Parties, team days and nights out.',
  openGraph: { siteName: 'Le Man Cave', locale: 'en_GB', type: 'website' },
  icons: { icon: '/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg' },
};

export const viewport: Viewport = { themeColor: '#09090B', width: 'device-width', initialScale: 1 };

// Structured data for Google (LocalBusiness / EntertainmentBusiness)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  '@id': 'https://lemancave.co.uk/#business',
  name: 'Le Man Cave',
  legalName: 'Le Man Cave Limited',
  identifier: { '@type': 'PropertyValue', propertyID: 'Companies House', value: '17032850' },
  description: 'Indoor motorsport entertainment venue in Norwich: racing simulators (one with full motion), a 160ft digital Scalextric for up to six cars, motorbike simulator, a games console lounge with games consoles, pool, darts and arcade games, with private hire for parties and events of up to about 50 guests.',
  url: 'https://lemancave.co.uk',
  telephone: '+44 1603 517080',
  logo: 'https://lemancave.co.uk/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg',
  // Photo of the venue (Google uses it for the business in search results). Same picture as the share image in lib/seo.tsx.
  image: 'https://lemancave.co.uk/images/4dd1a9368ac845d9dff93d9afd206327.webp',
  // Google Maps (the Business Profile listing), so Google can tie the site to the map pin.
  hasMap: 'https://maps.google.com/maps?cid=28223290013748974',
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
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '16:00' },
  ],
  sameAs: ['https://www.instagram.com/leman.cave/'],
  areaServed: ['Norwich', 'Norfolk', 'Suffolk', 'Cambridgeshire'].map((name) => ({ '@type': 'Place', name })),
  amenityFeature: ['Racing simulators', 'Digital Scalextric', 'Motorbike simulator', 'Games console lounge', 'Pool table', 'Darts', 'Air hockey', 'Table football', 'Arcade', 'Free parking', 'Wheelchair accessible']
    .map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
  maximumAttendeeCapacity: 50,
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
        {/* Cookie choice for the CRM site search and enquiry bot, set before they load (components/CookieConsent.jsx). */}
        <script dangerouslySetInnerHTML={{ __html: "try{var c=JSON.parse(localStorage.getItem('lc-cookie-consent')||'null');window.__crmBotTracking=!!(c&&c.v===1&&c.remember)}catch(e){window.__crmBotTracking=false}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Google Tag Manager GTM-P5RK5S9M (owner, 15 Nov 2026), with Google Consent Mode: storage is denied until the visitor
            agrees in the cookie banner ("Website statistics" → analytics_storage, "Measure our adverts" → ad_storage etc.).
            The saved choice is applied here before GTM loads; components/CookieConsent.jsx sends updates. */}
        <script dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}var lcC=null;try{lcC=JSON.parse(localStorage.getItem('lc-cookie-consent')||'null');if(!lcC||lcC.v!==1)lcC=null}catch(e){}var lcA=lcC&&lcC.ads?'granted':'denied';gtag('consent','default',{analytics_storage:lcC&&lcC.stats?'granted':'denied',ad_storage:lcA,ad_user_data:lcA,ad_personalization:lcA,functionality_storage:'granted',security_storage:'granted',wait_for_update:500});gtag('js',new Date());dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});" }} />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-P5RK5S9M" />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5RK5S9M" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>
        {children}
        {/* Small print for the * and ** marks used across the site (owner, 28 Oct 2026). */}
        <aside className="lc-smallprint" aria-label="Notes">
          <p>Le Man Cave is open for booked sessions and events only. There is no walk-in entry.</p>
          <p>*Pizza is an additional cost option.</p>
          <p>**The simulators may be subject to height restrictions, and motion may be disabled for safety reasons for any guests under 14.</p>
        </aside>
        {/* CRM site search (floating Search button, "/" or Ctrl/Cmd+K) and the AI enquiry bot. Both are set up in the
            Race Car Graphics CRM (Marketing → Site search; Channels → Le Man Cave Enquiry Bot); leads go to Le Man Cave leads.
            Loaded after the page has started up (afterInteractive): loaded earlier, React's start-up could remove the
            search panel from the page, leaving a Search button that opened nothing. */}
        <CookieConsent />
        <MobileScrollers />
        <WidgetTweaks />
        <AdClick />
        <Script src="https://crm.racecargraphics.uk/embed/site-search.js" data-key="9d5420c16e364a7da808bb67" strategy="afterInteractive" />
        {/* Google reviews (imported daily from the Google Business Profile by the CRM), placed above the footer */}
        <Script src="https://crm.racecargraphics.uk/embed/google-reviews.js" data-business="leman-cave" data-theme="dark" data-accent="#ED2835" data-before="footer" data-exclude="/book,/account,/login,/cookie-policy,/privacy" data-heading="What our guests say" data-intro="Real reviews from Le Man Cave guests on Google." strategy="afterInteractive" />
        <Script src="https://crm.racecargraphics.uk/rcg-enquiry-bot.js" data-bot-key="33e6abf2-2ff6-4e91-9076-1834fea322f8" strategy="afterInteractive" />
      </body>
    </html>
  );
}
