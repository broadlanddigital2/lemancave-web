import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/christmas-party-ideas-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/christmas-party-ideas-norwich" />
      <Guide slug="christmas" />
    </>
  );
}
