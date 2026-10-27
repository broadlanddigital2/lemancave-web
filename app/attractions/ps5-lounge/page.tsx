import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "PS5 Lounge",
  description: "PlayStation 5 on a 120-inch 4K immersive screen, played from a sofa built out of a converted Mini Cooper.",
  alternates: { canonical: "/attractions/ps5-lounge" },
  openGraph: { title: "PS5 Lounge | LeMan Cave Norwich", description: "PlayStation 5 on a 120-inch 4K immersive screen, played from a sofa built out of a converted Mini Cooper.", url: "/attractions/ps5-lounge" },
};

export default function Page() {
  return <Product slug="ps5" />;
}
