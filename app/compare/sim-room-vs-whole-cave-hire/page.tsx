import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Sim Room vs Whole-Cave Hire",
  description: "Two ways to book LeMan Cave. Here’s which suits your group.",
  alternates: { canonical: "/compare/sim-room-vs-whole-cave-hire" },
  openGraph: { title: "Sim Room vs Whole-Cave Hire | LeMan Cave Norwich", description: "Two ways to book LeMan Cave. Here’s which suits your group.", url: "/compare/sim-room-vs-whole-cave-hire" },
};

export default function Page() {
  return <Compare slug="simvshire" />;
}
