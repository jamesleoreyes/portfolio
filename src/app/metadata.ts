import type { Metadata } from "next";
import { assets, baseMeta, urlConfig } from "@/configs/app";

const metadata: Metadata = {
  metadataBase: new URL(urlConfig.app),
  title: {
    default: `${baseMeta.fullTitle}`,
    template: `%s | ${baseMeta.siteName}`,
  },
  description: baseMeta.description,
  applicationName: `${baseMeta.fullTitle}`,
  authors: [{ name: baseMeta.creator, url: urlConfig.app }],
  creator: baseMeta.creator,
  publisher: baseMeta.creator,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: urlConfig.app,
    title: {
      default: `${baseMeta.fullTitle}`,
      template: `%s | ${baseMeta.siteName}`,
    },
    description: baseMeta.description,
    siteName: `${baseMeta.fullTitle}`,
    images: [
      {
        url: assets.images.og,
        width: 1200,
        height: 630,
        alt: `${baseMeta.fullTitle}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${baseMeta.fullTitle}`,
      template: `%s | ${baseMeta.siteName}`,
    },
    description: baseMeta.description,
    images: [assets.images.og],
    creator: '@jamesleoreyes',
  },
  appleWebApp: {
    capable: true,
    title: baseMeta.title,
    statusBarStyle: 'default',
    startupImage: assets.branding.appleTouchIcon
  },
  alternates: {
    canonical: urlConfig.app,
  },
  icons: {
    icon: [
      { url: assets.branding.favicon, sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: assets.branding.appleTouchIcon, sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default metadata;