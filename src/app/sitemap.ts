import type { MetadataRoute } from 'next';
import { urlConfig } from '@/configs/app';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = urlConfig.app;
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}