import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/stag-do-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/stag-do-norwich" />
      <Landing slug="stag" />
    </>
  );
}
