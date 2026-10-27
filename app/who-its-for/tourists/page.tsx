import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Visiting Norwich?",
  description: "Add something different to your trip — an indoor motorsport experience 4 miles from the city centre.",
  alternates: { canonical: "/who-its-for/tourists" },
  openGraph: { title: "Visiting Norwich? | LeMan Cave Norwich", description: "Add something different to your trip — an indoor motorsport experience 4 miles from the city centre.", url: "/who-its-for/tourists" },
};

export default function Page() {
  return <Landing slug="tourists" />;
}
