// Page SEO (Oct 2026). Titles and meta descriptions live in seo/meta.json and each page's target keywords in
// seo/keywords.json (the same keywords are in the CRM: Marketing → SEO optimiser → Page scores, site "Le Man Cave").
// Every page's metadata and its structured data (WebPage + BreadcrumbList) come from here.
import type { Metadata } from 'next';
import META from '../seo/meta.json';

type Meta = { title: string; description: string };
const PAGES = META as Record<string, Meta>;
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://lemancave.co.uk';
const BRAND = 'Le Man Cave Norwich';
// Default share image (1200×800) until pages have their own photography.
const SHARE = { url: '/images/4dd1a9368ac845d9dff93d9afd206327.webp', width: 1200, height: 800, alt: 'Inside Le Man Cave, Norwich' };

const fullTitle = (path: string, m: Meta) => (path === '/' ? m.title + ' | Le Man Cave' : m.title + ' | ' + BRAND);

export function pageMeta(path: string): Metadata {
  const m = PAGES[path];
  if (!m) throw new Error('No SEO entry in seo/meta.json for ' + path);
  const title = fullTitle(path, m);
  return {
    // The home page is the layout's own segment, so the title template doesn't apply there: give it in full.
    title: path === '/' ? { absolute: title } : m.title,
    description: m.description,
    alternates: { canonical: path },
    openGraph: { title, description: m.description, url: path, siteName: 'Le Man Cave', locale: 'en_GB', type: 'website', images: [SHARE] },
    twitter: { card: 'summary_large_image', title, description: m.description, images: [SHARE.url] },
  };
}

// Breadcrumb names: the part of each page's title before the colon ("Party Venue Norwich: Exclusive Venue Hire" → "Party Venue Norwich").
// /who-its-for and /compare are URL folders, not pages, so their breadcrumb step points at the hub the visible
// breadcrumb uses instead (a link to a folder would be a 404 in Search Console).
const SECTION: Record<string, { name: string; path: string }> = {
  '/who-its-for': { name: 'Parties & Events', path: '/parties-and-events-norwich' },
  '/compare': { name: 'Guides', path: '/guides' },
};
const crumbName = (path: string) => (PAGES[path] ? PAGES[path].title.split(':')[0].trim() : '');

export function PageSchema({ path }: { path: string }) {
  const m = PAGES[path];
  if (!m) return null;
  const url = SITE + (path === '/' ? '/' : path);
  const parts = path.split('/').filter(Boolean);
  const crumbs = [{ name: 'Home', path: '/' }];
  parts.forEach((_, i) => {
    const p = '/' + parts.slice(0, i + 1).join('/');
    if (SECTION[p]) { crumbs.push(SECTION[p]); return; }
    // Only real pages become breadcrumb steps.
    const name = crumbName(p);
    if (name) crumbs.push({ name, path: p });
  });
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: fullTitle(path, m),
        description: m.description,
        inLanguage: 'en-GB',
        isPartOf: { '@type': 'WebSite', name: 'Le Man Cave', url: SITE },
        about: { '@type': 'EntertainmentBusiness', name: 'Le Man Cave', url: SITE },
        primaryImageOfPage: SITE + SHARE.url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE + (c.path === '/' ? '/' : c.path) })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
