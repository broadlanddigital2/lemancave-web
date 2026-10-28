import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/opening-times');

export default function Page() {
  return (
    <>
      <PageSchema path="/opening-times" />
      <Guide slug="opening" />
    </>
  );
}
