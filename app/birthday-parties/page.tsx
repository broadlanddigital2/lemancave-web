import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Birthday Parties in Norwich",
  description: "Take over the whole cave for a birthday they’ll never forget — racing sims, Scalextric, games, pizza and your own drinks.",
  alternates: { canonical: "/birthday-parties" },
  openGraph: { title: "Birthday Parties in Norwich | LeMan Cave Norwich", description: "Take over the whole cave for a birthday they’ll never forget — racing sims, Scalextric, games, pizza and your own drinks.", url: "/birthday-parties" },
};

export default function Page() {
  return <Landing slug="birthday" />;
}
