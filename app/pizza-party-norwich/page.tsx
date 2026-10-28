import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Food from '../../components/Food';

export const metadata: Metadata = pageMeta('/pizza-party-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/pizza-party-norwich" />
      <Food />
    </>
  );
}
