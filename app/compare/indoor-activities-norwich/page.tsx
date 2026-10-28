import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/indoor-activities-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/indoor-activities-norwich" />
      <Compare slug="indoor" />
    </>
  );
}
