import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near North Walsham",
  description: "Looking for something different to do near North Walsham? LeMan Cave is ~14 miles away in Norwich — full-motion racing simulators, a 160ft digital…",
  alternates: { canonical: "/locations/north-walsham" },
  openGraph: { title: "Things to do near North Walsham | LeMan Cave Norwich", description: "Looking for something different to do near North Walsham? LeMan Cave is ~14 miles away in Norwich — full-motion racing simulators, a 160ft digital…", url: "/locations/north-walsham" },
};

export default function Page() {
  return <Landing slug="northwalsham" />;
}
