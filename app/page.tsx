import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../lib/seo';
import Main from '../components/Main';

export const metadata: Metadata = pageMeta('/');

export default function Page() {
  return (
    <>
      <PageSchema path="/" />
      <Main />
    </>
  );
}
