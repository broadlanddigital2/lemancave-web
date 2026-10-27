import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "4K vs VR Sim Racing",
  description: "Our simulators let you race on wraparound 4K screens or in VR. Which should you choose?",
  alternates: { canonical: "/compare/4k-vs-vr" },
  openGraph: { title: "4K vs VR Sim Racing | LeMan Cave Norwich", description: "Our simulators let you race on wraparound 4K screens or in VR. Which should you choose?", url: "/compare/4k-vs-vr" },
};

export default function Page() {
  return <Compare slug="4kvr" />;
}
