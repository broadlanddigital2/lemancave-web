import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Client Entertaining Norwich",
  description: "Swap the restaurant for the racetrack — private, memorable hospitality in Norwich’s motorsport venue.",
  alternates: { canonical: "/client-entertaining" },
  openGraph: { title: "Client Entertaining Norwich | LeMan Cave Norwich", description: "Swap the restaurant for the racetrack — private, memorable hospitality in Norwich’s motorsport venue.", url: "/client-entertaining" },
};

export default function Page() {
  return <Landing slug="client" />;
}
