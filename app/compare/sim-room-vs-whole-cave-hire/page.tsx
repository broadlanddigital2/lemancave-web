import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/sim-room-vs-whole-cave-hire');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/sim-room-vs-whole-cave-hire" />
      <Compare slug="simvshire" />
    </>
  );
}
