import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Car Club Meets Norfolk",
  description: "Saturday mornings built for car clubs — full parking on site, simulators, Scalextric and a wall of motorsport history.",
  alternates: { canonical: "/car-club-meets" },
  openGraph: { title: "Car Club Meets Norfolk | LeMan Cave Norwich", description: "Saturday mornings built for car clubs — full parking on site, simulators, Scalextric and a wall of motorsport history.", url: "/car-club-meets" },
};

export default function Page() {
  return <Landing slug="carclub" />;
}
