import type { Metadata } from 'next';
import { baseMeta, urlConfig } from '@configs/app';
import { projects } from '@/src/data/projects';
import type { Meta } from '@/src/types/app';

const meta: Meta = {
  title: `${projects['pokedex-cli'].title} - Project Case Study`,
  description: `${projects['pokedex-cli'].description} Built with ${projects['pokedex-cli'].techStack.slice(0, 3).map(tech => tech.name).join(', ')}. Explore the design decisions, technical challenges, and solutions behind this modern web application.`
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'article',
    url: `${urlConfig.app}/projects/pokedex-cli`,
    title: meta.title,
    description: meta.description,
    siteName: `${baseMeta.fullTitle}`,
    publishedTime: '2024-10-01T00:00:00.000Z',
    modifiedTime: '2025-01-01T00:00:00.000Z',
    authors: ['James Reyes'],
    tags: projects['pokedex-cli'].techStack.map(tech => tech.name),
    images: [
      {
        url: projects['pokedex-cli'].featuredImage.dark || projects['pokedex-cli'].featuredImage.default,
        width: 1200,
        height: 630,
        alt: `${projects['pokedex-cli'].title} - Screenshot`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [projects['pokedex-cli'].featuredImage.dark || projects['pokedex-cli'].featuredImage.default],
    creator: '@jamesleoreyes',
  },
  alternates: {
    canonical: `${urlConfig.app}/projects/pokedex-cli`,
  },
  keywords: [
    'portfolio website',
    'next.js',
    'react',
    'typescript',
    'tailwind css',
    'web development',
    'frontend development',
    'responsive design',
    'james reyes',
    'full-stack developer',
    ...projects['pokedex-cli'].techStack.map(tech => tech.name.toLowerCase()),
  ],
  other: {
    'article:author': 'James Reyes',
    'project:type': projects['pokedex-cli'].type,
    'project:status': projects['pokedex-cli'].status,
    'project:tech_stack': projects['pokedex-cli'].techStack.map(tech => tech.name).join(', '),
  },
};

export default metadata; 