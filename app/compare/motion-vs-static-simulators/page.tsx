import type { Metadata } from 'next';
import Compare from '../../../components/Compare';

export const metadata: Metadata = {
  title: "Motion vs Static Simulators",
  description: "What does a 4 DOF motion platform add — and why do under-16s race in static mode?",
  alternates: { canonical: "/compare/motion-vs-static-simulators" },
  openGraph: { title: "Motion vs Static Simulators | LeMan Cave Norwich", description: "What does a 4 DOF motion platform add — and why do under-16s race in static mode?", url: "/compare/motion-vs-static-simulators" },
};

export default function Page() {
  return <Compare slug="motionstatic" />;
}
