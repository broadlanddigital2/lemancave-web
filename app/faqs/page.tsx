import type { Metadata } from 'next';
import Guide from '../../components/Guide';

export const metadata: Metadata = {
  title: "FAQs",
  description: "Everything you need to know before you visit — bookings, food and drink, ages, access and more.",
  alternates: { canonical: "/faqs" },
  openGraph: { title: "FAQs | LeMan Cave Norwich", description: "Everything you need to know before you visit — bookings, food and drink, ages, access and more.", url: "/faqs" },
};

export default function Page() {
  return <Guide slug="faqs" />;
}
