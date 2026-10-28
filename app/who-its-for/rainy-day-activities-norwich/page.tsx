import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/who-its-for/rainy-day-activities-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/who-its-for/rainy-day-activities-norwich" />
      <Landing slug="tourists" />
    </>
  );
}
