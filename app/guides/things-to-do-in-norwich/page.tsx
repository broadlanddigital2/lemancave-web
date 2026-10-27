import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Top Things To Do in Norwich",
  description: "From medieval landmarks to full-motion racing — our pick of the best days out in the city.",
  alternates: { canonical: "/guides/things-to-do-in-norwich" },
  openGraph: { title: "Top Things To Do in Norwich | LeMan Cave Norwich", description: "From medieval landmarks to full-motion racing — our pick of the best days out in the city.", url: "/guides/things-to-do-in-norwich" },
};

export default function Page() {
  return <Guide slug="norwich" />;
}
