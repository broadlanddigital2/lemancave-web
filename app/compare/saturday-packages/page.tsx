import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Saturday Packages Compared",
  description: "Saturday Afternoon and Saturday Night come in three packages. Here’s what you get with each.",
  alternates: { canonical: "/compare/saturday-packages" },
  openGraph: { title: "Saturday Packages Compared | LeMan Cave Norwich", description: "Saturday Afternoon and Saturday Night come in three packages. Here’s what you get with each.", url: "/compare/saturday-packages" },
};

export default function Page() {
  return <Compare slug="saturday" />;
}
