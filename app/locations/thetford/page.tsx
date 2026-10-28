import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/locations/thetford');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations/thetford" />
      <Landing slug="thetford" />
    </>
  );
}
