import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Group Nights Out in Norwich",
  description: "Bring the crew, bring the drinks — a Saturday night of racing, games and pizza with the whole cave to yourselves.",
  alternates: { canonical: "/group-nights-out" },
  openGraph: { title: "Group Nights Out in Norwich | LeMan Cave Norwich", description: "Bring the crew, bring the drinks — a Saturday night of racing, games and pizza with the whole cave to yourselves.", url: "/group-nights-out" },
};

export default function Page() {
  return <Landing slug="adultgroups" />;
}
