import type { Metadata } from 'next';
import Product from '../../../components/Product';

export const metadata: Metadata = {
  title: "Digital Pinball",
  description: "One full-size digital pinball machine — all the lights, sound and multiball chaos of classic pinball, with a digital twist.",
  alternates: { canonical: "/attractions/digital-pinball" },
  openGraph: { title: "Digital Pinball | LeMan Cave Norwich", description: "One full-size digital pinball machine — all the lights, sound and multiball chaos of classic pinball, with a digital twist.", url: "/attractions/digital-pinball" },
};

export default function Page() {
  return <Product slug="pinball" />;
}
