import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Landing from '../../../components/Landing';

export const metadata: Metadata = pageMeta('/who-its-for/things-to-do-in-norwich-for-adults');

export default function Page() {
  return (
    <>
      <PageSchema path="/who-its-for/things-to-do-in-norwich-for-adults" />
      <Landing slug="locals" />
    </>
  );
}
