import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Retro Memorabilia",
  description: "Autographed race suits, F1 spoilers, NASCAR wheels, Le Mans race panels and neon signs — a museum you can race in, included with your venue hire.",
  alternates: { canonical: "/attractions/memorabilia" },
  openGraph: { title: "Retro Memorabilia | LeMan Cave Norwich", description: "Autographed race suits, F1 spoilers, NASCAR wheels, Le Mans race panels and neon signs — a museum you can race in, included with your venue hire.", url: "/attractions/memorabilia" },
};

export default function Page() {
  return <Product slug="memorabilia" />;
}
