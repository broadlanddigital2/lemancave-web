import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/kids-parties');

export default function Page() {
  return (
    <>
      <PageSchema path="/kids-parties" />
      <Landing slug="kids" />
    </>
  );
}
