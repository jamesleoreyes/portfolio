import type { Assets, Meta } from '@/src/types/app';
import { UrlConfig } from '@/src/types/app';

const urlConfig: UrlConfig = {
  /** 
   * The URL of the app.
   * 
   * @url
   * `https://jamesleoreyes.com` | `http://localhost:3000`
   */
  app: process.env.APP_URL ? `https://${process.env.APP_URL}` : 'http://localhost:3000',
  /** 
   * The URL of the sitemap.
   * 
   * @url
   * `https://jamesleoreyes.com/sitemap.xml` | `http://localhost:3000/sitemap.xml`
   */
  sitemap: process.env.SITEMAP_URL ? `https://${process.env.SITEMAP_URL}` : 'http://localhost:3000/sitemap.xml',
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
    favicon: '/branding/favicon.ico',
    icons: {
      appleTouch: '/branding/apple-touch-icon.png',
      '192': '/branding/icon-192.png',
      '512': '/branding/icon-512.png',
      maskable: '/branding/icon-maskable.png',
      transparent: '/branding/icon-transparent.svg',
      default: '/branding/icon.svg',
      inverted: '/branding/icon-inverted.svg',
    },
  },
  downloads: {
    resume: '/downloads/resume/James-Reyes-Resume.pdf',
  },
  images: {
    logos: {
      wide: '/images/logos/jlr.png',
    },
    profile: {
      meJpg: '/images/profile/me.jpg',
      meWebp: '/images/profile/me.webp',
    },
    screenshots: {
      default: {
        pokedexCli: [
          '/images/screenshots/default/pokedex-cli/cover.jpg',
        ],
      },
      light: {
        portfolio: [
          '/images/screenshots/light/portfolio/desktop-light-home.png',
          '/images/screenshots/light/portfolio/desktop-light-about.png',
          '/images/screenshots/light/portfolio/desktop-light-experience.png',
          '/images/screenshots/light/portfolio/desktop-light-projects.png',
          '/images/screenshots/light/portfolio/desktop-light-resume.png',
          '/images/screenshots/light/portfolio/desktop-light-contact.png',
        ],
        theReyesVault: [],
      },
      dark: {
        portfolio: [
          '/images/screenshots/dark/portfolio/desktop-dark-home.png',
          '/images/screenshots/dark/portfolio/desktop-dark-about.png',
          '/images/screenshots/dark/portfolio/desktop-dark-experience.png',
          '/images/screenshots/dark/portfolio/desktop-dark-projects.png',
          '/images/screenshots/dark/portfolio/desktop-dark-resume.png',
          '/images/screenshots/dark/portfolio/desktop-dark-contact.png',
        ],
        theReyesVault: [],
      },
    },
    og: '/images/og-image.png',
  }
}

export { urlConfig, baseMeta, assets };