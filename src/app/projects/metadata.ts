import type { Metadata } from "next";
import { assets, baseMeta, urlConfig } from "@/configs/app";
import type { Meta } from "@/types/App";

const meta: Meta = {
  title: 'Projects',
  description: 'Explore the projects and applications built by James Reyes — Full-Stack Product Engineer. From side experiments to production applications, discover the creative solutions and technical innovations. Currently under development with exciting features coming soon!'
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
        url: assets.images.profile.me,
        width: 400,
        height: 400,
        alt: 'James Reyes — Professional Photo',
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: [assets.images.profile.me],
  },
  alternates: {
    canonical: `${urlConfig.app}/projects`,
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