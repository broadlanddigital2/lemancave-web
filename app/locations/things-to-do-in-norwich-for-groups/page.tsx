import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/locations/things-to-do-in-norwich-for-groups');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations/things-to-do-in-norwich-for-groups" />
      <Landing slug="norwich" />
    </>
  );
}
