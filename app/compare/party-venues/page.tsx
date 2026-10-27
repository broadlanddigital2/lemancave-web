import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Party Venue Types Compared",
  description: "Booking a birthday, stag or hen? Here’s how an activity venue compares with a pub function room or restaurant.",
  alternates: { canonical: "/compare/party-venues" },
  openGraph: { title: "Party Venue Types Compared | LeMan Cave Norwich", description: "Booking a birthday, stag or hen? Here’s how an activity venue compares with a pub function room or restaurant.", url: "/compare/party-venues" },
};

export default function Page() {
  return <Compare slug="partyvenues" />;
}
