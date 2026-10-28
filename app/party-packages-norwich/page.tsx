import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Pricing from '../../components/Pricing';

export const metadata: Metadata = pageMeta('/party-packages-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/party-packages-norwich" />
      <Pricing />
    </>
  );
}
