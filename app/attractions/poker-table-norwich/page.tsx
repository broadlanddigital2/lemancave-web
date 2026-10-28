import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/poker-table-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/poker-table-norwich" />
      <Product slug="poker" />
    </>
  );
}
