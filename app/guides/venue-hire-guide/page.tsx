import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/venue-hire-guide');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/venue-hire-guide" />
      <Guide slug="venuehire" />
    </>
  );
}
