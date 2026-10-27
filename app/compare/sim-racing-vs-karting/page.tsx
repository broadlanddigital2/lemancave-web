import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Sim Racing vs Karting",
  description: "Both scratch the racing itch — but they suit different groups, budgets and weather. Here’s how they stack up.",
  alternates: { canonical: "/compare/sim-racing-vs-karting" },
  openGraph: { title: "Sim Racing vs Karting | LeMan Cave Norwich", description: "Both scratch the racing itch — but they suit different groups, budgets and weather. Here’s how they stack up.", url: "/compare/sim-racing-vs-karting" },
};

export default function Page() {
  return <Compare slug="karting" />;
}
