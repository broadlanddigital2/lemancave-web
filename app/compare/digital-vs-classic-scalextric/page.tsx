import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/digital-vs-classic-scalextric');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/digital-vs-classic-scalextric" />
      <Compare slug="scalextric" />
    </>
  );
}
