import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/sim-racing-vs-karting');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/sim-racing-vs-karting" />
      <Compare slug="karting" />
    </>
  );
}
