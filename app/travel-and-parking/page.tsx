import type { Metadata } from 'next';
import Guide from '../../components/Guide';

export const metadata: Metadata = {
  title: "Travel & Parking",
  description: "Easy to find, easy to get to — with full parking on site.",
  alternates: { canonical: "/travel-and-parking" },
  openGraph: { title: "Travel & Parking | LeMan Cave Norwich", description: "Easy to find, easy to get to — with full parking on site.", url: "/travel-and-parking" },
};

export default function Page() {
  return <Guide slug="travel" />;
}
