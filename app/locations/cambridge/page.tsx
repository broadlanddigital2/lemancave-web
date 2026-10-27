import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Day trips from Cambridge",
  description: "Looking for something different to do near Cambridge? LeMan Cave is ~65 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…",
  alternates: { canonical: "/locations/cambridge" },
  openGraph: { title: "Day trips from Cambridge | LeMan Cave Norwich", description: "Looking for something different to do near Cambridge? LeMan Cave is ~65 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…", url: "/locations/cambridge" },
};

export default function Page() {
  return <Landing slug="cambridge" />;
}
