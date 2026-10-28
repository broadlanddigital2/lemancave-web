import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Corporate from '../../components/Corporate';

export const metadata: Metadata = pageMeta('/corporate-events-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/corporate-events-norwich" />
      <Corporate />
    </>
  );
}
