import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/kids-party-venue-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/kids-party-venue-norwich" />
      <Landing slug="kids" />
    </>
  );
}
