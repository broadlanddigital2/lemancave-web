import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/motion-vs-static-simulator');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/motion-vs-static-simulator" />
      <Compare slug="motionstatic" />
    </>
  );
}
