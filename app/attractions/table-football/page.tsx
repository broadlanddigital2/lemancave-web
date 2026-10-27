import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Football Table",
  description: "A league-grade table football unit for settling office rivalries and family feuds alike.",
  alternates: { canonical: "/attractions/table-football" },
  openGraph: { title: "Football Table | LeMan Cave Norwich", description: "A league-grade table football unit for settling office rivalries and family feuds alike.", url: "/attractions/table-football" },
};

export default function Page() {
  return <Product slug="football" />;
}
