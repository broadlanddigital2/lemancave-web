import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "For Local Visitors",
  description: "Norwich’s own motorsport venue — perfect for a weeknight session, a weekend with the family or a night out.",
  alternates: { canonical: "/who-its-for/locals" },
  openGraph: { title: "For Local Visitors | LeMan Cave Norwich", description: "Norwich’s own motorsport venue — perfect for a weeknight session, a weekend with the family or a night out.", url: "/who-its-for/locals" },
};

export default function Page() {
  return <Landing slug="locals" />;
}
