import type { Metadata } from 'next';
import Visit from '../../components/Visit';

export const metadata: Metadata = {
  title: "Visit & Contact",
  description: "Find LeMan Cave at Unit 1, Consensus House, St Faith’s Rd, Norwich NR6 7BW. Full parking on site, opening times and contact details.",
  alternates: { canonical: "/visit-us" },
  openGraph: { title: "Visit & Contact | LeMan Cave Norwich", description: "Find LeMan Cave at Unit 1, Consensus House, St Faith’s Rd, Norwich NR6 7BW. Full parking on site, opening times and contact details.", url: "/visit-us" },
};

export default function Page() {
  return <Visit />;
}
