import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Beccles",
  description: "Looking for something different to do near Beccles? LeMan Cave is ~20 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…",
  alternates: { canonical: "/locations/beccles" },
  openGraph: { title: "Things to do near Beccles | LeMan Cave Norwich", description: "Looking for something different to do near Beccles? LeMan Cave is ~20 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…", url: "/locations/beccles" },
};

export default function Page() {
  return <Landing slug="beccles" />;
}
