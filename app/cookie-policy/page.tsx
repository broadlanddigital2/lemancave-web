import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import { pageMeta, PageSchema } from '../../lib/seo';

// Hand-written page (no design board), styled like /site-map. Keep it in step with components/CookieConsent.jsx and
// the CRM scripts (site search, enquiry bot, booking widget) if what they store changes.
export const metadata: Metadata = pageMeta('/cookie-policy');

const UPDATED = '29 October 2026';
const H2 = { margin: '48px 0 14px', fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800, fontSize: 32, lineHeight: 1.05, color: '#fff', textTransform: 'uppercase' as const };
const P = { margin: '0 0 14px', fontSize: 17, lineHeight: 1.65, color: '#D4D4D8', maxWidth: 820 };
const TH = { textAlign: 'left' as const, padding: '10px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: '#A1A1AA', borderBottom: '1px solid #27272A', textTransform: 'uppercase' as const };
const TD = { padding: '12px', fontSize: 15, lineHeight: 1.5, color: '#D4D4D8', borderBottom: '1px solid #1F1F23', verticalAlign: 'top' as const };

function Table({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid #232328', borderRadius: 8, background: '#0F0F12', maxWidth: 1040 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
        <thead><tr><th style={TH}>Name</th><th style={TH}>Where</th><th style={TH}>What it does</th><th style={TH}>How long</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={i === 0 ? { ...TD, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#fff' } : TD}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function CookiePolicyPage() {
  return (
    <div style={{ fontFamily: "'Barlow', system-ui, sans-serif", color: '#E4E4E7', background: '#09090B', minHeight: '100vh' }}>
      <PageSchema path="/cookie-policy" />
      <header style={{ borderBottom: '1px solid #1F1F23' }}>
        <div className="lc-section" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px', height: 92, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" aria-label="LeMan Cave home"><img src="/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg" alt="LeMan Cave" style={{ height: 80, width: 'auto', display: 'block' }} /></Link>
          <Link href="/book" style={{ background: '#ED2835', color: '#09090B', fontWeight: 700, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 20px', borderRadius: 4, textDecoration: 'none' }}>Book now</Link>
        </div>
      </header>
      <main className="lc-section" style={{ maxWidth: 1360, margin: '0 auto', padding: '72px 40px 100px' }}>
        <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.14em', color: '#ED2835', textTransform: 'uppercase' }}>Legal · Last updated {UPDATED}</p>
        <h1 style={{ margin: '0 0 28px', fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 0.9, color: '#fff', textTransform: 'uppercase' }}>Cookie policy</h1>
        <p style={P}>This page explains what the LeMan Cave website stores on your phone or computer, why, and how to change your choice. We keep it short: there are no advertising cookies on this site and we don&rsquo;t use Google Analytics.</p>
        <p style={{ ...P, marginTop: 22 }}><a href="#cookie-settings" style={{ display: 'inline-block', background: '#ED2835', color: '#09090B', fontWeight: 700, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 20px', borderRadius: 4, textDecoration: 'none' }}>Change cookie settings</a></p>

        <h2 style={H2}>What cookies are</h2>
        <p style={P}>Cookies are small files a website saves in your browser. Websites can also use similar browser storage (called local storage and session storage). We use the word &ldquo;cookies&rdquo; for all of these. Some are essential for the site to work; others need your permission first.</p>

        <h2 style={H2}>Essential (always on)</h2>
        <p style={P}>These make booking, paying, gift cards and your account work, and keep the site secure. The law allows them without consent because the features you ask for can&rsquo;t work without them.</p>
        <Table rows={[
          ['crm-booking-session', 'Local storage', 'Keeps you signed in to your account and bookings after you sign in with an email code.', 'Until you sign out'],
          ['crm-booking-pending, crm-cart-key', 'Session storage', 'Holds your booking while you go to the secure payment page and come back.', 'Until you close the tab'],
          ['crm-booking-discount', 'Local storage', 'Remembers a discount or gift card code you entered while booking.', 'Until it is used or removed'],
          ['ss-session, ss-chat, rcg-enquiry-bot:*', 'Session storage', 'Keeps your search and chat conversation while you move between pages.', 'Until you close the tab'],
          ['lc-cookie-consent', 'Local storage', 'Remembers your cookie choice so we don’t ask on every page.', 'Until you change it or clear your browser'],
          ['__cf_bm and similar', 'Cookie (Cloudflare)', 'Our hosting provider may set short-lived security cookies to protect the site from bots and attacks.', 'Up to 30 minutes'],
        ]} />

        <h2 style={H2}>Remember my visits (with your permission)</h2>
        <p style={P}>If you allow it, our site search and chat remember you between visits. That means search suggestions based on pages you&rsquo;ve looked at, and if you get in touch through the chat, we can see which pages you visited so we can help you faster. If you say no, they still work but forget you when you close the tab.</p>
        <Table rows={[
          ['ss-visitor', 'Local storage', 'A random ID so site search can recognise a returning visitor.', 'Until you withdraw consent or clear your browser'],
          ['ss-profile', 'Local storage', 'The last few pages you viewed and results you clicked, kept in your browser, used to make search results more relevant.', 'Until you withdraw consent or clear your browser'],
          ['rcg-enquiry-visitor:*', 'Local storage', 'A random ID so the chat can recognise a returning visitor and show us the pages visited if you contact us.', 'Until you withdraw consent or clear your browser'],
        ]} />

        <h2 style={H2}>Google Maps (with your permission)</h2>
        <p style={P}>Our contact and visit pages can show a map from Google Maps. Google sets its own cookies when the map loads, so we only load it if you allow maps or click &ldquo;Show map&rdquo;. You can always use the &ldquo;Open in Google Maps&rdquo; link instead. See <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener" style={{ color: '#ED2835' }}>how Google uses cookies</a>.</p>

        <h2 style={H2}>Other websites</h2>
        <p style={P}>Payments are taken on Stripe&rsquo;s secure checkout, and links to Instagram, WhatsApp, Google and our partners take you to their websites. They have their own cookies and policies, which our banner doesn&rsquo;t control.</p>

        <h2 style={H2}>Changing your choice</h2>
        <p style={P}>Use <a href="#cookie-settings" style={{ color: '#ED2835' }}>Cookie settings</a> (also at the bottom of every page) at any time. If you withdraw permission, we remove what we stored for search and chat. You can also clear cookies and site data in your browser settings, but blocking everything may stop booking and sign-in from working.</p>

        <h2 style={H2}>Questions</h2>
        <p style={P}>Email <a href="mailto:bookings@lemancave.co.uk" style={{ color: '#ED2835' }}>bookings@lemancave.co.uk</a> or call <a href="tel:01603517080" style={{ color: '#ED2835' }}>01603 517080</a>. LeMan Cave, Unit 1, Consensus House, St Faith&rsquo;s Rd, Norwich NR6 7BW. We&rsquo;ll update this page if anything changes.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
