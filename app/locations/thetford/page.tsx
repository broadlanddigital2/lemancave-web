import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Thetford",
  description: "Looking for something different to do near Thetford? LeMan Cave is ~30 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…",
  alternates: { canonical: "/locations/thetford" },
  openGraph: { title: "Things to do near Thetford | LeMan Cave Norwich", description: "Looking for something different to do near Thetford? LeMan Cave is ~30 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…", url: "/locations/thetford" },
};

export default function Page() {
  return <Landing slug="thetford" />;
}
