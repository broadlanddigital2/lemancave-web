import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/party-venues');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/party-venues" />
      <Compare slug="partyvenues" />
    </>
  );
}
