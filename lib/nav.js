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
          ['/attractions/racing-simulator-norwich', 'Pro Racing Simulator'],
          ['/attractions/scalextric-track-norwich', 'Digital Scalextric'],
          ['/attractions/motorbike-simulator-norwich', 'Motorcycle Sim'],
          ['/attractions/motorsport-memorabilia-norwich', 'Retro Memorabilia'],
        ],
      },
      {
        title: 'Games',
        links: [
          ['/attractions/arcade-games-norwich', 'Games & Arcade'],
          ['/attractions/gaming-lounge-norwich', 'Games Console Lounge'],
          ['/attractions/digital-pinball-norwich', 'Digital Pinball'],
          ['/attractions/pool-table-norwich', 'Pool / Billiards Table'],
          ['/attractions/air-hockey-norwich', 'Air Hockey'],
          ['/attractions/poker-table-norwich', 'No-Stakes Poker'],
          ['/attractions/table-football-norwich', 'Table Football'],
          ['/attractions/darts-norwich', 'Darts'],
          ['/attractions/arcade-norwich', 'Arcade'],
        ],
      },
      {
        title: 'Learn & compare',
        links: [
          ['/guides/race-simulator-guide', 'Race Simulator Guide'],
          ['/guides/sim-racing-tips', 'Sim Racing Tips'],
          ['/compare/sim-racing-vs-karting', 'Sim Racing vs Karting'],
          ['/compare/4k-vs-vr-racing', '4K vs VR'],
          ['/compare/motion-vs-static-simulator', 'Motion vs Static'],
          ['/guides/le-mans-history', 'Le Mans History'],
        ],
      },
    ],
    more: [['/attractions', 'All attractions'], ['/experience-gifts-norwich', 'Gift vouchers']],
  },
  {
    label: 'Food & Drink',
    href: '/pizza-party-norwich',
    groups: [
      {
        title: 'Food & drink',
        links: [
          ['/pizza-party-norwich', 'Pit-Stop Pizza'],
          ['/bring-your-own-drinks-venue-norwich', 'Bring Your Own Drinks'],
          ['/compare/saturday-party-packages-norwich', 'Saturday Packages Compared'],
          ['/leman-cave-faqs', 'Food & drink FAQs'],
        ],
      },
    ],
  },
  {
    label: 'Parties & Events',
    href: '/parties-and-events-norwich',
    // Featured at the top of the section (green, like the desktop menu): [href, title, line].
    feature: ['/christmas-party-norwich', 'Christmas Parties', 'Every weeknight in December, from £45pp'],
    groups: [
      {
        title: 'Parties',
        links: [
          ['/party-venue-norwich', 'Exclusive Venue Hire'],
          ['/birthday-party-venue-norwich', 'Birthday Parties'],
          ['/kids-party-venue-norwich', 'Kids Parties'],
          ['/teenage-party-ideas-norwich', 'Teen Parties'],
          ['/stag-do-norwich', 'Stag Dos'],
          ['/hen-do-norwich', 'Hen Dos'],
          ['/night-out-norwich', 'Group Nights Out'],
          ['/family-days-out-norfolk', 'Family Days Out'],
        ],
      },
      {
        title: 'Business & clubs',
        links: [
          ['/corporate-events-norwich', 'Corporate Events'],
          ['/team-building-norwich', 'Team Building'],
          ['/corporate-hospitality-norwich', 'Client Entertaining'],
          ['/leaving-do-ideas-norwich', 'Leaving & Retirement'],
          ['/christmas-party-norwich', 'Christmas Parties'],
          ['/group-activities-norwich', 'Group Bookings'],
          ['/car-club-meet-venue-norfolk', 'Car Club Meets'],
          ['/club-social-ideas-norfolk', 'Club Socials'],
        ],
      },
      {
        title: 'Who it’s for',
        links: [
          ['/who-its-for/family-entertainment-norwich', 'Families'],
          ['/who-its-for/things-to-do-with-friends-in-norwich', 'Friends'],
          ['/who-its-for/corporate-team-activities-norwich', 'Corporate Teams'],
          ['/who-its-for/motorsport-experience-norwich', 'Motorsport Fans'],
          ['/who-its-for/gaming-venue-norwich', 'Gamers'],
          ['/who-its-for/fun-group-activities-norwich', 'Not Into Cars?'],
          ['/who-its-for/rainy-day-activities-norwich', 'Tourists'],
          ['/who-its-for/things-to-do-in-norwich-for-adults', 'Locals'],
        ],
      },
    ],
    more: [['/parties-and-events-norwich', 'All parties & events'], ['/guides', 'Party planners & checklists']],
  },
  { label: 'Prices', href: '/party-packages-norwich' },
  { label: 'Gallery', href: '/leman-cave-photos' },
  {
    label: 'Visit Us',
    href: '/contact-leman-cave-norwich',
    groups: [
      {
        title: 'Plan your visit',
        links: [
          ['/contact-leman-cave-norwich', 'Visit & Contact'],
          ['/leman-cave-opening-times', 'Opening Times'],
          ['/leman-cave-parking-and-travel', 'Travel & Parking'],
          ['/accessible-activities-norwich', 'Accessibility'],
          ['/leman-cave-faqs', 'FAQs'],
          ['/experience-gifts-norwich', 'Gift Vouchers'],
          ['/advertising-screens-norwich', 'Advertise With Us'],
        ],
      },
      {
        title: 'Visiting from',
        links: [
          ['/locations/things-to-do-in-norwich-for-groups', 'Norwich'],
          ['/locations/party-venue-norfolk', 'Norfolk'],
          ['/locations/party-venue-near-great-yarmouth', 'Great Yarmouth'],
          ['/locations/party-venue-near-cromer', 'Cromer'],
          ['/locations/party-venue-near-lowestoft', 'Lowestoft'],
          ['/locations/party-venue-near-ipswich', 'Ipswich'],
          ['/locations/party-venue-near-cambridge', 'Cambridge'],
          ['/locations', 'All 18 locations'],
        ],
      },
      {
        title: 'Guides & ideas',
        links: [
          ['/blog', 'Latest blog posts'],
          ['/guides', 'Guides'],
          ['/guides/things-to-do-in-norwich', 'Things to do in Norwich'],
          ['/guides/indoor-activities-norfolk', 'Indoor Activities in Norfolk'],
          ['/guides/gifts-for-petrolheads', 'Gifts for Petrolheads'],
          ['/compare/best-indoor-activities-norwich', 'Indoor Activities Compared'],
          ['/compare/sim-room-vs-whole-cave-hire', 'Sim Room vs Whole Cave'],
        ],
      },
    ],
  },
];
