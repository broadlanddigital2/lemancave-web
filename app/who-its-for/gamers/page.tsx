import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Gaming in Norwich",
  description: "PS5 on a 120-inch 4K screen, pro racing sims in VR, digital pinball and arcade classics.",
  alternates: { canonical: "/who-its-for/gamers" },
  openGraph: { title: "Gaming in Norwich | LeMan Cave Norwich", description: "PS5 on a 120-inch 4K screen, pro racing sims in VR, digital pinball and arcade classics.", url: "/who-its-for/gamers" },
};

export default function Page() {
  return <Landing slug="gamers" />;
}
