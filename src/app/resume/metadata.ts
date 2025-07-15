import type { Metadata } from "next";
import { assets, urlConfig } from "@/configs/app";
import type { Meta } from "@/types/App";

const meta: Meta = {
  title: 'Resume',
  description: 'Professional resume of James Reyes - Full-Stack Product Engineer with expertise in building scalable, maintainable software solutions. View experience, skills, projects, and achievements in modern web development.'
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'profile',
    url: `${urlConfig.app}/resume`,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: [assets.images.profile.me],
  },
  alternates: {
    canonical: `${urlConfig.app}/resume`,
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