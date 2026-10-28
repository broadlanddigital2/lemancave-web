import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/ps5-lounge');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/ps5-lounge" />
      <Product slug="ps5" />
    </>
  );
}
