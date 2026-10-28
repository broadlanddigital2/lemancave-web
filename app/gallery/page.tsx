import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Gallery from '../../components/Gallery';

export const metadata: Metadata = pageMeta('/gallery');

export default function Page() {
  return (
    <>
      <PageSchema path="/gallery" />
      <Gallery />
    </>
  );
}
