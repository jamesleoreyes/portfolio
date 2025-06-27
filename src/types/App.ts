interface UrlConfig {
  app: string;
  sitemap: string;
}

interface Meta {
  title: string;
  fullTitle?: string;
  description: string;
  siteName?: string;
  creator?: string;
}

export type { UrlConfig, Meta };