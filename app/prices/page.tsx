import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Pricing from '../../components/Pricing';

export const metadata: Metadata = pageMeta('/prices');

export default function Page() {
  return (
    <>
      <PageSchema path="/prices" />
      <Pricing />
    </>
  );
}
