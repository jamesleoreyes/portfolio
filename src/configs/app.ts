import type { Meta } from '@/types/App';
import { UrlConfig } from '@/types/App';

const urlConfig: UrlConfig = {
  /** 
   * The URL of the app.
   * 
   * @url
   * `https://jamesleoreyes.com` | `http://localhost:3000`
   */
  app: process.env['APP_URL'] ? `https://${process.env['APP_URL']}` : 'http://localhost:3000',
  /** 
   * The URL of the sitemap.
   * 
   * @url
   * `https://jamesleoreyes.com/sitemap.xml` | `http://localhost:3000/sitemap.xml`
   */
  sitemap: process.env['SITEMAP_URL'] ? `https://${process.env['SITEMAP_URL']}` : 'http://localhost:3000/sitemap.xml',
}

const baseMeta: Meta = {
  title: 'James Reyes',
  fullTitle: 'James Reyes | Full-Stack Product Engineer',
  description: 'Full-Stack Product Engineer building useful, purposeful apps and learning everything along the way.',
  siteName: 'James Reyes',
  creator: 'James Reyes'
}

export { urlConfig, baseMeta };