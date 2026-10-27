import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Indoor Activities in Norwich Compared",
  description: "Bowling, escape rooms, trampoline parks, crazy golf or sim racing? How the popular indoor options compare for groups in Norwich.",
  alternates: { canonical: "/compare/indoor-activities-norwich" },
  openGraph: { title: "Indoor Activities in Norwich Compared | LeMan Cave Norwich", description: "Bowling, escape rooms, trampoline parks, crazy golf or sim racing? How the popular indoor options compare for groups in Norwich.", url: "/compare/indoor-activities-norwich" },
};

export default function Page() {
  return <Compare slug="indoor" />;
}
