import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Games from '../../../components/Games';

export const metadata: Metadata = pageMeta('/attractions/arcade-games-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/arcade-games-norwich" />
      <Games />
    </>
  );
}
