import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = pageMeta('/leman-cave-photos');

export default function Page() {
  return (
    <>
      <PageSchema path="/leman-cave-photos" />
      <Gallery />
    </>
  );
}
