import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Scalextric from '../../../components/Scalextric';

export const metadata: Metadata = pageMeta('/attractions/scalextric-track-norwich');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/scalextric-track-norwich" />
      <Scalextric />
    </>
  );
}
