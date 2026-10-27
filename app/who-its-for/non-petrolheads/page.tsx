import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Fun for Non-Petrolheads",
  description: "You don’t need to know anything about motorsport to have the best night out in Norwich.",
  alternates: { canonical: "/who-its-for/non-petrolheads" },
  openGraph: { title: "Fun for Non-Petrolheads | LeMan Cave Norwich", description: "You don’t need to know anything about motorsport to have the best night out in Norwich.", url: "/who-its-for/non-petrolheads" },
};

export default function Page() {
  return <Landing slug="nonpetrolheads" />;
}
