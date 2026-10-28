import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/wedding-reception-venue-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/wedding-reception-venue-norwich" />
      <Landing slug="wedding" />
    </>
  );
}
