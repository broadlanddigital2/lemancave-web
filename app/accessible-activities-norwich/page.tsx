import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/accessible-activities-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/accessible-activities-norwich" />
      <Landing slug="accessibility" />
    </>
  );
}
