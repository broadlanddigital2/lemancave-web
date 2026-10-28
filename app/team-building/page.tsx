import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/team-building');

export default function Page() {
  return (
    <>
      <PageSchema path="/team-building" />
      <Landing slug="teambuilding" />
    </>
  );
}
