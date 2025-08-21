import type { Metadata } from 'next';
import { assets, baseMeta, urlConfig } from '@configs/app';
import type { Meta } from '@_types/App';

const meta: Meta = {
  title: 'Experience',
  description: 'Explore the professional journey of James Reyes, from FedEx delivery driver to Full-Stack Product Engineer. Discover key projects, achievements, and technical evolution across internship, full-time role, and entrepreneurial ventures.'
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'profile',
    url: `${urlConfig.app}/experience`,
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
    canonical: `${urlConfig.app}/experience`,
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