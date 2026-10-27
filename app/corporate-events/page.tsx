import type { Metadata } from 'next';
import Corporate from '../../components/Corporate';

export const metadata: Metadata = {
  title: "Corporate Events",
  description: "Corporate events and team building in Norwich: racing simulators, Scalextric leagues and games for groups of up to around 50.",
  alternates: { canonical: "/corporate-events" },
  openGraph: { title: "Corporate Events | LeMan Cave Norwich", description: "Corporate events and team building in Norwich: racing simulators, Scalextric leagues and games for groups of up to around 50.", url: "/corporate-events" },
};

export default function Page() {
  return <Corporate />;
}
