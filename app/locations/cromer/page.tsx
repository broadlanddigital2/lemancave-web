import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near Cromer",
  description: "Looking for something different to do near Cromer? LeMan Cave is ~20 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…",
  alternates: { canonical: "/locations/cromer" },
  openGraph: { title: "Things to do near Cromer | LeMan Cave Norwich", description: "Looking for something different to do near Cromer? LeMan Cave is ~20 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric and a…", url: "/locations/cromer" },
};

export default function Page() {
  return <Landing slug="cromer" />;
}
