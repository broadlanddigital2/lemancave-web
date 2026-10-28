import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/travel-and-parking');

export default function Page() {
  return (
    <>
      <PageSchema path="/travel-and-parking" />
      <Guide slug="travel" />
    </>
  );
}
