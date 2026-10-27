import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Sim Racing Tips for Beginners",
  description: "Seven ways to go faster in your first hour on a racing simulator.",
  alternates: { canonical: "/guides/sim-racing-tips" },
  openGraph: { title: "Sim Racing Tips for Beginners | LeMan Cave Norwich", description: "Seven ways to go faster in your first hour on a racing simulator.", url: "/guides/sim-racing-tips" },
};

export default function Page() {
  return <Guide slug="simtips" />;
}
