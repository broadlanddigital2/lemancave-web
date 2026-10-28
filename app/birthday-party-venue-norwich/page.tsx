import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/birthday-party-venue-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/birthday-party-venue-norwich" />
      <Landing slug="birthday" />
    </>
  );
}
