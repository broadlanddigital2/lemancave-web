import type { Metadata } from 'next';
import GiftVouchers from '../../components/GiftVouchers';

export const metadata: Metadata = {
  title: "Gift Vouchers",
  description: "LeMan Cave e-gift vouchers for racing simulator sessions and more — the perfect present for petrolheads and gamers in Norfolk.",
  alternates: { canonical: "/gift-vouchers" },
  openGraph: { title: "Gift Vouchers | LeMan Cave Norwich", description: "LeMan Cave e-gift vouchers for racing simulator sessions and more — the perfect present for petrolheads and gamers in Norfolk.", url: "/gift-vouchers" },
};

export default function Page() {
  return <GiftVouchers />;
}
