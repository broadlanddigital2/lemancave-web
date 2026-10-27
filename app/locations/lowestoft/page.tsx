import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Days Out from Lowestoft",
  description: "Looking for something different to do near Lowestoft? LeMan Cave is ~28 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…",
  alternates: { canonical: "/locations/lowestoft" },
  openGraph: { title: "Days Out from Lowestoft | LeMan Cave Norwich", description: "Looking for something different to do near Lowestoft? LeMan Cave is ~28 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…", url: "/locations/lowestoft" },
};

export default function Page() {
  return <Landing slug="lowestoft" />;
}
