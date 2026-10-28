import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Corporate from '../../components/Corporate';

export const metadata: Metadata = pageMeta('/corporate-events');

export default function Page() {
  return (
    <>
      <PageSchema path="/corporate-events" />
      <Corporate />
    </>
  );
}
