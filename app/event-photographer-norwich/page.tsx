import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Photography from '../../components/Photography';

export const metadata: Metadata = pageMeta('/event-photographer-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/event-photographer-norwich" />
      <Photography />
    </>
  );
}
