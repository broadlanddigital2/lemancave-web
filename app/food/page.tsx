import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Food from '../../components/Food';

export const metadata: Metadata = pageMeta('/food');

export default function Page() {
  return (
    <>
      <PageSchema path="/food" />
      <Food />
    </>
  );
}
