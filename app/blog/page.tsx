import type { Metadata } from 'next';
import { pageMeta, PageSchema } from '../../lib/seo';
import BlogShell from '../../components/BlogShell';

export const metadata: Metadata = pageMeta('/blog');

// The blog list and posts are filled in by the worker at request time (worker/crm-blog.js) from the CRM's
// approved posts (CRM: Marketing → Blog posts). This page is the shell: header, footer and an empty slot.
export default function Page() {
  return (
    <>
      <PageSchema path="/blog" />
      <BlogShell />
    </>
  );
}
