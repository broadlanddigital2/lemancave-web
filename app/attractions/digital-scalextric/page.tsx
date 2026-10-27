import type { Metadata } from 'next';
import Scalextric from '../../../components/Scalextric';

export const metadata: Metadata = {
  title: "Digital Scalextric",
  description: "Race a 160ft six-lane digital Scalextric with live timing at LeMan Cave, Norwich. Perfect for parties, families and groups.",
  alternates: { canonical: "/attractions/digital-scalextric" },
  openGraph: { title: "Digital Scalextric | LeMan Cave Norwich", description: "Race a 160ft six-lane digital Scalextric with live timing at LeMan Cave, Norwich. Perfect for parties, families and groups.", url: "/attractions/digital-scalextric" },
};

export default function Page() {
  return <Scalextric />;
}
