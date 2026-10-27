import type { Metadata } from 'next';
import Book from '../../components/Book';

export const metadata: Metadata = {
  title: "Book Your Visit",
  description: "Request a booking at LeMan Cave, Norwich: sim room sessions, whole-cave parties, Saturday and Sunday sessions, Christmas and corporate events.",
  alternates: { canonical: "/book" },
  openGraph: { title: "Book Your Visit | LeMan Cave Norwich", description: "Request a booking at LeMan Cave, Norwich.", url: "/book" },
};

export default function Page() {
  return <Book />;
}
