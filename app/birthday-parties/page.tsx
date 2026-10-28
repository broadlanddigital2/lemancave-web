import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/birthday-parties');

export default function Page() {
  return (
    <>
      <PageSchema path="/birthday-parties" />
      <Landing slug="birthday" />
    </>
  );
}
