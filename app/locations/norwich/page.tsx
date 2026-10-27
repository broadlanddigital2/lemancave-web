import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to Do in Norwich",
  description: "Looking for something different to do near Norwich? LeMan Cave is 4 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…",
  alternates: { canonical: "/locations/norwich" },
  openGraph: { title: "Things to Do in Norwich | LeMan Cave Norwich", description: "Looking for something different to do near Norwich? LeMan Cave is 4 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…", url: "/locations/norwich" },
};

export default function Page() {
  return <Landing slug="norwich" />;
}
