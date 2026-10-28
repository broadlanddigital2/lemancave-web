import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/locations/party-venue-near-kings-lynn');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations/party-venue-near-kings-lynn" />
      <Landing slug="kingslynn" />
    </>
  );
}
