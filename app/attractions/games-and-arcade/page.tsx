import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Games from '../../../components/Games';

export const metadata: Metadata = pageMeta('/attractions/games-and-arcade');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/games-and-arcade" />
      <Games />
    </>
  );
}
