import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Hub from '../../components/Hub';

export const metadata: Metadata = pageMeta('/parties-and-events-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/parties-and-events-norwich" />
      <Hub slug="events" />
    </>
  );
}
