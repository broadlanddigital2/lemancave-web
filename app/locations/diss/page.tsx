import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Diss",
  description: "Looking for something different to do near Diss? LeMan Cave is ~22 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…",
  alternates: { canonical: "/locations/diss" },
  openGraph: { title: "Things to do near Diss | LeMan Cave Norwich", description: "Looking for something different to do near Diss? LeMan Cave is ~22 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…", url: "/locations/diss" },
};

export default function Page() {
  return <Landing slug="diss" />;
}
