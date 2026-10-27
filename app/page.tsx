import type { Metadata } from 'next';
import Main from '../components/Main';

export const metadata: Metadata = {
  title: "LeMan Cave Norwich — Homepage",
  description: "Norwich’s motorsport entertainment venue: full-motion racing simulators, a 160ft digital Scalextric, PS5, pool, darts and arcade. Parties, team days and…",
  alternates: { canonical: "/" },
  openGraph: { title: "LeMan Cave Norwich — Homepage | LeMan Cave Norwich", description: "Norwich’s motorsport entertainment venue: full-motion racing simulators, a 160ft digital Scalextric, PS5, pool, darts and arcade. Parties, team days and…", url: "/" },
};

export default function Page() {
  return <Main />;
}
