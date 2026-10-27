import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Team Building in Norwich",
  description: "Leagues, lap times and friendly rivalry — a team day that actually brings people together.",
  alternates: { canonical: "/team-building" },
  openGraph: { title: "Team Building in Norwich | LeMan Cave Norwich", description: "Leagues, lap times and friendly rivalry — a team day that actually brings people together.", url: "/team-building" },
};

export default function Page() {
  return <Landing slug="teambuilding" />;
}
