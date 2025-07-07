import type { Metadata } from "next";
import { baseMeta, urlConfig } from "@/configs/app";
import type { Meta } from "@/types/App";

const meta: Meta = {
  title: 'About Me',
  description: 'Learn more about James Reyes - Full Stack Product Engineer passionate about creating scalable, maintainable software solutions. Discover my technical skills, approach to development, and professional values.'
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
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
    url: `${urlConfig.app}/about`,
    title: meta.title,
    description: meta.description,
    siteName: baseMeta.fullTitle,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: baseMeta.fullTitle,
      },
      {
        url: '/media/me.jpg',
        width: 300,
        height: 300,
        alt: baseMeta.fullTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: ['/og-image.png'],
    creator: '@jamesleoreyes',
  },
  alternates: {
    canonical: `${urlConfig.app}/about`,
  },
};

export default metadata;