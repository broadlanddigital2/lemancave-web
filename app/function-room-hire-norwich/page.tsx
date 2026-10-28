import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/function-room-hire-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/function-room-hire-norwich" />
      <Landing slug="functionroom" />
    </>
  );
}
