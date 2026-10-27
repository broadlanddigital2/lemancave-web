import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Wymondham",
  description: "Looking for something different to do near Wymondham? LeMan Cave is ~12 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…",
  alternates: { canonical: "/locations/wymondham" },
  openGraph: { title: "Things to do near Wymondham | LeMan Cave Norwich", description: "Looking for something different to do near Wymondham? LeMan Cave is ~12 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…", url: "/locations/wymondham" },
};

export default function Page() {
  return <Landing slug="wymondham" />;
}
