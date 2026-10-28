import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/teenage-party-ideas-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/teenage-party-ideas-norwich" />
      <Landing slug="teen" />
    </>
  );
}
