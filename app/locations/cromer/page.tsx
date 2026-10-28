import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/locations/cromer');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations/cromer" />
      <Landing slug="cromer" />
    </>
  );
}
