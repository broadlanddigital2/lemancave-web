import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { ROUTES } from '../lib/routes';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://lemancave.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.values(ROUTES)
    .filter((p) => p !== '/site-map' && p !== '/account')
    .map((path) => ({
      url: BASE + path,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : path.split('/').length <= 2 ? 0.8 : 0.6,
    }));
}
