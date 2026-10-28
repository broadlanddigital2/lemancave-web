import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { ROUTES } from '../lib/routes';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://lemancave.co.uk';

// No lastModified on site pages: the build time would stamp every page with the same date on each deploy, and
// Google ignores lastmod values that aren't accurate. Blog posts (added by the worker) keep their real dates.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(ROUTES)
    .filter((p) => p !== '/site-map' && p !== '/account')
    .map((path) => ({
      url: BASE + path,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : path.split('/').length <= 2 ? 0.8 : 0.6,
    }));
}
