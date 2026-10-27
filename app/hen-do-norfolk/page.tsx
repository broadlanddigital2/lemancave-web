import type { Metadata } from 'next';
import Landing from '../../components/Landing';

export const metadata: Metadata = {
  title: "Hen Do Activities Norfolk",
  description: "Not your usual hen do — racing, arcade games, pizza and your own drinks in a private, neon-lit venue.",
  alternates: { canonical: "/hen-do-norfolk" },
  openGraph: { title: "Hen Do Activities Norfolk | LeMan Cave Norwich", description: "Not your usual hen do — racing, arcade games, pizza and your own drinks in a private, neon-lit venue.", url: "/hen-do-norfolk" },
};

export default function Page() {
  return <Landing slug="hen" />;
}
