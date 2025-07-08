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
     * @url `/branding/apple-touch-icon.png`
     */
    appleTouchIcon: string;
    /**
     * @url `/branding/favicon.ico`
     */
    favicon: string;
    /**
     * @url `/branding/icon-192.png`
     */
    icon192: string;
    /**
     * @url `/branding/icon-512.png`
     */
    icon512: string;
    /**
     * @url `/branding/icon-maskable.png`
     */
    iconMaskable: string;
    /**
     * @url `/branding/icon-transparent.svg`
     */
    iconTransparent: string;
    /**
     * @url `/branding/icon.svg`
     */
    icon: string;
    /**
     * @url `/branding/icon-inverted.svg`
     */
    iconInverted: string;
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
      me: string;
    },
    /**
     * @url /images/og-image.png
     */
    og: string;
  };
}

export type { UrlConfig, Meta, Assets };