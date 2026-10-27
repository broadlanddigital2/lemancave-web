import type { Metadata } from 'next';
import Food from '../../components/Food';

export const metadata: Metadata = {
  title: "Pizza",
  description: "Pit-stop pizza packages for parties and groups at LeMan Cave, Norwich. A large selection of pizzas with options for a range of dietary needs.",
  alternates: { canonical: "/food" },
  openGraph: { title: "Pizza | LeMan Cave Norwich", description: "Pit-stop pizza packages for parties and groups at LeMan Cave, Norwich. A large selection of pizzas with options for a range of dietary needs.", url: "/food" },
};

export default function Page() {
  return <Food />;
}
