import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../../lib/seo';
import Simulator from '../../../components/Simulator';

export const metadata: Metadata = pageMeta('/attractions/racing-simulator');

export default function Page() {
  return (
    <>
      <PageSchema path="/attractions/racing-simulator" />
      <Simulator />
    </>
  );
}
