import type { Metadata } from 'next';
import Guide from '../../../components/Guide';

export const metadata: Metadata = {
  title: "Kids Party Checklist",
  description: "Everything to sort before the big day — from guest numbers to the cake.",
  alternates: { canonical: "/guides/kids-party-checklist" },
  openGraph: { title: "Kids Party Checklist | LeMan Cave Norwich", description: "Everything to sort before the big day — from guest numbers to the cake.", url: "/guides/kids-party-checklist" },
};

export default function Page() {
  return <Guide slug="kidschecklist" />;
}
