import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/pool-table');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/pool-table" />
      <Product slug="pool" />
    </>
  );
}
