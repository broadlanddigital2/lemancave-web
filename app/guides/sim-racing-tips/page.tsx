import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Guide from '../../../components/Guide';

export const metadata: Metadata = pageMeta('/guides/sim-racing-tips');

export default function Page() {
  return (
    <>
      <PageSchema path="/guides/sim-racing-tips" />
      <Guide slug="simtips" />
    </>
  );
}
