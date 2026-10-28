import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/stag-and-hen-planner');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/stag-and-hen-planner" />
      <Guide slug="staghen" />
    </>
  );
}
