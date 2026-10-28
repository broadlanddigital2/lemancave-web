import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/planning-a-team-event');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/planning-a-team-event" />
      <Guide slug="teamevent" />
    </>
  );
}
