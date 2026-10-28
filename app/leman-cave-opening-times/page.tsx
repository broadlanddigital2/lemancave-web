import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/leman-cave-opening-times');

export default function Page() {
  return (
    <>
      <PageSchema path="/leman-cave-opening-times" />
      <Guide slug="opening" />
    </>
  );
}
