import type { Metadata } from 'next';
import Simulator from '../../../components/Simulator';

export const metadata: Metadata = {
  title: "Pro Racing Simulator",
  description: "Pro racing simulators in Norwich with 4 DOF motion, direct-drive wheels and 4K or VR. Sim room from £80 per hour for two people.",
  alternates: { canonical: "/attractions/racing-simulator" },
  openGraph: { title: "Pro Racing Simulator | LeMan Cave Norwich", description: "Pro racing simulators in Norwich with 4 DOF motion, direct-drive wheels and 4K or VR. Sim room from £80 per hour for two people.", url: "/attractions/racing-simulator" },
};

export default function Page() {
  return <Simulator />;
}
