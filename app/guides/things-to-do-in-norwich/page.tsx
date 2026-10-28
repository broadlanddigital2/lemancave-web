import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/things-to-do-in-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/things-to-do-in-norwich" />
      <Guide slug="norwich" />
    </>
  );
}
