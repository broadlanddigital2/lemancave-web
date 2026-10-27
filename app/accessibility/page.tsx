import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Accessible Activities Norwich",
  description: "LeMan Cave is a fully accessible venue — everyone gets a place on the grid.",
  alternates: { canonical: "/accessibility" },
  openGraph: { title: "Accessible Activities Norwich | LeMan Cave Norwich", description: "LeMan Cave is a fully accessible venue — everyone gets a place on the grid.", url: "/accessibility" },
};

export default function Page() {
  return <Landing slug="accessibility" />;
}
