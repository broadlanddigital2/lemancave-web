import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import { pageMeta, PageSchema } from '../../lib/seo';

// Hand-written page (no design board), styled like /cookie-policy. Written 29 Oct 2026 from what the website and
// the CRM actually collect (enquiry form, booking widget, gift cards, screen adverts, enquiry bot, site search).
// Legal entity: Le Man Cave Limited, company number 17032850 (owner, 29 Oct 2026). The booking form links here.
export const metadata: Metadata = pageMeta('/privacy');

const UPDATED = '29 October 2026';
const H2 = { margin: '48px 0 14px', fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800, fontSize: 32, lineHeight: 1.05, color: '#fff', textTransform: 'uppercase' as const };
const P = { margin: '0 0 14px', fontSize: 17, lineHeight: 1.65, color: '#D4D4D8', maxWidth: 820 };
const UL = { margin: '0 0 14px', paddingLeft: 22, fontSize: 17, lineHeight: 1.65, color: '#D4D4D8', maxWidth: 820 };
const A = { color: '#ED2835' };
const TH = { textAlign: 'left' as const, padding: '10px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: '#A1A1AA', borderBottom: '1px solid #27272A', textTransform: 'uppercase' as const };
const TD = { padding: '12px', fontSize: 15, lineHeight: 1.5, color: '#D4D4D8', borderBottom: '1px solid #1F1F23', verticalAlign: 'top' as const };

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid #232328', borderRadius: 8, background: '#0F0F12', maxWidth: 1040, margin: '0 0 14px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
        <thead><tr>{head.map((h) => <th key={h} style={TH}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} style={i === 0 ? { ...TD, color: '#fff', fontWeight: 600 } : TD}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ fontFamily: "'Barlow', system-ui, sans-serif", color: '#E4E4E7', background: '#09090B', minHeight: '100vh' }}>
      <PageSchema path="/privacy" />
      <header style={{ borderBottom: '1px solid #1F1F23' }}>
        <div className="lc-section" style={{ maxWidth: 1360, margin: '0 auto', padding: '0 40px', height: 92, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" aria-label="Le Man Cave home"><img src="/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg" alt="Le Man Cave" style={{ height: 80, width: 'auto', display: 'block' }} /></Link>
          <Link href="/book" style={{ background: '#ED2835', color: '#09090B', fontWeight: 700, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 20px', borderRadius: 4, textDecoration: 'none' }}>Book now</Link>
        </div>
      </header>
      <main className="lc-section" style={{ maxWidth: 1360, margin: '0 auto', padding: '72px 40px 100px' }}>
        <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.14em', color: '#ED2835', textTransform: 'uppercase' }}>Legal · Last updated {UPDATED}</p>
        <h1 style={{ margin: '0 0 28px', fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 0.9, color: '#fff', textTransform: 'uppercase' }}>Privacy policy</h1>
        <p style={P}>This explains what personal information Le Man Cave collects when you use our website, make an enquiry or book, why we need it, who we share it with, how long we keep it and your rights. We only collect what we need to run your booking and answer your questions, and we never sell your information.</p>

        <h2 style={H2}>Who we are</h2>
        <p style={P}>Le Man Cave is an indoor motorsport entertainment venue at Unit 1, Consensus House, St Faith&rsquo;s Rd, Norwich NR6 7BW. Le Man Cave is run by Le Man Cave Limited, a company registered in England and Wales (company number 17032850). For the information described here, Le Man Cave Limited is the data controller, which means we decide how and why it is used.</p>
        <p style={P}>Questions about your information: email <a href="mailto:bookings@lemancave.co.uk" style={A}>bookings@lemancave.co.uk</a>, call <a href="tel:01603517080" style={A}>01603 517080</a> or write to us at the address above.</p>

        <h2 style={H2}>What we collect and why</h2>
        <Table head={['When', 'What we collect', 'Why', 'Legal basis']} rows={[
          ['You book a session or hire the venue', 'Your name, email address, mobile number, the date, time, package and number of guests, anything you tell us about the event, and your payment record (not your card details).', 'To take and manage your booking, send confirmations, invoices and reminders, and contact you about it.', 'Contract'],
          ['You sign in to your account', 'Your email address and a one-time sign-in code.', 'To let you see your bookings, invoices and gift cards securely.', 'Contract'],
          ['You buy a gift card', 'Your name and email, and the recipient’s name, email and any message you add.', 'To send the gift card and let the recipient use it.', 'Contract (and our legitimate interest in delivering it to the recipient)'],
          ['You send an enquiry or use the chat', 'Your name, email, phone, company (if given), your message or conversation and the page you were on.', 'To answer you and, if you ask, prepare a quote or booking.', 'Legitimate interests (replying to you); contract if it leads to a booking'],
          ['You order a screen advert', 'Your business name, contact details, the package you choose and the artwork you upload.', 'To quote, take payment and show your advert.', 'Contract'],
          ['You search the site or ask the assistant', 'What you type, the results you click and, with your permission, a visitor ID.', 'To answer your question and improve the search.', 'Legitimate interests; consent for the visitor ID'],
          ['You visit the venue', 'Anything you share about guests’ needs, such as access or medical information you choose to tell us for safety.', 'To keep everyone safe and make reasonable adjustments.', 'Your explicit consent / vital interests'],
        ]} />
        <p style={P}>We don&rsquo;t knowingly collect information from children online: bookings must be made by an adult. Children are welcome at the venue, and any details about them (such as an age for a birthday) come from the adult who books.</p>

        <h2 style={H2}>Payments</h2>
        <p style={P}>Card payments are taken by Stripe on its secure checkout. Your card details go straight to Stripe and we never see or store them. We keep a record of what was paid and when. See <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener" style={A}>Stripe&rsquo;s privacy policy</a>.</p>

        <h2 style={H2}>Who we share it with</h2>
        <p style={P}>We use trusted providers to run our website and bookings. They only use your information to provide their service to us, under contract:</p>
        <ul style={UL}>
          <li><b>Our booking and customer system</b> (built and run for us by Broadland Digital, Norwich), with its database hosted by Supabase in London, UK.</li>
          <li><b>Cloudflare</b>, which hosts the website and protects it from attacks.</li>
          <li><b>Stripe</b>, for card payments.</li>
          <li><b>Twilio SendGrid</b>, which delivers our booking and enquiry emails.</li>
          <li><b>Dropbox</b>, where files attached to enquiries (such as advert artwork) are stored.</li>
          <li><b>OpenAI</b>, which powers the website&rsquo;s chat assistant and search answers and helps us sort incoming enquiries. Conversations are not used to train their models.</li>
          <li><b>Google</b>, only if you choose to show a map on our contact or visit pages.</li>
        </ul>
        <p style={P}>Some of these providers are based in, or may access data from, the USA. Where information leaves the UK, it is protected by the UK&rsquo;s adequacy regulations (including the UK&ndash;US Data Bridge) or the UK International Data Transfer Agreement or Addendum. We may also share information if the law requires it, for example with HMRC or the police.</p>

        <h2 style={H2}>Marketing</h2>
        <p style={P}>We don&rsquo;t send marketing emails unless you have agreed to receive them, or you are a customer and we&rsquo;re telling you about similar experiences at Le Man Cave. Every marketing email has an unsubscribe link, and you can tell us to stop at any time. Booking confirmations, invoices and reminders are not marketing and are always sent.</p>

        <h2 style={H2}>How long we keep it</h2>
        <Table head={['Information', 'How long']} rows={[
          ['Bookings, invoices and payment records', '6 years from the end of the financial year, as required for tax and accounting'],
          ['Enquiries and chats that don’t lead to a booking', '2 years from your last contact'],
          ['Gift cards', 'Until 12 months after the card expires or is used up'],
          ['Screen advert orders and artwork', '6 years for the order record; artwork until 12 months after the advert ends'],
          ['Your account', 'Until you ask us to close it, or 3 years after your last booking'],
          ['Access or medical information you share for a visit', 'Until shortly after the visit, unless there was an incident we need to record'],
        ]} />

        <h2 style={H2}>Your rights</h2>
        <p style={P}>Under UK data protection law (the UK GDPR and the Data Protection Act 2018) you can ask us to:</p>
        <ul style={UL}>
          <li>give you a copy of the information we hold about you;</li>
          <li>correct anything that is wrong or incomplete;</li>
          <li>delete your information, where we don&rsquo;t need to keep it by law;</li>
          <li>restrict or object to how we use it, including stopping marketing at any time;</li>
          <li>send your information to you or another organisation in a common format;</li>
          <li>withdraw your consent where we rely on it (this doesn&rsquo;t affect anything done before).</li>
        </ul>
        <p style={P}>Email <a href="mailto:bookings@lemancave.co.uk" style={A}>bookings@lemancave.co.uk</a> to use any of these rights. It&rsquo;s free, and we&rsquo;ll reply within one month. We may need to check your identity first.</p>
        <p style={P}>If you&rsquo;re unhappy with how we&rsquo;ve handled your information, please tell us first so we can put it right. You can also complain to the Information Commissioner&rsquo;s Office: <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener" style={A}>ico.org.uk</a> or 0303 123 1113.</p>

        <h2 style={H2}>Cookies</h2>
        <p style={P}>How the website uses cookies and similar storage, and how to change your choice, is explained in our <Link href="/cookie-policy" style={A}>cookie policy</Link>.</p>

        <h2 style={H2}>Keeping it safe</h2>
        <p style={P}>Your information is sent over encrypted connections and kept in systems with access limited to the staff who need it. Account sign-in uses one-time email codes rather than passwords.</p>

        <h2 style={H2}>Changes</h2>
        <p style={P}>We&rsquo;ll update this policy if the way we use information changes, and change the date at the top. Significant changes will also be shown on the website.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
