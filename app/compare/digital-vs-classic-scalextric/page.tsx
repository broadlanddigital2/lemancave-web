import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Digital vs Classic Scalextric",
  description: "Our 160ft six-lane track is digital. Here’s what that changes.",
  alternates: { canonical: "/compare/digital-vs-classic-scalextric" },
  openGraph: { title: "Digital vs Classic Scalextric | LeMan Cave Norwich", description: "Our 160ft six-lane track is digital. Here’s what that changes.", url: "/compare/digital-vs-classic-scalextric" },
};

export default function Page() {
  return <Compare slug="scalextric" />;
}
