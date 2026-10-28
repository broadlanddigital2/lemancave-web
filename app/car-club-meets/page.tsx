import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/car-club-meets');

export default function Page() {
  return (
    <>
      <PageSchema path="/car-club-meets" />
      <Landing slug="carclub" />
    </>
  );
}
