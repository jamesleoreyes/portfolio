import type { Metadata } from 'next';
import { assets, baseMeta, urlConfig } from '@configs/app';
import type { Meta } from '@_types/App';

const meta: Meta = {
  title: 'About Me',
  description: 'My journey from childhood coding curiosity to dead-end jobs, music obsession, and finally finding my calling as a Full-Stack Product Engineer. The winding path that led me here.'
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'profile',
    url: `${urlConfig.app}/about`,
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
    canonical: `${urlConfig.app}/about`,
  },
  other: {
    'profile:first_name': 'James',
    'profile:last_name': 'Reyes',
    'profile:abbreviation': 'JLR',
    'profile:email': 'jamesleoreyes@gmail.com',
    'profile:username': 'jamesleoreyes',
  },
};

export default metadata;