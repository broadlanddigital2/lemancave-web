import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Family Fun in Norwich",
  description: "An indoor day out where the kids race the grown-ups — and sometimes win.",
  alternates: { canonical: "/who-its-for/families" },
  openGraph: { title: "Family Fun in Norwich | LeMan Cave Norwich", description: "An indoor day out where the kids race the grown-ups — and sometimes win.", url: "/who-its-for/families" },
};

export default function Page() {
  return <Landing slug="families" />;
}
