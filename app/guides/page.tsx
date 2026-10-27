import type { Metadata } from 'next';
import Guide from '../../components/Guide';

export const metadata: Metadata = {
  title: "Blog & Guides",
  description: "Ideas for parties, days out and race nights, honest comparisons, and everything you need to know about our sims.",
  alternates: { canonical: "/guides" },
  openGraph: { title: "Blog & Guides | LeMan Cave Norwich", description: "Ideas for parties, days out and race nights, honest comparisons, and everything you need to know about our sims.", url: "/guides" },
};

export default function Page() {
  return <Guide slug="blog" />;
}
