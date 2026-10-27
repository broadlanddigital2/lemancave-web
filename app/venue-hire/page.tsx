import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Exclusive Venue Hire Norwich",
  description: "Exclusive private hire of Norwich’s motorsport venue — 2,000 sq ft, around 50 guests, every simulator and game included.",
  alternates: { canonical: "/venue-hire" },
  openGraph: { title: "Exclusive Venue Hire Norwich | LeMan Cave Norwich", description: "Exclusive private hire of Norwich’s motorsport venue — 2,000 sq ft, around 50 guests, every simulator and game included.", url: "/venue-hire" },
};

export default function Page() {
  return <Landing slug="venuehire" />;
}
