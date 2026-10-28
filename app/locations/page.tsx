import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/locations');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations" />
      <Landing slug="eastanglia" />
    </>
  );
}
