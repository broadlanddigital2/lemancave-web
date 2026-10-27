import type { Metadata } from 'next';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from inside LeMan Cave, Norwich: racing simulators, digital Scalextric, games, parties and motorsport memorabilia.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery | LeMan Cave Norwich", description: "Photos from inside LeMan Cave, Norwich: racing simulators, digital Scalextric, games, parties and motorsport memorabilia.", url: "/gallery" },
};

export default function Page() {
  return <Gallery />;
}
