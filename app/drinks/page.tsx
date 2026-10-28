import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Drinks from '../../components/Drinks';

export const metadata: Metadata = pageMeta('/drinks');

export default function Page() {
  return (
    <>
      <PageSchema path="/drinks" />
      <Drinks />
    </>
  );
}
