import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Two-Player Arcade",
  description: "Two-player arcade classics, side by side. Grab a stick, pick a game and chase the high score.",
  alternates: { canonical: "/attractions/arcade" },
  openGraph: { title: "Two-Player Arcade | LeMan Cave Norwich", description: "Two-player arcade classics, side by side. Grab a stick, pick a game and chase the high score.", url: "/attractions/arcade" },
};

export default function Page() {
  return <Product slug="arcade" />;
}
