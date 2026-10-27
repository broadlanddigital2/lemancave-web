import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Le Mans & Motorsport History",
  description: "The race behind our name — a short history of the 24 Hours of Le Mans.",
  alternates: { canonical: "/guides/le-mans-history" },
  openGraph: { title: "Le Mans & Motorsport History | LeMan Cave Norwich", description: "The race behind our name — a short history of the 24 Hours of Le Mans.", url: "/guides/le-mans-history" },
};

export default function Page() {
  return <Guide slug="lemans" />;
}
