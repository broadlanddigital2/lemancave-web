import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Hub from '../../components/Hub';

export const metadata: Metadata = pageMeta('/parties-and-events');

export default function Page() {
  return (
    <>
      <PageSchema path="/parties-and-events" />
      <Hub slug="events" />
    </>
  );
}
