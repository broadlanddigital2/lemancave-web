import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/leaving-and-retirement-parties');

export default function Page() {
  return (
    <>
      <PageSchema path="/leaving-and-retirement-parties" />
      <Landing slug="leaving" />
    </>
  );
}
