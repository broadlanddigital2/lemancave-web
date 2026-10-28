import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/motorbike-simulator-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/motorbike-simulator-norwich" />
      <Product slug="moto" />
    </>
  );
}
