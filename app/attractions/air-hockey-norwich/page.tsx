import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/air-hockey-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/air-hockey-norwich" />
      <Product slug="airhockey" />
    </>
  );
}
