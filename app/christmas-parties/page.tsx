import type { Metadata } from 'next';
import Christmas from '../../components/Christmas';

export const metadata: Metadata = {
  title: "Christmas Parties",
  description: "Christmas parties in Norwich with racing simulators, Scalextric, pizza and Bring Your Own drinks. Weeknights through December and Saturdays, from £45 per person.",
  alternates: { canonical: "/christmas-parties" },
  openGraph: { title: "Christmas Parties | LeMan Cave Norwich", description: "Christmas parties in Norwich with racing simulators, Scalextric, pizza and Bring Your Own drinks. Weeknights through December and Saturdays, from £45 per person.", url: "/christmas-parties" },
};

export default function Page() {
  return <Christmas />;
}
