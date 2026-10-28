import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/locations/bury-st-edmunds');

export default function Page() {
  return (
    <>
      <PageSchema path="/locations/bury-st-edmunds" />
      <Landing slug="bury" />
    </>
  );
}
