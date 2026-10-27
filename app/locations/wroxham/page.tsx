import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Wroxham",
  description: "Looking for something different to do near Wroxham? LeMan Cave is ~7 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…",
  alternates: { canonical: "/locations/wroxham" },
  openGraph: { title: "Things to do near Wroxham | LeMan Cave Norwich", description: "Looking for something different to do near Wroxham? LeMan Cave is ~7 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…", url: "/locations/wroxham" },
};

export default function Page() {
  return <Landing slug="wroxham" />;
}
