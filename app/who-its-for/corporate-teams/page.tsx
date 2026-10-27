import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Corporate Team Days in Norwich",
  description: "Away days, client entertaining and team socials with a competitive edge.",
  alternates: { canonical: "/who-its-for/corporate-teams" },
  openGraph: { title: "Corporate Team Days in Norwich | LeMan Cave Norwich", description: "Away days, client entertaining and team socials with a competitive edge.", url: "/who-its-for/corporate-teams" },
};

export default function Page() {
  return <Landing slug="corporateteams" />;
}
