import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Stag & Hen Do Planner",
  description: "How to plan a Norwich stag or hen do with a competitive streak.",
  alternates: { canonical: "/guides/stag-and-hen-planner" },
  openGraph: { title: "Stag & Hen Do Planner | LeMan Cave Norwich", description: "How to plan a Norwich stag or hen do with a competitive streak.", url: "/guides/stag-and-hen-planner" },
};

export default function Page() {
  return <Guide slug="staghen" />;
}
