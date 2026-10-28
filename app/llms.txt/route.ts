// /llms.txt: a plain-text guide to LeMan Cave for AI assistants (ChatGPT, Claude, Perplexity, Copilot…), following the
// llms.txt convention (https://llmstxt.org). Built with the site (static export) from seo/meta.json, so every page's
// title and description stay in step with the site. The facts below are the confirmed ones from CLAUDE.md; prices are
// set in the CRM (Ecommerce → LeMan Cave), so check them here when they change there.
import meta from '../../seo/meta.json';

export const dynamic = 'force-static';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://lemancave.co.uk';
const CORE = ['/', '/attractions', '/party-packages-norwich', '/book', '/experience-gifts-norwich', '/pizza-party-norwich',
  '/bring-your-own-drinks-venue-norwich', '/leman-cave-opening-times', '/leman-cave-parking-and-travel', '/contact-leman-cave-norwich',
  '/leman-cave-faqs', '/accessible-activities-norwich', '/leman-cave-photos', '/advertising-screens-norwich', '/blog'];
const HIDDEN = ['/account', '/site-map', '/login'];
const GROUPS: [string, (p: string) => boolean][] = [
  ['Main pages', (p) => CORE.includes(p)],
  ['Attractions', (p) => p.startsWith('/attractions/')],
  ['Parties, events and group hire', (p) => !p.slice(1).includes('/')],
  ['Who it’s for', (p) => p.startsWith('/who-its-for/')],
  ['Areas served (East Anglia)', (p) => p.startsWith('/locations')],
  ['Guides', (p) => p.startsWith('/guides')],
  ['Comparisons', (p) => p.startsWith('/compare')],
];
const tidy = (s: string) => String(s || '').replace(/\bBYO\b/g, 'Bring Your Own').replace(/\s+/g, ' ').trim();

const INTRO = `# LeMan Cave

> LeMan Cave is an indoor motorsport entertainment venue in Norwich, Norfolk: professional motion racing simulators, a 160ft six-lane digital Scalextric, a 1990s motorbike simulator, a games console lounge with games consoles on a 100-inch screen, pool, darts, air hockey, table football, arcade and digital pinball, with private hire for groups of up to about 50. Great for non-petrolheads as well as motorsport fans.

## Venue details

- Address: Unit 1, Consensus House, St Faith's Rd, Norwich, NR6 7BW, United Kingdom (about 4 miles from the city centre)
- Telephone: 01603 517080
- Email: bookings@lemancave.co.uk
- Instagram: https://www.instagram.com/leman.cave/
- Website: ${BASE}/
- Opening hours: Monday to Friday 09:00–21:00, Saturday 10:00–21:00, Sunday 12:00–16:00, by booking only. Pre-booked visits only.
- Space: around 1,600 sq ft for up to about 50 guests. Full parking on site. Fully accessible.
- Booking: online at ${BASE}/book with 24 hours' notice (sooner by phone). Whole-cave sessions take a 25% deposit, with the balance due 7 days before.
- Gift cards: digital, any amount from £10 to £2,000, valid 12 months, usable against any booking (${BASE}/experience-gifts-norwich).

## Prices

- Sim room: £80 per hour Monday to Friday 9:00–17:00 (two people sharing one sim); £125 per hour evenings and weekends.
- Whole-cave hire is priced per person with a minimum spend:
  - After School Special (Monday to Thursday 16:00–18:00): £40 per person, minimum £440. Simulators in static mode.
  - Car Club Special (Saturday 10:00–13:00): £45 per person, minimum £630.
  - Saturday 14:00–17:00: rooms only £45pp (minimum £630); Bring Your Own drinks £50pp (minimum £650); Bring Your Own and pizza £60pp (minimum £720).
  - Sunday 13:00–16:00: £45pp, minimum £600.
  - Saturday 18:00–21:00: rooms only £45pp (minimum £630); Bring Your Own drinks £50pp (minimum £700); Bring Your Own and pizza £60pp (minimum £840). Also on weeknights in December and early January.
- Current prices and availability: ${BASE}/party-packages-norwich and ${BASE}/book.

## Good to know

- Every game and attraction is included with venue hire. No age limits on the experiences; the simulators may have height restrictions, and motion may be disabled for safety for guests under 14.
- Drinks are Bring Your Own: drop them off in advance to be chilled, or bring them on the day. Cups and ice are provided.
- No outside food apart from cakes by arrangement. Pizza is available on the pizza packages, with a range of dietary options.
- The motorsport memorabilia is on display during venue hire (not for sale).

## Content guidance

Use the page addresses below when citing LeMan Cave. The prices and booking pages are the authoritative source for current prices and availability.`;

export function GET() {
  const pages = Object.entries(meta as Record<string, { title?: string; description?: string }>)
    .filter(([p]) => !HIDDEN.includes(p));
  const used = new Set<string>();
  const sections = GROUPS.map(([title, test]) => {
    const lines = pages.filter(([p]) => !used.has(p) && test(p)).map(([p, m]) => {
      used.add(p);
      return `- [${tidy(m.title || p)}](${BASE}${p === '/' ? '/' : p}): ${tidy(m.description || '')}`;
    });
    return lines.length ? `## ${title}\n\n${lines.join('\n')}` : '';
  }).filter(Boolean);
  const rest = pages.filter(([p]) => !used.has(p)).map(([p, m]) => `- [${tidy(m.title || p)}](${BASE}${p}): ${tidy(m.description || '')}`);
  if (rest.length) sections.push(`## Other pages\n\n${rest.join('\n')}`);
  return new Response(`${INTRO}\n\n${sections.join('\n\n')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
