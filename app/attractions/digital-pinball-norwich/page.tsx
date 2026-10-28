import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/digital-pinball-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/digital-pinball-norwich" />
      <Product slug="pinball" />
    </>
  );
}
