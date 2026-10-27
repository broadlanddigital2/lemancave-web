import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Aylsham",
  description: "Looking for something different to do near Aylsham? LeMan Cave is ~10 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…",
  alternates: { canonical: "/locations/aylsham" },
  openGraph: { title: "Things to do near Aylsham | LeMan Cave Norwich", description: "Looking for something different to do near Aylsham? LeMan Cave is ~10 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and…", url: "/locations/aylsham" },
};

export default function Page() {
  return <Landing slug="aylsham" />;
}
