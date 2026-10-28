import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Scalextric from '../../../components/Scalextric';

export const metadata: Metadata = pageMeta('/attractions/digital-scalextric');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/digital-scalextric" />
      <Scalextric />
    </>
  );
}
