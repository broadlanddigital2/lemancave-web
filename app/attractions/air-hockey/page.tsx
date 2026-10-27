import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Air Hockey",
  description: "A pro-grade air hockey table. Quick, loud and fiercely competitive — the fastest game in the cave.",
  alternates: { canonical: "/attractions/air-hockey" },
  openGraph: { title: "Air Hockey | LeMan Cave Norwich", description: "A pro-grade air hockey table. Quick, loud and fiercely competitive — the fastest game in the cave.", url: "/attractions/air-hockey" },
};

export default function Page() {
  return <Product slug="airhockey" />;
}
