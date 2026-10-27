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
- contact (`/visit-us`)
- corporate quote
- gift voucher
- booking request (`/book`)

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
For this first version, **Book now** opens `/book`, a booking request form that becomes a CRM lead.
Full online booking (live availability and deposit payment) can be switched on once LeMan Cave's services,
packages and opening hours are set up in the CRM's booking module, as Auto Opulence has.

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
- **Map embed** on `/visit-us` is a placeholder box.
- **Images** are AI-generated stand-ins, and some show invented "LeMan Cave" signage and building exteriors. Replace them with real photos in `public/images/`.

## URL map

| URL | Design page |
|---|---|
| `/` | Main |
| `/accessibility` | Accessibility |
| `/attractions` | Attractions |
| `/attractions/air-hockey` | AirHockey |
| `/attractions/arcade` | Arcade |
| `/attractions/darts` | Darts |
| `/attractions/digital-pinball` | Pinball |
| `/attractions/digital-scalextric` | Scalextric |
| `/attractions/games-and-arcade` | Games |
| `/attractions/memorabilia` | Memorabilia |
| `/attractions/motorcycle-simulator` | MotoSim |
| `/attractions/pool-table` | Pool |
| `/attractions/ps5-lounge` | PS5 |
| `/attractions/racing-simulator` | Simulator |
| `/attractions/table-football` | TableFootball |
| `/birthday-parties` | Birthday |
| `/book` | Book |
| `/car-club-meets` | CarClub |
| `/christmas-parties` | Christmas |
| `/client-entertaining` | ClientEntertaining |
| `/club-socials` | ClubSocials |
| `/compare/4k-vs-vr` | Compare4kVr |
| `/compare/digital-vs-classic-scalextric` | CompareScalextric |
| `/compare/indoor-activities-norwich` | CompareIndoor |
| `/compare/motion-vs-static-simulators` | CompareMotionStatic |
| `/compare/party-venues` | ComparePartyVenues |
| `/compare/saturday-packages` | CompareSaturday |
| `/compare/sim-racing-vs-karting` | CompareKarting |
| `/compare/sim-room-vs-whole-cave-hire` | CompareSimVsHire |
| `/compare/team-building-activities` | CompareTeamBuilding |
| `/corporate-events` | Corporate |
| `/drinks` | Drinks |
| `/family-days-out` | FamilyDays |
| `/faqs` | FAQs |
| `/food` | Food |
| `/gallery` | Gallery |
| `/gift-vouchers` | GiftVouchers |
| `/group-bookings` | GroupBookings |
| `/group-nights-out` | AdultGroups |
| `/guides` | Blog |
| `/guides/birthday-party-ideas` | GuideBirthday |
| `/guides/christmas-party-planner` | GuideChristmas |
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
| `/hen-do-norfolk` | HenDo |
| `/kids-parties` | KidsParties |
| `/leaving-and-retirement-parties` | LeavingParties |
| `/locations` | EastAnglia |
| `/locations/aylsham` | Aylsham |
| `/locations/beccles` | Beccles |
| `/locations/bury-st-edmunds` | BuryStEdmunds |
| `/locations/cambridge` | Cambridge |
| `/locations/cromer` | Cromer |
| `/locations/dereham` | Dereham |
| `/locations/diss` | Diss |
| `/locations/great-yarmouth` | GreatYarmouth |
| `/locations/ipswich` | Ipswich |
| `/locations/kings-lynn` | KingsLynn |
| `/locations/lowestoft` | Lowestoft |
| `/locations/norfolk` | Norfolk |
| `/locations/north-walsham` | NorthWalsham |
| `/locations/norwich` | Norwich |
| `/locations/thetford` | Thetford |
| `/locations/wroxham` | Wroxham |
| `/locations/wymondham` | Wymondham |
| `/opening-times` | OpeningTimes |
| `/parties-and-events` | Events |
| `/prices` | Pricing |
| `/stag-do-norwich` | StagDo |
| `/team-building` | TeamBuilding |
| `/teen-parties` | TeenParties |
| `/travel-and-parking` | TravelParking |
| `/venue-hire` | VenueHire |
| `/visit-us` | Visit |
| `/who-its-for/corporate-teams` | ForCorporateTeams |
| `/who-its-for/families` | ForFamilies |
| `/who-its-for/friends` | ForFriends |
| `/who-its-for/gamers` | ForGamers |
| `/who-its-for/locals` | ForLocals |
| `/who-its-for/motorsport-fans` | ForMotorsportFans |
| `/who-its-for/non-petrolheads` | ForNonPetrolheads |
| `/who-its-for/tourists` | ForTourists |
