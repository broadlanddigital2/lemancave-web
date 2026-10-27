// Mobile menu links. Mirrors the desktop mega menu in the design pages' header
// (Attractions / Food & Drink / Parties & Events / Prices / Gallery / Visit Us).
// If the mega menu changes in the design, update this list to match.
export const MOBILE_NAV = [
  {
    label: 'Attractions',
    href: '/attractions',
    groups: [
      {
        title: 'Racing',
        links: [
          ['/attractions/racing-simulator', 'Pro Racing Simulator'],
          ['/attractions/digital-scalextric', 'Digital Scalextric'],
          ['/attractions/motorcycle-simulator', 'Motorcycle Sim'],
          ['/attractions/memorabilia', 'Retro Memorabilia'],
        ],
      },
      {
        title: 'Games',
        links: [
          ['/attractions/games-and-arcade', 'Games & Arcade'],
          ['/attractions/ps5-lounge', 'PS5 Lounge'],
          ['/attractions/digital-pinball', 'Digital Pinball'],
          ['/attractions/pool-table', 'Pool Table'],
          ['/attractions/air-hockey', 'Air Hockey'],
          ['/attractions/table-football', 'Table Football'],
          ['/attractions/darts', 'Darts'],
          ['/attractions/arcade', 'Arcade'],
        ],
      },
      {
        title: 'Learn & compare',
        links: [
          ['/guides/race-simulator-guide', 'Race Simulator Guide'],
          ['/guides/sim-racing-tips', 'Sim Racing Tips'],
          ['/compare/sim-racing-vs-karting', 'Sim Racing vs Karting'],
          ['/compare/4k-vs-vr', '4K vs VR'],
          ['/compare/motion-vs-static-simulators', 'Motion vs Static'],
          ['/guides/le-mans-history', 'Le Mans History'],
        ],
      },
    ],
    more: [['/attractions', 'All attractions'], ['/gift-vouchers', 'Gift vouchers']],
  },
  {
    label: 'Food & Drink',
    href: '/food',
    groups: [
      {
        title: 'Food & drink',
        links: [
          ['/food', 'Pit-Stop Pizza'],
          ['/drinks', 'Bring Your Own Drinks'],
          ['/compare/saturday-packages', 'Saturday Packages Compared'],
          ['/faqs', 'Food & drink FAQs'],
        ],
      },
    ],
  },
  {
    label: 'Parties & Events',
    href: '/parties-and-events',
    // Featured at the top of the section (green, like the desktop menu): [href, title, line].
    feature: ['/christmas-parties', 'Christmas Parties', 'Every weeknight in December, from £45pp'],
    groups: [
      {
        title: 'Parties',
        links: [
          ['/venue-hire', 'Exclusive Venue Hire'],
          ['/birthday-parties', 'Birthday Parties'],
          ['/kids-parties', 'Kids Parties'],
          ['/teen-parties', 'Teen Parties'],
          ['/stag-do-norwich', 'Stag Dos'],
          ['/hen-do-norfolk', 'Hen Dos'],
          ['/group-nights-out', 'Group Nights Out'],
          ['/family-days-out', 'Family Days Out'],
        ],
      },
      {
        title: 'Business & clubs',
        links: [
          ['/corporate-events', 'Corporate Events'],
          ['/team-building', 'Team Building'],
          ['/client-entertaining', 'Client Entertaining'],
          ['/leaving-and-retirement-parties', 'Leaving & Retirement'],
          ['/christmas-parties', 'Christmas Parties'],
          ['/group-bookings', 'Group Bookings'],
          ['/car-club-meets', 'Car Club Meets'],
          ['/club-socials', 'Club Socials'],
        ],
      },
      {
        title: 'Who it’s for',
        links: [
          ['/who-its-for/families', 'Families'],
          ['/who-its-for/friends', 'Friends'],
          ['/who-its-for/corporate-teams', 'Corporate Teams'],
          ['/who-its-for/motorsport-fans', 'Motorsport Fans'],
          ['/who-its-for/gamers', 'Gamers'],
          ['/who-its-for/non-petrolheads', 'Not Into Cars?'],
          ['/who-its-for/tourists', 'Tourists'],
          ['/who-its-for/locals', 'Locals'],
        ],
      },
    ],
    more: [['/parties-and-events', 'All parties & events'], ['/guides', 'Party planners & checklists']],
  },
  { label: 'Prices', href: '/prices' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Visit Us',
    href: '/visit-us',
    groups: [
      {
        title: 'Plan your visit',
        links: [
          ['/visit-us', 'Visit & Contact'],
          ['/opening-times', 'Opening Times'],
          ['/travel-and-parking', 'Travel & Parking'],
          ['/accessibility', 'Accessibility'],
          ['/faqs', 'FAQs'],
          ['/gift-vouchers', 'Gift Vouchers'],
          ['/advertise', 'Advertise With Us'],
        ],
      },
      {
        title: 'Visiting from',
        links: [
          ['/locations/norwich', 'Norwich'],
          ['/locations/norfolk', 'Norfolk'],
          ['/locations/great-yarmouth', 'Great Yarmouth'],
          ['/locations/cromer', 'Cromer'],
          ['/locations/lowestoft', 'Lowestoft'],
          ['/locations/ipswich', 'Ipswich'],
          ['/locations/cambridge', 'Cambridge'],
          ['/locations', 'All 18 locations'],
        ],
      },
      {
        title: 'Guides & ideas',
        links: [
          ['/guides', 'Blog & Guides'],
          ['/guides/things-to-do-in-norwich', 'Things to do in Norwich'],
          ['/guides/indoor-activities-norfolk', 'Indoor Activities in Norfolk'],
          ['/guides/gifts-for-petrolheads', 'Gifts for Petrolheads'],
          ['/compare/indoor-activities-norwich', 'Indoor Activities Compared'],
          ['/compare/sim-room-vs-whole-cave-hire', 'Sim Room vs Whole Cave'],
        ],
      },
    ],
  },
];
