import type { MetadataRoute } from 'next';
import { urlConfig } from '@/configs/app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    host: urlConfig.app,
    sitemap: urlConfig.sitemap,
  };
}