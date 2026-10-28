import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/leaving-do-ideas-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/leaving-do-ideas-norwich" />
      <Landing slug="leaving" />
    </>
  );
}
