import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Landing from '../../components/Landing';

export const metadata: Metadata = pageMeta('/group-nights-out');

export default function Page() {
  return (
    <>
      <PageSchema path="/group-nights-out" />
      <Landing slug="adultgroups" />
    </>
  );
}
