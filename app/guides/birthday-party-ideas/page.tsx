import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/birthday-party-ideas');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/birthday-party-ideas" />
      <Guide slug="birthday" />
    </>
  );
}
