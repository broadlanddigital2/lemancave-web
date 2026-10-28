import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import GiftVouchers from '../../components/GiftVouchers';

export const metadata: Metadata = pageMeta('/gift-vouchers');

export default function Page() {
  return (
    <>
      <PageSchema path="/gift-vouchers" />
      <GiftVouchers />
    </>
  );
}
