import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/le-mans-history');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/le-mans-history" />
      <Guide slug="lemans" />
    </>
  );
}
