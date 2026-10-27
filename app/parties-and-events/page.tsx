import type { Metadata } from 'next';
import Hub from '../../components/Hub';

export const metadata: Metadata = {
  title: "Parties & Events",
  description: "Birthdays, stag and hen dos, team days and Christmas parties — take over the whole cave.",
  alternates: { canonical: "/parties-and-events" },
  openGraph: { title: "Parties & Events | LeMan Cave Norwich", description: "Birthdays, stag and hen dos, team days and Christmas parties — take over the whole cave.", url: "/parties-and-events" },
};

export default function Page() {
  return <Hub slug="events" />;
}
