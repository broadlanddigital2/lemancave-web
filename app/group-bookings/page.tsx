import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Group Bookings",
  description: "Hire the whole cave for your group — clubs, societies, friends and families. Every session priced per person.",
  alternates: { canonical: "/group-bookings" },
  openGraph: { title: "Group Bookings | LeMan Cave Norwich", description: "Hire the whole cave for your group — clubs, societies, friends and families. Every session priced per person.", url: "/group-bookings" },
};

export default function Page() {
  return <Landing slug="groups" />;
}
