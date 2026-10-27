import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Days Out in Norfolk",
  description: "Looking for something different to do near Norfolk? LeMan Cave is Central Norwich away in Norwich — full-motion racing simulators, a 160ft digital…",
  alternates: { canonical: "/locations/norfolk" },
  openGraph: { title: "Days Out in Norfolk | LeMan Cave Norwich", description: "Looking for something different to do near Norfolk? LeMan Cave is Central Norwich away in Norwich — full-motion racing simulators, a 160ft digital…", url: "/locations/norfolk" },
};

export default function Page() {
  return <Landing slug="norfolk" />;
}
