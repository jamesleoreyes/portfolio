import type { Assets, Meta } from '@/types/App';
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

const assets: Assets = {
  branding: {
    appleTouchIcon: '/branding/apple-touch-icon.png',
    favicon: '/branding/favicon.ico',
    icon192: '/branding/icon-192.png',
    icon512: '/branding/icon-512.png',
    iconMaskable: '/branding/icon-maskable.png',
    iconTransparent: '/branding/icon-transparent.svg',
    icon: '/branding/icon.svg',
    iconInverted: '/branding/icon-inverted.svg',
  },
  downloads: {
    resume: '/downloads/resume/James-Reyes-Resume.pdf',
  },
  images: {
    logos: {
      wide: '/images/logos/jlr.png',
    },
    profile: {
      me: '/images/profile/me.jpg',
    },
    screenshots: {
      portfolioDesktop: {
        light: '/images/screenshots/portfolio-desktop-light.png',
        dark: '/images/screenshots/portfolio-desktop-dark.png',
      },
    },
    og: '/images/og-image.png',
  }
}

export { urlConfig, baseMeta, assets };