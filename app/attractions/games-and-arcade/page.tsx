import type { Metadata } from 'next';
import Games from '../../../components/Games';

export const metadata: Metadata = {
  title: "Games & Arcade",
  description: "PS5 on a 120-inch screen, digital pinball, pool, air hockey, table football, darts and arcade games at LeMan Cave, Norwich.",
  alternates: { canonical: "/attractions/games-and-arcade" },
  openGraph: { title: "Games & Arcade | LeMan Cave Norwich", description: "PS5 on a 120-inch screen, digital pinball, pool, air hockey, table football, darts and arcade games at LeMan Cave, Norwich.", url: "/attractions/games-and-arcade" },
};

export default function Page() {
  return <Games />;
}
