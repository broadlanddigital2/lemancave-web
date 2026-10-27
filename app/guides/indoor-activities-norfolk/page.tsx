import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Best Indoor Activities in Norfolk",
  description: "When the weather turns, here’s how to keep the fun going indoors.",
  alternates: { canonical: "/guides/indoor-activities-norfolk" },
  openGraph: { title: "Best Indoor Activities in Norfolk | LeMan Cave Norwich", description: "When the weather turns, here’s how to keep the fun going indoors.", url: "/guides/indoor-activities-norfolk" },
};

export default function Page() {
  return <Guide slug="indoor" />;
}
