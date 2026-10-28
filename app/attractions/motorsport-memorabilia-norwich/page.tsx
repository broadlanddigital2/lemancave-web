import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/motorsport-memorabilia-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/motorsport-memorabilia-norwich" />
      <Product slug="memorabilia" />
    </>
  );
}
