import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/motion-vs-static-simulators');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/motion-vs-static-simulators" />
      <Compare slug="motionstatic" />
    </>
  );
}
