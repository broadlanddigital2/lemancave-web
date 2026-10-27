import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Kids Parties in Norwich",
  description: "Scalextric, static-mode sims and arcade games for young drivers — with the After School Special making weekday parties easy.",
  alternates: { canonical: "/kids-parties" },
  openGraph: { title: "Kids Parties in Norwich | LeMan Cave Norwich", description: "Scalextric, static-mode sims and arcade games for young drivers — with the After School Special making weekday parties easy.", url: "/kids-parties" },
};

export default function Page() {
  return <Landing slug="kids" />;
}
