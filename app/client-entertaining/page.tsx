import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/client-entertaining');

export default function Page() {
  return (
    <>
      <PageSchema path="/client-entertaining" />
      <Landing slug="client" />
    </>
  );
}
