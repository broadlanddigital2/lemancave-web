import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/kids-party-checklist');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/kids-party-checklist" />
      <Guide slug="kidschecklist" />
    </>
  );
}
