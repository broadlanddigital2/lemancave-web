import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import GiftVouchers from '../../components/GiftVouchers';

export const metadata: Metadata = pageMeta('/experience-gifts-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/experience-gifts-norwich" />
      <GiftVouchers />
    </>
  );
}
