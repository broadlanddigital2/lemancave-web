import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/club-social-ideas-norfolk');

export default function Page() {
  return (
    <>
      <PageSchema path="/club-social-ideas-norfolk" />
      <Landing slug="clubs" />
    </>
  );
}
