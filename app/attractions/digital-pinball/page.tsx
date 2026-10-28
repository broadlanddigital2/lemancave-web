import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/digital-pinball');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/digital-pinball" />
      <Product slug="pinball" />
    </>
  );
}
