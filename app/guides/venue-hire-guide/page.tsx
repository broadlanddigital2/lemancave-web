import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Venue Hire Guide",
  description: "How whole-cave hire works, what’s included and how pricing is calculated.",
  alternates: { canonical: "/guides/venue-hire-guide" },
  openGraph: { title: "Venue Hire Guide | LeMan Cave Norwich", description: "How whole-cave hire works, what’s included and how pricing is calculated.", url: "/guides/venue-hire-guide" },
};

export default function Page() {
  return <Guide slug="venuehire" />;
}
