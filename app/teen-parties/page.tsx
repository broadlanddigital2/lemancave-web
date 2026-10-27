import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Teen Parties Norwich",
  description: "Sim racing, PS5 on a 120-inch screen and Scalextric tournaments — a party teenagers actually want.",
  alternates: { canonical: "/teen-parties" },
  openGraph: { title: "Teen Parties Norwich | LeMan Cave Norwich", description: "Sim racing, PS5 on a 120-inch screen and Scalextric tournaments — a party teenagers actually want.", url: "/teen-parties" },
};

export default function Page() {
  return <Landing slug="teen" />;
}
