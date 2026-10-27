import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Leaving & Retirement Parties Norwich",
  description: "Give a colleague a proper send-off — a race night, a podium finish and the whole team together.",
  alternates: { canonical: "/leaving-and-retirement-parties" },
  openGraph: { title: "Leaving & Retirement Parties Norwich | LeMan Cave Norwich", description: "Give a colleague a proper send-off — a race night, a podium finish and the whole team together.", url: "/leaving-and-retirement-parties" },
};

export default function Page() {
  return <Landing slug="leaving" />;
}
