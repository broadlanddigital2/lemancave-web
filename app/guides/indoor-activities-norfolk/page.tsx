import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/indoor-activities-norfolk');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/indoor-activities-norfolk" />
      <Guide slug="indoor" />
    </>
  );
}
