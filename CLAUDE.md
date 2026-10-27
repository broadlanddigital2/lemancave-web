# LeMan Cave website: context for Claude sessions

Read this first. It carries over everything decided while the site was designed and built
in a Cowork session (Oct 2026). Setup and deploy steps are in `README.md`.

## The business
- **LeMan Cave**: indoor motorsport entertainment venue. Unit 1, Consensus House, St Faith's Rd, Norwich NR6 7BW.
  - Full parking on site, about 4 miles from the city centre. Fully accessible.
  - Around 50 guests across 2,000 sq ft.
  - Email bookings@lemancave.co.uk. Instagram @leman.cave.
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
  - Gift vouchers are e-vouchers.

## Prices
Whole-cave prices are per person, with a minimum spend that still applies if fewer guests come.
- **Sim room**: £80/hr Mon–Fri 9–5 (2 sharing 1 sim); £125/hr evenings and weekends.
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
- The other pages are one-offs (Main, Simulator, Scalextric, Games, Food, Drinks, Corporate, Christmas, Pricing, Gallery, Visit, GiftVouchers, Book).
- **SEO structure**: 4 tiers.
  1. Core pages.
  2. Attraction / product pages.
  3. Landing pages: 15 hire types, 9 audiences, 18 locations, with the East Anglia hub at `/locations`.
  4. Guides and resources: 12 guides, 9 comparisons, FAQs, opening times, travel.

  Every page links up to its hub, across to related pages, and down to guides and comparisons. Keep that internal linking when adding pages.
- **Header**: a mega menu (Attractions / Food & Drink / Parties & Events / Visit Us). The footer is deliberately slim.

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
- **Booking**: "Book now" goes to `/book`, a booking request that becomes a CRM lead. Full online booking (like Auto Opulence) needs LeMan Cave's services, packages and availability set up in the CRM booking module first, then the CRM booking widget (`booking-order-flow` function).
- The Auto Opulence site (`broadlanddigital2/autoopulence`) uses the same Cloudflare and CRM pattern. Use it as the reference.

## Related Claude artifacts and docs
- **Design canvas**: Claude Design artifact "LeMan Cave Website", with all pages as boards.
- **SEO scope doc**: "4-Tier SEO Scope" (Claude Docs).
- **Image list doc**: "Full Website Image List" (Claude Docs). Includes image sizes per page.
- **Image brief**: Claude Docs.

## Content rules
- Never invent reviews, testimonials or ratings. Placeholders say `[ADD REAL REVIEW]` or similar.
- Don't state unconfirmed facts. Mark them `[CONFIRM …]` instead.
- **Images** are AI-generated stand-ins until real photos arrive.
  - Some show invented "LeMan Cave" signage. Batch 20 shows a fake building exterior that's only for visuals.
  - Avoid images with Pac-Man or other copyrighted characters.

## Open items (as of 27 Oct 2026)
- **Real phone number**: `tel:01603000000` is a placeholder.
- **`[CONFIRM]` items**:
  - sim titles;
  - VR age policy;
  - voucher validity;
  - public transport;
  - accessibility details;
  - pizza menu;
  - local picks in the guides.
- Map embed on `/visit-us`.
- Mobile hamburger menu.
- Real photography.
- CRM online booking setup.
- Go-live domain switch.
