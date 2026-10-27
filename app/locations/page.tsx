import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Motorsport Venue in East Anglia",
  description: "Looking for something different to do near East Anglia? LeMan Cave is Norwich, NR6 7BW away in Norwich — full-motion racing simulators, a 160ft digital…",
  alternates: { canonical: "/locations" },
  openGraph: { title: "Motorsport Venue in East Anglia | LeMan Cave Norwich", description: "Looking for something different to do near East Anglia? LeMan Cave is Norwich, NR6 7BW away in Norwich — full-motion racing simulators, a 160ft digital…", url: "/locations" },
};

export default function Page() {
  return <Landing slug="eastanglia" />;
}
