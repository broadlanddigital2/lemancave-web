import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/hen-do-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/hen-do-norwich" />
      <Landing slug="hen" />
    </>
  );
}
