import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/motorcycle-simulator');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/motorcycle-simulator" />
      <Product slug="moto" />
    </>
  );
}
