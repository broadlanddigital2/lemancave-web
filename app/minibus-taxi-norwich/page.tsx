import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Guide from '../../components/Guide';

export const metadata: Metadata = pageMeta('/minibus-taxi-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/minibus-taxi-norwich" />
      <Guide slug="taxi" />
    </>
  );
}
