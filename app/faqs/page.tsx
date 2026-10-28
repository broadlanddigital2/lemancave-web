import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/faqs');

export default function Page() {
  return (
    <>
      <PageSchema path="/faqs" />
      <Guide slug="faqs" />
    </>
  );
}
