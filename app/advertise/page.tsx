import type { Metadata } from 'next';
import Advertise from '../../components/Advertise';

export const metadata: Metadata = {
  title: 'Advertise at LeMan Cave',
  description: 'Advertise your business on the digital signage screens around LeMan Cave in Norwich. 3, 6 and 12-month packages; upload your artwork or let us create it.',
  alternates: { canonical: '/advertise' },
  openGraph: { title: 'Advertise at LeMan Cave | LeMan Cave Norwich', description: 'Advertise your business on the digital signage screens around LeMan Cave in Norwich.', url: '/advertise' },
};

export default function Page() {
  return <Advertise />;
}
