import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/hen-do-norfolk');

export default function Page() {
  return (
    <>
      <PageSchema path="/hen-do-norfolk" />
      <Landing slug="hen" />
    </>
  );
}
