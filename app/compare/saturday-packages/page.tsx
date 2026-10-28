import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Compare from '../../../components/Compare';

export const metadata: Metadata = pageMeta('/compare/saturday-packages');

export default function Page() {
  return (
    <>
      <PageSchema path="/compare/saturday-packages" />
      <Compare slug="saturday" />
    </>
  );
}
