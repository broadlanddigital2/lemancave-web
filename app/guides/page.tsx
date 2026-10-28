import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/guides');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides" />
      <Guide slug="blog" />
    </>
  );
}
