import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Days Out from Great Yarmouth",
  description: "Looking for something different to do near Great Yarmouth? LeMan Cave is ~22 miles away in Norwich — full-motion racing simulators, a 160ft digital…",
  alternates: { canonical: "/locations/great-yarmouth" },
  openGraph: { title: "Days Out from Great Yarmouth | LeMan Cave Norwich", description: "Looking for something different to do near Great Yarmouth? LeMan Cave is ~22 miles away in Norwich — full-motion racing simulators, a 160ft digital…", url: "/locations/great-yarmouth" },
};

export default function Page() {
  return <Landing slug="greatyarmouth" />;
}
