import type { Metadata } from "next";
import { assets, baseMeta, urlConfig } from "@/configs/app";
import type { Meta } from "@/types/App";

const meta: Meta = {
  title: 'Resume',
  description: 'Professional resume of James Reyes - Full-Stack Product Engineer with expertise in building scalable, maintainable software solutions. View experience, skills, projects, and achievements in modern web development.'
}

const metadata: Metadata = {
  metadataBase: new URL(urlConfig.app),
  title: meta.title,
  description: meta.description,
  applicationName: baseMeta.fullTitle,
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
    type: 'profile',
    locale: 'en_US',
    url: `${urlConfig.app}/resume`,
    title: meta.title,
    description: meta.description,
    siteName: baseMeta.fullTitle,
    images: [
      {
        url: assets.images.og,
        width: 1200,
        height: 630,
        alt: `${meta.title} - ${baseMeta.fullTitle}`,
      },
      {
        url: assets.images.profile.me,
        width: 400,
        height: 400,
        alt: 'James Reyes - Professional Photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [assets.images.og],
    creator: '@jamesleoreyes',
  },
  appleWebApp: {
    capable: true,
    title: meta.title,
    statusBarStyle: 'default',
  },
  alternates: {
    canonical: `${urlConfig.app}/resume`,
  },
  other: {
    'profile:first_name': 'James',
    'profile:last_name': 'Reyes',
    'profile:username': 'jamesreyes',
  },
};

export default metadata; 