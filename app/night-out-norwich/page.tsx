import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/night-out-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/night-out-norwich" />
      <Landing slug="adultgroups" />
    </>
  );
}
