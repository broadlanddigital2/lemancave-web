import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/best-indoor-activities-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/best-indoor-activities-norwich" />
      <Compare slug="indoor" />
    </>
  );
}
