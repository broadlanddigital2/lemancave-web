import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/saturday-party-packages-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/saturday-party-packages-norwich" />
      <Compare slug="saturday" />
    </>
  );
}
