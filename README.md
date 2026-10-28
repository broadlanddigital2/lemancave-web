# LeMan Cave website

The lemancave.co.uk website: Next.js pages exported as a static site and served by a
**Cloudflare Worker**, with every form going into the **Race Car Graphics CRM**.
It's set up the same way as the Auto Opulence site.

## How it works

| Piece | What it does |
|---|---|
| `app/**/page.tsx` | 91 pages (90 from the design plus `/site-map`), each with its own SEO title, description and canonical URL |
| `components/` | Page components converted from the design canvas (`design/*.dc.html`) |
| `worker/index.js` | The Cloudflare Worker. It serves the static site from `./out`, handles `POST /api/enquiry`, and runs the redirects |
| `wrangler.jsonc` | Worker settings: static assets, the CRM address and the form key, plus the custom domain block (commented out until go-live) |
| `app/sitemap.ts`, `app/robots.ts` | `/sitemap.xml` and `/robots.txt` |
| `design/` + `scripts/convert_design.py` | The original design files and the converter. Run `python3 scripts/convert_design.py design .` to regenerate `components/` after design changes |

## Forms → CRM

Every form posts to `/api/enquiry`:
- home page enquiry
- contact (`/contact-leman-cave-norwich`)
- corporate quote
- gift voucher

The Worker forwards each one to the CRM's `inbound-webform-email` function with LeMan Cave's web form key, the same way the Auto Opulence site does. The CRM then:
- creates the lead in **LeMan Cave leads → Incoming**;
- links the enquiry to an existing customer, or creates a new one;
- emails the new-enquiry alert to the addresses set on the **LeMan Cave Web Forms** channel (currently bookings@lemancave.co.uk).

The CRM picks out these fields from what the Worker sends:
- name, email, phone and company;
- the subject (for example "Booking request — Saturday Night");
- the page the form was sent from;
- a one-line summary of everything else: package, date, group size, notes and so on.

Spam protection is a hidden honeypot field. Bad emails are rejected before anything reaches the CRM.

### Booking
**Book now** opens `/book`, which has live online booking through the CRM booking widget (live availability, prices
and Stripe payment). Services, prices and opening times are managed in the CRM, not on the site. See CLAUDE.md.

## Deploying (Cloudflare Workers Builds)

This is a one-time setup, the same as Auto Opulence:
1. In Cloudflare go to **Workers & Pages → Create → Import a repository**, and choose `broadlanddigital2/lemancave-web`.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Deploy. The site appears at `lemancave-web.<your-subdomain>.workers.dev` for review.

After that, every push to `main` deploys automatically within a couple of minutes.

No secrets are needed: the CRM form key is a public channel key, kept in `wrangler.jsonc` `vars`.

### Go-live (after sign-off)
lemancave.co.uk's DNS is already in Cloudflare.
1. Uncomment the `routes` block in `wrangler.jsonc`, which claims `lemancave.co.uk` and `www`, and push.
2. **Before doing this**, retire or move the current site and its `/book` system. The new Worker takes over the domain.

### Local
```bash
npm install
npm run dev        # Next dev server (forms need the Worker: use `npm run preview`)
npm run preview    # static build + wrangler dev on http://localhost:8787
```

## Before go-live: placeholders
- **Phone number** `tel:01603000000` on the Home, Corporate and Visit pages is a placeholder.
- `[CONFIRM …]` items:
  - sim tracks and cars;
  - VR age policy;
  - gift voucher validity;
  - public transport advice;
  - accessibility details;
  - pizza menu;
  - local recommendations in the guides.
- Review placeholders `[NAME]`, and "Last reviewed: [DATE]" on the comparison pages.
- **Map embed** on `/contact-leman-cave-norwich` is a placeholder box.
- **Images** are AI-generated stand-ins, and some show invented "LeMan Cave" signage and building exteriors. Replace them with real photos in `public/images/`.

## URL map

