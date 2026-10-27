import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Team Building Activities Compared",
  description: "How a race day compares with workshops, outdoor challenges and team meals.",
  alternates: { canonical: "/compare/team-building-activities" },
  openGraph: { title: "Team Building Activities Compared | LeMan Cave Norwich", description: "How a race day compares with workshops, outdoor challenges and team meals.", url: "/compare/team-building-activities" },
};

export default function Page() {
  return <Compare slug="teambuilding" />;
}
