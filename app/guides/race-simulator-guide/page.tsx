import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Race Simulator Guide",
  description: "What to expect from our pro racing simulators — and how to get the most from your session.",
  alternates: { canonical: "/guides/race-simulator-guide" },
  openGraph: { title: "Race Simulator Guide | LeMan Cave Norwich", description: "What to expect from our pro racing simulators — and how to get the most from your session.", url: "/guides/race-simulator-guide" },
};

export default function Page() {
  return <Guide slug="simguide" />;
}
