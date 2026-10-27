import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Pool Table",
  description: "A 9ft pro pool table — a proper table for proper shots, under the low glow of the cave. Cues provided.",
  alternates: { canonical: "/attractions/pool-table" },
  openGraph: { title: "Pool Table | LeMan Cave Norwich", description: "A 9ft pro pool table — a proper table for proper shots, under the low glow of the cave. Cues provided.", url: "/attractions/pool-table" },
};

export default function Page() {
  return <Product slug="pool" />;
}
