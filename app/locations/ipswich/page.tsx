import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Days Out from Ipswich",
  description: "Looking for something different to do near Ipswich? LeMan Cave is ~45 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…",
  alternates: { canonical: "/locations/ipswich" },
  openGraph: { title: "Days Out from Ipswich | LeMan Cave Norwich", description: "Looking for something different to do near Ipswich? LeMan Cave is ~45 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…", url: "/locations/ipswich" },
};

export default function Page() {
  return <Landing slug="ipswich" />;
}
