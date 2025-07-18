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

interface Assets {
  branding: {
    /**
     * @url `/branding/favicon.ico`
     */
    favicon: string;
    icons: {
      /**
       * @url `/branding/apple-touch-icon.png`
       */
      appleTouch: string;
      /**
       * @url `/branding/icon-192.png`
       */
      '192': string;
      /**
       * @url `/branding/icon-512.png`
       */
      '512': string;
      /**
       * @url `/branding/icon-maskable.png`
       */
      maskable: string;
      /**
       * @url `/branding/icon-transparent.svg`
       */
      transparent: string;
      /**
       * @url `/branding/icon.svg`
       */
      default: string;
      /**
       * @url `/branding/icon-inverted.svg`
       */
      inverted: string;
    };
  };
  downloads: {
    /**
     * @url `/downloads/resume/James-Reyes-Resume.pdf`
     */
    resume: string;
  };
  images: {
    logos: {
      /**
       * @url `/images/logos/jlr.png`
       */
      wide: string;
    },
    profile: {
      /**
       * @url `/images/profile/me.jpg`
       */
      meJpg: string;
      /**
       * @url `/images/profile/me.webp`
       */
      meWebp: string;
    },
    screenshots: {
      light: {
        portfolio: string[];
        theReyesVault: string[];
      };
      dark: {
        portfolio: string[];
        theReyesVault: string[];
      };
    },
    /**
     * @url /images/og-image.png
     */
    og: string;
  };
}

export type { UrlConfig, Meta, Assets };