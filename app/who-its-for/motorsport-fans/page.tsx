import type { Metadata } from 'next';
import Landing from '../../../components/Landing';

export const metadata: Metadata = {
  title: "For Motorsport Fans",
  description: "Full-motion sims, Le Mans race panels and signed memorabilia — Norwich’s home of motorsport.",
  alternates: { canonical: "/who-its-for/motorsport-fans" },
  openGraph: { title: "For Motorsport Fans | LeMan Cave Norwich", description: "Full-motion sims, Le Mans race panels and signed memorabilia — Norwich’s home of motorsport.", url: "/who-its-for/motorsport-fans" },
};

export default function Page() {
  return <Landing slug="motorsportfans" />;
}
