import type { Metadata } from "next";
import { assets, urlConfig } from "@/configs/app";
import type { Meta } from "@/types/App";

const meta: Meta = {
  title: 'Contact',
  description: 'Get in touch with James Reyes - Full-Stack Product Engineer. Schedule a call, send an email, or connect through social media. Available for opportunities, collaborations, and networking.'
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'profile',
    url: `${urlConfig.app}/contact`,
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: assets.images.profile.me,
        width: 400,
        height: 400,
        alt: 'James Reyes - Professional Photo',
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: [assets.images.profile.me],
  },
  alternates: {
    canonical: `${urlConfig.app}/contact`,
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