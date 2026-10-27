import type { Metadata } from 'next';
import Pricing from '../../components/Pricing';

export const metadata: Metadata = {
  title: "Price List",
  description: "LeMan Cave prices: sim room from £80 per hour, After School Special £40pp, Saturday and Sunday whole-cave hire from £45pp, Bring Your Own drinks and pizza packages.",
  alternates: { canonical: "/prices" },
  openGraph: { title: "Price List | LeMan Cave Norwich", description: "LeMan Cave prices: sim room from £80 per hour, After School Special £40pp, Saturday and Sunday whole-cave hire from £45pp, Bring Your Own drinks and pizza packages.", url: "/prices" },
};

export default function Page() {
  return <Pricing />;
}
