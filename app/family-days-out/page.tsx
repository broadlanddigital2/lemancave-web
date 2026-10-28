import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/family-days-out');

export default function Page() {
  return (
    <>
      <PageSchema path="/family-days-out" />
      <Landing slug="familydays" />
    </>
  );
}
