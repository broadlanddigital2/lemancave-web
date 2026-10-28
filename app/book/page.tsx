import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import Book from '../../components/Book';

export const metadata: Metadata = pageMeta('/book');

export default function Page() {
  return (
    <>
      <PageSchema path="/book" />
      <Book />
    </>
  );
}
