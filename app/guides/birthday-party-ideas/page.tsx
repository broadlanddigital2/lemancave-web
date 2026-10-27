import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Best Birthday Party Ideas",
  description: "Stuck for ideas? Here’s how to make this birthday unforgettable.",
  alternates: { canonical: "/guides/birthday-party-ideas" },
  openGraph: { title: "Best Birthday Party Ideas | LeMan Cave Norwich", description: "Stuck for ideas? Here’s how to make this birthday unforgettable.", url: "/guides/birthday-party-ideas" },
};

export default function Page() {
  return <Guide slug="birthday" />;
}
