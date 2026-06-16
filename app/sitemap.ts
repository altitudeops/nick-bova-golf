import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/coaching', '/reviews', '/contact'];
  return routes.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8,
  }));
}
