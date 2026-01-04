import type { Metadata } from 'next';
import { assets, baseMeta, urlConfig } from '@configs/app';
import type { Meta } from '@/src/types/app';

const meta: Meta = {
  title: 'Projects',
  description: 'Explore the projects and applications built by James Reyes — Full-Stack Product Engineer. From side experiments to production applications, discover the creative solutions and technical innovations.'
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'website',
    url: `${urlConfig.app}/projects`,
    title: meta.title,
    description: meta.description,
    siteName: `${baseMeta.fullTitle}`,
    images: [
      {
        url: assets.images.profile.meWebp,
        width: 400,
        height: 400,
        alt: 'James Reyes — Professional Photo',
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: [assets.images.profile.meWebp],
  },
  alternates: {
    canonical: `${urlConfig.app}/projects`,
  },
  other: {
    'profile:first_name': 'James',
    'profile:last_name': 'Reyes',
    'profile:abbreviation': 'JLR',
    'profile:email': 'me@jamesleoreyes.com',
    'profile:username': 'jamesleoreyes',
  },
};

export default metadata; 