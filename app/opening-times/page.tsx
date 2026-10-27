import type { Metadata } from 'next';
import Guide from '../../components/Guide';

export const metadata: Metadata = {
  title: "Opening Times",
  description: "When you can race, play and party at LeMan Cave.",
  alternates: { canonical: "/opening-times" },
  openGraph: { title: "Opening Times | LeMan Cave Norwich", description: "When you can race, play and party at LeMan Cave.", url: "/opening-times" },
};

export default function Page() {
  return <Guide slug="opening" />;
}
