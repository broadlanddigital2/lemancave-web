import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Christmas Party Planner",
  description: "Dates, packages and timings for a work or friends’ Christmas party at LeMan Cave.",
  alternates: { canonical: "/guides/christmas-party-planner" },
  openGraph: { title: "Christmas Party Planner | LeMan Cave Norwich", description: "Dates, packages and timings for a work or friends’ Christmas party at LeMan Cave.", url: "/guides/christmas-party-planner" },
};

export default function Page() {
  return <Guide slug="christmas" />;
}
