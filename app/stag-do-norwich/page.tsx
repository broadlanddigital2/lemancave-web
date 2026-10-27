import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Stag Do Activities Norwich",
  description: "Head-to-head racing, a grudge match on the Scalextric and BYO drinks — the perfect start to a Norwich stag do.",
  alternates: { canonical: "/stag-do-norwich" },
  openGraph: { title: "Stag Do Activities Norwich | LeMan Cave Norwich", description: "Head-to-head racing, a grudge match on the Scalextric and BYO drinks — the perfect start to a Norwich stag do.", url: "/stag-do-norwich" },
};

export default function Page() {
  return <Landing slug="stag" />;
}
