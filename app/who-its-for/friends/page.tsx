import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "Things to Do with Friends in Norwich",
  description: "Settle who’s fastest once and for all — then rematch on the pool table.",
  alternates: { canonical: "/who-its-for/friends" },
  openGraph: { title: "Things to Do with Friends in Norwich | LeMan Cave Norwich", description: "Settle who’s fastest once and for all — then rematch on the pool table.", url: "/who-its-for/friends" },
};

export default function Page() {
  return <Landing slug="friends" />;
}
