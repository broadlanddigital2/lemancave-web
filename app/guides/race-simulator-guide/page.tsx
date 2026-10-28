import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/race-simulator-guide');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/race-simulator-guide" />
      <Guide slug="simguide" />
    </>
  );
}
