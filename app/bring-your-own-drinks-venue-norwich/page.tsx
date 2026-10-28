import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Drinks from '../../components/Drinks';

export const metadata: Metadata = pageMeta('/bring-your-own-drinks-venue-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/bring-your-own-drinks-venue-norwich" />
      <Drinks />
    </>
  );
}
