import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Planning a Corporate Team Event",
  description: "A simple, step-by-step guide to a team day people actually enjoy.",
  alternates: { canonical: "/guides/planning-a-team-event" },
  openGraph: { title: "Planning a Corporate Team Event | LeMan Cave Norwich", description: "A simple, step-by-step guide to a team day people actually enjoy.", url: "/guides/planning-a-team-event" },
};

export default function Page() {
  return <Guide slug="teamevent" />;
}
