# LeMan Cave website: context for Claude sessions

Read this first. It carries over everything decided while the site was designed and built
in a Cowork session (Oct 2026). Setup and deploy steps are in `README.md`.

## The business
- **LeMan Cave**: indoor motorsport entertainment venue. Unit 1, Consensus House, St Faith's Rd, Norwich NR6 7BW.
  - Full parking on site, about 4 miles from the city centre. Fully accessible.
  - Around 50 guests across 2,000 sq ft.
  - Phone 01603 517080 (`tel:01603517080`). Email bookings@lemancave.co.uk. Instagram @leman.cave.
- **Positioning**: a real motorsport venue that's great for non-petrolheads too. Imagery should show the general public, not just car fans.
- **Hours**: Mon–Fri 06:30–21:30, Sat 10:00–21:00, Sun by request.
- **Attractions**:
  - pro racing simulators (4 DOF motion, direct-drive wheel, 4K or VR);
  - 160ft six-lane digital Scalextric;
  - 1990s motorbike sim;
  - PS5 on a 120" screen with a Mini Cooper sofa (PS5 games provided only);
  - 1 digital pinball machine;
  - 9ft pro pool table (cues provided);
  - air hockey, table football, two-player arcade;
  - darts (provided, fully automated scoring);
  - memorabilia (venue hire only, not for sale; photos fine).
- **Rules**:
  - No age limits on games. Under-16s use the sims in static mode only.
  - Everything is included with venue hire.
  - No outside food except cakes by prior arrangement. Pizza only on pizza packages, with a range of dietary options.
  - BYO drinks: drop off in advance to be pre-chilled, or bring on the day. Glasses and ice provided. Leftovers collected after.
  - Deposit 25% at booking, balance 7 days before.
  - Gift cards are digital: any amount from £10 to £2,000, valid 12 months, usable against any booking.

