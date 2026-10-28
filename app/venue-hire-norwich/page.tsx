import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/venue-hire-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/venue-hire-norwich" />
      <Landing slug="hire" />
    </>
  );
}
