import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Hub from '../../components/Hub';

export const metadata: Metadata = pageMeta('/attractions');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions" />
      <Hub slug="attractions" />
    </>
  );
}
