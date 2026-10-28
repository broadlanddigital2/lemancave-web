import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Christmas from '../../components/Christmas';

export const metadata: Metadata = pageMeta('/christmas-parties');

export default function Page() {
  return (
    <>
      <PageSchema path="/christmas-parties" />
      <Christmas />
    </>
  );
}