| URL | Design page |
|---|---|
| `/` | Main |
| `/accessible-activities-norwich` | Accessibility |
| `/attractions` | Attractions |
| `/attractions/air-hockey-norwich` | AirHockey |
| `/attractions/arcade-norwich` | Arcade |
| `/attractions/darts-norwich` | Darts |
| `/attractions/digital-pinball-norwich` | Pinball |
| `/attractions/scalextric-track-norwich` | Scalextric |
| `/attractions/arcade-games-norwich` | Games |
| `/attractions/motorsport-memorabilia-norwich` | Memorabilia |
| `/attractions/motorbike-simulator-norwich` | MotoSim |
| `/attractions/pool-table-norwich` | Pool |
| `/attractions/ps5-gaming-lounge-norwich` | PS5 |
| `/attractions/racing-simulator-norwich` | Simulator |
| `/attractions/table-football-norwich` | TableFootball |
| `/birthday-party-venue-norwich` | Birthday |
| `/book` | Book |
| `/car-club-meet-venue-norfolk` | CarClub |
| `/christmas-party-norwich` | Christmas |
| `/corporate-hospitality-norwich` | ClientEntertaining |
| `/club-social-ideas-norfolk` | ClubSocials |
| `/compare/4k-vs-vr-racing` | Compare4kVr |
| `/compare/digital-vs-classic-scalextric` | CompareScalextric |
| `/compare/best-indoor-activities-norwich` | CompareIndoor |
| `/compare/motion-vs-static-simulator` | CompareMotionStatic |
| `/compare/party-venues-norwich-compared` | ComparePartyVenues |
| `/compare/saturday-party-packages-norwich` | CompareSaturday |
| `/compare/sim-racing-vs-karting` | CompareKarting |
| `/compare/sim-room-vs-whole-cave-hire` | CompareSimVsHire |
| `/compare/team-building-activities-compared` | CompareTeamBuilding |
| `/corporate-events-norwich` | Corporate |
| `/bring-your-own-drinks-venue-norwich` | Drinks |
| `/family-days-out-norfolk` | FamilyDays |
| `/leman-cave-faqs` | FAQs |
| `/pizza-party-norwich` | Food |
| `/leman-cave-photos` | Gallery |
| `/experience-gifts-norwich` | GiftVouchers |
| `/group-activities-norwich` | GroupBookings |
| `/night-out-norwich` | AdultGroups |
| `/guides` | Blog |
| `/guides/birthday-party-ideas` | GuideBirthday |
| `/guides/christmas-party-ideas-norwich` | GuideChristmas |
| `/guides/gifts-for-petrolheads` | GuideGifts |
| `/guides/indoor-activities-norfolk` | GuideIndoor |
| `/guides/kids-party-checklist` | GuideKidsChecklist |
| `/guides/le-mans-history` | GuideLeMans |
| `/guides/planning-a-team-event` | GuideTeamEvent |
| `/guides/race-simulator-guide` | GuideSim |
| `/guides/sim-racing-tips` | GuideSimTips |
| `/guides/stag-and-hen-planner` | GuideStagHen |
| `/guides/things-to-do-in-norwich` | GuideNorwich |
| `/guides/venue-hire-guide` | GuideVenueHire |
| `/hen-do-norwich` | HenDo |
| `/kids-party-venue-norwich` | KidsParties |
| `/leaving-do-ideas-norwich` | LeavingParties |
| `/locations` | EastAnglia |
| `/locations/party-venue-near-aylsham` | Aylsham |
| `/locations/party-venue-near-beccles` | Beccles |
| `/locations/party-venue-near-bury-st-edmunds` | BuryStEdmunds |
| `/locations/party-venue-near-cambridge` | Cambridge |
| `/locations/party-venue-near-cromer` | Cromer |
| `/locations/party-venue-near-dereham` | Dereham |
| `/locations/party-venue-near-diss` | Diss |
| `/locations/party-venue-near-great-yarmouth` | GreatYarmouth |
| `/locations/party-venue-near-ipswich` | Ipswich |
| `/locations/party-venue-near-kings-lynn` | KingsLynn |
| `/locations/party-venue-near-lowestoft` | Lowestoft |
| `/locations/party-venue-norfolk` | Norfolk |
| `/locations/party-venue-near-north-walsham` | NorthWalsham |
| `/locations/things-to-do-in-norwich-for-groups` | Norwich |
| `/locations/party-venue-near-thetford` | Thetford |
| `/locations/party-venue-near-wroxham` | Wroxham |
| `/locations/party-venue-near-wymondham` | Wymondham |
| `/leman-cave-opening-times` | OpeningTimes |
| `/parties-and-events-norwich` | Events |
| `/party-packages-norwich` | Pricing |
| `/stag-do-norwich` | StagDo |
| `/team-building-norwich` | TeamBuilding |
| `/teenage-party-ideas-norwich` | TeenParties |
| `/leman-cave-parking-and-travel` | TravelParking |
| `/party-venue-norwich` | VenueHire |
| `/contact-leman-cave-norwich` | Visit |
| `/who-its-for/corporate-team-activities-norwich` | ForCorporateTeams |
| `/who-its-for/family-entertainment-norwich` | ForFamilies |
| `/who-its-for/things-to-do-with-friends-in-norwich` | ForFriends |
| `/who-its-for/gaming-venue-norwich` | ForGamers |
| `/who-its-for/things-to-do-in-norwich-for-adults` | ForLocals |
| `/who-its-for/motorsport-experience-norwich` | ForMotorsportFans |
| `/who-its-for/fun-group-activities-norwich` | ForNonPetrolheads |
| `/who-its-for/rainy-day-activities-norwich` | ForTourists |
