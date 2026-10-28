import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Visit from '../../components/Visit';

export const metadata: Metadata = pageMeta('/contact-leman-cave-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/contact-leman-cave-norwich" />
      <Visit />
    </>
  );
}
