import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Sports & Social Club Nights Norwich",
  description: "End-of-season parties, fundraisers and socials for sports and social clubs — whole cave, your club.",
  alternates: { canonical: "/club-socials" },
  openGraph: { title: "Sports & Social Club Nights Norwich | LeMan Cave Norwich", description: "End-of-season parties, fundraisers and socials for sports and social clubs — whole cave, your club.", url: "/club-socials" },
};

export default function Page() {
  return <Landing slug="clubs" />;
}
