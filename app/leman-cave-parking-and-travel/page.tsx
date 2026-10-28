import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/leman-cave-parking-and-travel');

export default function Page() {
  return (
    <>
      <PageSchema path="/leman-cave-parking-and-travel" />
      <Guide slug="travel" />
    </>
  );
}
