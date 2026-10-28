import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/party-venue-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/party-venue-norwich" />
      <Landing slug="venuehire" />
    </>
  );
}
