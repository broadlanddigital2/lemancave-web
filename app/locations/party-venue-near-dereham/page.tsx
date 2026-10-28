import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/locations/party-venue-near-dereham');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations/party-venue-near-dereham" />
      <Landing slug="dereham" />
    </>
  );
}
