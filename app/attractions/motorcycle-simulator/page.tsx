import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Classic Motorcycle Simulator",
  description: "A classic 1990s motorcycle simulator. Swap four wheels for two, lean into the bends and chase the lap record.",
  alternates: { canonical: "/attractions/motorcycle-simulator" },
  openGraph: { title: "Classic Motorcycle Simulator | LeMan Cave Norwich", description: "A classic 1990s motorcycle simulator. Swap four wheels for two, lean into the bends and chase the lap record.", url: "/attractions/motorcycle-simulator" },
};

export default function Page() {
  return <Product slug="moto" />;
}
