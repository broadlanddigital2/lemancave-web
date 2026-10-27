import type { Metadata } from 'next';
import Drinks from '../../components/Drinks';

export const metadata: Metadata = {
  title: "Bring Your Own Drinks",
  description: "Bring your own drinks to LeMan Cave. Drop them off in advance to be pre-chilled, with glasses and ice provided on Bring Your Own packages.",
  alternates: { canonical: "/drinks" },
  openGraph: { title: "Bring Your Own Drinks | LeMan Cave Norwich", description: "Bring your own drinks to LeMan Cave. Drop them off in advance to be pre-chilled, with glasses and ice provided on Bring Your Own packages.", url: "/drinks" },
};

export default function Page() {
  return <Drinks />;
}
