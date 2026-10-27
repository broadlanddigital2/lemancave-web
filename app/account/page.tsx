import type { Metadata } from 'next';
import Account from '../../components/Account';

// Customer account (the CRM's account screen, components/CrmBooking.jsx mode "account"): bookings, invoices and
// balances, gift cards and advertising, signed in with an emailed code.
export const metadata: Metadata = {
  title: 'Your Account',
  description: 'Your LeMan Cave bookings, invoices, gift cards and advertising.',
  alternates: { canonical: '/account' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Account />;
}
