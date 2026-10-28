import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/team-building-activities-compared');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/team-building-activities-compared" />
      <Compare slug="teambuilding" />
    </>
  );
}
