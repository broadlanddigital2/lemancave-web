import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Gifts for Petrolheads",
  description: "Experience gifts for the car lover who has everything — in Norwich.",
  alternates: { canonical: "/guides/gifts-for-petrolheads" },
  openGraph: { title: "Gifts for Petrolheads | LeMan Cave Norwich", description: "Experience gifts for the car lover who has everything — in Norwich.", url: "/guides/gifts-for-petrolheads" },
};

export default function Page() {
  return <Guide slug="gifts" />;
}
