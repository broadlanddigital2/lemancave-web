import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/club-socials');

export default function Page() {
  return (
    <>
      <PageSchema path="/club-socials" />
      <Landing slug="clubs" />
    </>
  );
}
