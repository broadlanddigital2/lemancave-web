import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Product from '../../../components/Product';

export const metadata: Metadata = pageMeta('/attractions/gaming-lounge-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/gaming-lounge-norwich" />
      <Product slug="ps5" />
    </>
  );
}
