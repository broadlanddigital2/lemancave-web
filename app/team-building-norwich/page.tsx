import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/team-building-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/team-building-norwich" />
      <Landing slug="teambuilding" />
    </>
  );
}