## Prices
Whole-cave prices are per person, with a minimum spend that still applies if fewer guests come.
- **Sim room**: £80/hr Mon–Fri 9–5 (2 sharing 1 sim); £125/hr evenings and weekends: Mon–Fri 17–20, Sat 12–20, Sun 12–16 (staffed for security and health & safety; only when the cave isn't booked for private hire).
- **After School Special**: Mon–Thu 16–18, £40pp, min spend £440. Static mode. Not December or early January.
- **Car Club Special**: Sat 10–13, £45pp, min £630.
- **Saturday 14–17**:

  | Package | Price | Min spend |
  |---|---|---|
  | Rooms only | £45pp | £630 |
  | BYO | £50pp | £650 |
  | BYO & pizza | £60pp | £720 |

- **Sunday 13–16**: £45pp, min £600.
- **Saturday 18–21**:

  | Package | Price | Min spend |
  |---|---|---|
  | Rooms only | £45pp | £630 |
  | BYO | £50pp | £700 |
  | BYO & pizza | £60pp | £840 |

  Also runs on weeknights in December and the first two weeks of January.

## Brand
- **Colours**:
  - background #09090B, panels #0F0F12 / #131316, borders #232328 / #27272A;
  - accent red #ED2835, amber #FFC233, Christmas green #1E9E5E.
- **Fonts**: Big Shoulders Display (headings, uppercase), Barlow (body), JetBrains Mono (labels).
- **Look**: dark, moody but vibrant. Chequered-flag details, neon red.

## How the code is organised
- `design/*.dc.html` are the source pages from the Claude Design canvas. `scripts/convert_design.py design .` turns them into `components/*.jsx`. If you edit components directly, the next conversion overwrites them. Either edit the design file and re-convert, or stop using the converter for that page and say so in a commit.
- **Templates**:
  - `Landing`: hire types, audiences, locations (data object `P` keyed by slug);
  - `Guide`: guides and resources;
  - `Compare`: comparison pages;
  - `Hub`: attractions and events hubs;
  - `Product`: attraction pages;
  - `SiteFooter`.
- The other pages are one-offs (Main, Simulator, Scalextric, Games, Food, Drinks, Corporate, Christmas, Pricing, Gallery, Visit, GiftVouchers, Book, Advertise, Account). New pages also need an entry in `ROUTES` (converter and `lib/routes.js`) and an `app/<route>/page.tsx` with metadata.
- **SEO structure**: 4 tiers.
  1. Core pages.
  2. Attraction / product pages.
  3. Landing pages: 15 hire types, 9 audiences, 18 locations, with the East Anglia hub at `/locations`.
  4. Guides and resources: 12 guides, 9 comparisons, FAQs, opening times, travel.

  Every page links up to its hub, across to related pages, and down to guides and comparisons. Keep that internal linking when adding pages.
- **Header**: a mega menu (Attractions / Food & Drink / Parties & Events / Visit Us), then search and account icons (`components/HeaderTools.jsx`, inserted by the converter) and the main button. The footer is deliberately slim.
- **Mobile menu**: `components/MobileMenu.jsx` (hand-written, links in `lib/nav.js`, styles `.lc-mob-*` in `app/globals.css`). The converter inserts `<MobileMenu />` into every page header. If the mega menu's links change in the design, update `lib/nav.js` to match.

## Hosting and CRM
- Cloudflare Worker (`worker/index.js`, `wrangler.jsonc`) serves the static export and handles `POST /api/enquiry`. Workers Builds deploys every push to `main`.
- **Custom domain is NOT enabled yet.** The current lemancave.co.uk (an older Next.js app with its own `/book`) stays live until the owner signs off. Don't uncomment `routes` in `wrangler.jsonc` without explicit approval.
- **CRM**: the Race Car Graphics CRM.
  - Supabase project `dipjypzrfigkzuarlsov`, repo `broadlanddigital2/race-car-graphics-crm`.
  - Forms post to the `inbound-webform-email` function as JSON `{form_key, name, email, subject, details, page_url}`.
  - `CRM_FORM_KEY` is the **LeMan Cave Web Forms** channel's public key.
  - Leads land in "LeMan Cave leads → Incoming", and alerts go to bookings@lemancave.co.uk.
  - The CRM reads labelled lines from `details`: `Name:`, `Email:`, `Phone:`, `Company:`. It takes the lead message from the `Enquiry:` line.
  - Keep the words enquiry, message, details and comments out of subjects (see `buildCrmPayload`).
- **Booking**: `/book` has live online booking: the CRM booking widget (`components/CrmBooking.jsx`, loaded from `https://crm.racecargraphics.uk/embed/booking.js`, inserted by the converter in place of `<div data-lc-booking="form">` in `design/Book.dc.html`). Stripe returns to `/book?session_id=…`, which shows the receipt.
  - Services, prices and opening times live in the CRM (Ecommerce, LeMan Cave): Sim Room (Sim 1, Sim 2; daytime £80, evenings & weekends £125, 1-hour slots, paid in full) and Whole Cave Hire (After School, Car Club, Saturday Afternoon x3, Sunday, Saturday Night x3; per person with a minimum spend, 25% deposit). Change prices there, not on the site.
  - Online bookings need 24 hours' notice (CRM: `ecommerce_sites.min_notice_minutes = 1440`). Anything sooner, or a special request, goes through the widget's "Have an urgent booking?" form (a lead in LeMan Cave leads, alert to bookings@) or by phone.
  - Sessions starting within 14 days are paid in full at checkout instead of the deposit (CRM: `ecommerce_sites.full_payment_within_days`).
  - Deposit bookings get a final invoice for the balance 14 days before (email with invoice PDF and a "Pay balance" link to `/book?pay_balance=…`), due 7 days before, plus a "Check balance paid" task in the CRM that closes itself when paid online. Settings: `ecommerce_sites.balance_invoice_days_before`, `balance_due_days_before`, and `site_url` (the booking page the pay link uses; change it to https://lemancave.co.uk/book at go-live).
  - **Gift cards**: `/experience-gifts-norwich` sells digital gift cards for any amount from £10 to £2,000 (`<CrmBooking mode="gift-card" />`), emailed with a code to the buyer or the recipient, valid 12 months. Customers enter the code on the booking review: the card comes off first, any deposit still due is charged, and the rest stays on the card. Settings: `ecommerce_sites.gift_cards_enabled`, `gift_card_min_amount`, `gift_card_max_amount`, `gift_card_valid_days`; cards are in `ecommerce_gift_cards`.
  - A whole-cave booking blocks both sims; a sim booking blocks only that sim and the overlapping whole-cave session.
  - Seasonal rules (After School off in December and early January; Saturday Night on December weeknights and early January) are dated rules that run to January 2028. Renew them before then.
  - Stripe for LeMan Cave is in **test mode**. Switch to live keys in the CRM (Ecommerce → Payments) before taking real bookings.
  - CRM side: `ecommerce_create_guest_service_order`, `slot_mode = 'clock'`, `venue_space` providers and the widget's venue profile (race-car-graphics-crm, Oct 2026).
- **Site search and AI enquiry bot** (Oct 2026): `app/layout.tsx` loads the CRM's `embed/site-search.js` (floating Search button bottom-left, `/` or Ctrl/Cmd+K, "Search the site" in the mobile menu) and `rcg-enquiry-bot.js` (chat launcher bottom-right). Configured in the CRM: Marketing → Site search, and Channels → LeMan Cave Enquiry Bot (tables `site_search_configs`, `enquiry_bot_configs`). Bot leads land in LeMan Cave leads with alerts to bookings@ (Boxly off). The bot learns the site by crawling it; until go-live both point at the workers.dev preview. **At go-live** set `site_url` (and search `appearance.booking_url` / `enquiry_url`, and the services' `source_url`) to https://lemancave.co.uk, then refresh the bot index and reindex search.
- **Advertising** (`/advertising-screens-norwich`, Oct 2026): digital signage screens around the building. Package cards (3/6/12 months, "price to be confirmed" on the page) and `<CrmBooking mode="signage" />`, the CRM order form (digital-signage function). Artwork: upload now, later from the account, or "we create it" (+£50, `signage_settings.design_fee`). Prices come from the CRM signage package (`signage_packages.prices`; currently placeholders 450/900/1800). `signage_settings.online_orders` is `request`: each order becomes a draft quote with a "check and send the quote" task and a lead/alert to bookings@. Switch it to `pay` (CRM: Digital signage → Settings → Website orders) once prices are final, and update the page's price text. Screen sizes and visitor numbers on the page are `[CONFIRM]`.
- **Customer account** (`/account`, header account icon; `/login` redirects there): `<CrmBooking mode="account" />`: bookings, invoices with Pay now, gift cards, screen adverts (status, artwork upload, quote/pay, preview approval), account details. Email-code sign-in.
- The Auto Opulence site (`broadlanddigital2/autoopulence`) uses the same Cloudflare and CRM pattern. Use it as the reference.

## SEO (Oct 2026)
- **Keywords**: `seo/keywords.json` maps every page to one primary and up to 3 secondary keywords (from the "LeMan Cave Keyword List" doc). The same list is in the CRM (`seo_page_keywords`, site "LeMan Cave"), where Marketing → SEO optimiser scores each page against it. If you change a page's keywords, change both.
- **Titles and descriptions**: `seo/meta.json`, read by `lib/seo.tsx` (`pageMeta(path)` for metadata and share image; `<PageSchema path>` for WebPage + BreadcrumbList JSON-LD). Every `app/**/page.tsx` uses them; new pages need an entry in both JSON files.
- **On the page**: each template has an `SEO` overlay in its design file (Landing, Guide, Compare, Product, Hub) setting the H1, hero alt text and keyword subheadings per slug; one-off pages have them in their own design file. The hero's small line is the H1 (keyword) and the big display headline is a styled `<p>`.
- **Addresses**: pages use keyword URLs (e.g. `/party-venue-norwich`, `/locations/party-venue-near-cromer`), set in `ROUTES` (`lib/routes.js` and the converter). The old addresses 301 to the new ones: `seo/redirects.json`, read by `worker/index.js`, with the same paths listed in `run_worker_first` in `wrangler.jsonc` (add both when moving a page). `/book` and `/account` keep their addresses because CRM emails and Stripe link to them.
- **FAQs**: the converter (`add_faqs`) keeps every FAQ answer in the HTML (hidden until opened) and adds FAQPage structured data from the same list (`components/FaqSchema.jsx`).
- The CRM checks the preview until go-live (`seo_sites.profile.audit_origin`). **At go-live** remove `audit_origin` so the weekly check reads lemancave.co.uk.

## Related Claude artifacts and docs
- **Design canvas**: Claude Design artifact "LeMan Cave Website", with all pages as boards.
- **SEO scope doc**: "4-Tier SEO Scope" (Claude Docs).
- **Image list doc**: "Full Website Image List" (Claude Docs). Includes image sizes per page.
- **Image brief**: Claude Docs.

## Content rules
- Write "Bring Your Own" on the site, never "BYO" (the owner's preference, Oct 2026).
- Never invent reviews, testimonials or ratings. Placeholders say `[ADD REAL REVIEW]` or similar.
- Don't state unconfirmed facts. Mark them `[CONFIRM …]` instead.
- **Images** are AI-generated stand-ins until real photos arrive.
  - Some show invented "LeMan Cave" signage. Batch 20 shows a fake building exterior that's only for visuals.
  - Avoid images with Pac-Man or other copyrighted characters.

## Open items (as of 27 Oct 2026)
- **`[CONFIRM]` items**:
  - sim titles;
  - VR age policy;
  - public transport;
  - accessibility details;
  - pizza menu;
  - local picks in the guides.
- Map embed on `/contact-leman-cave-norwich`.
- Real photography.
- Privacy policy and booking terms pages (the booking form links to `/privacy`).
- Switch LeMan Cave Stripe to live mode.
- Go-live domain switch.
