import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Family Days Out in Norfolk",
  description: "An indoor day out for the whole family — racing for the big kids, games for everyone, rain or shine.",
  alternates: { canonical: "/family-days-out" },
  openGraph: { title: "Family Days Out in Norfolk | LeMan Cave Norwich", description: "An indoor day out for the whole family — racing for the big kids, games for everyone, rain or shine.", url: "/family-days-out" },
};

export default function Page() {
  return <Landing slug="familydays" />;
}
