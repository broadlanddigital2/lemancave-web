import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Bury St Edmunds",
  description: "Looking for something different to do near Bury St Edmunds? LeMan Cave is ~45 miles away in Norwich — full-motion racing simulators, a 160ft digital…",
  alternates: { canonical: "/locations/bury-st-edmunds" },
  openGraph: { title: "Things to do near Bury St Edmunds | LeMan Cave Norwich", description: "Looking for something different to do near Bury St Edmunds? LeMan Cave is ~45 miles away in Norwich — full-motion racing simulators, a 160ft digital…", url: "/locations/bury-st-edmunds" },
};

export default function Page() {
  return <Landing slug="bury" />;
}
