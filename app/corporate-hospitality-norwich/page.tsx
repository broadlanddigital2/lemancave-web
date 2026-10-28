import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/corporate-hospitality-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/corporate-hospitality-norwich" />
      <Landing slug="client" />
    </>
  );
}
