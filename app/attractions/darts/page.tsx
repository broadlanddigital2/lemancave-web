import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Darts",
  description: "Step up to the oche with a fully automated scoring system — no chalk, no maths, just throw.",
  alternates: { canonical: "/attractions/darts" },
  openGraph: { title: "Darts | LeMan Cave Norwich", description: "Step up to the oche with a fully automated scoring system — no chalk, no maths, just throw.", url: "/attractions/darts" },
};

export default function Page() {
  return <Product slug="darts" />;
}
