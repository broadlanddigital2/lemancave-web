import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to do near King’s Lynn",
  description: "Looking for something different to do near King’s Lynn? LeMan Cave is ~45 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…",
  alternates: { canonical: "/locations/kings-lynn" },
  openGraph: { title: "Things to do near King’s Lynn | LeMan Cave Norwich", description: "Looking for something different to do near King’s Lynn? LeMan Cave is ~45 miles away in Norwich — full-motion racing simulators, a 160ft digital Scalextric…", url: "/locations/kings-lynn" },
};

export default function Page() {
  return <Landing slug="kingslynn" />;
}
