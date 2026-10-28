import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/4k-vs-vr-racing');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/4k-vs-vr-racing" />
      <Compare slug="4kvr" />
    </>
  );
}
