import type { Metadata } from 'next';
import Hub from '../../components/Hub';

export const metadata: Metadata = {
  title: "Attractions",
  description: "Pro racing simulators, digital Scalextric and a garage full of games — all under one roof in Norwich.",
  alternates: { canonical: "/attractions" },
  openGraph: { title: "Attractions | LeMan Cave Norwich", description: "Pro racing simulators, digital Scalextric and a garage full of games — all under one roof in Norwich.", url: "/attractions" },
};

export default function Page() {
  return <Hub slug="attractions" />;
}
