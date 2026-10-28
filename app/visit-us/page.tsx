import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Visit from '../../components/Visit';

export const metadata: Metadata = pageMeta('/visit-us');

export default function Page() {
  return (
    <>
      <PageSchema path="/visit-us" />
      <Visit />
    </>
  );
}
