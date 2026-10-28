import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Advertise from '../../components/Advertise';

export const metadata: Metadata = pageMeta('/advertise');

export default function Page() {
  return (
    <>
      <PageSchema path="/advertise" />
      <Advertise />
    </>
  );
}
