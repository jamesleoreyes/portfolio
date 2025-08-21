import type { Metadata } from 'next';
import { baseMeta, urlConfig } from '@configs/app';
import { projects } from '@/src/data/projects';
import type { Meta } from '@_types/App';

const meta: Meta = {
  title: `${projects.portfolio.title} - Project Case Study`,
  description: `${projects.portfolio.description} Built with ${projects.portfolio.techStack.slice(0, 3).map(tech => tech.name).join(', ')}. Explore the design decisions, technical challenges, and solutions behind this modern web application.`
}

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'article',
    url: `${urlConfig.app}/projects/portfolio`,
    title: meta.title,
    description: meta.description,
    siteName: `${baseMeta.fullTitle}`,
    publishedTime: '2024-10-01T00:00:00.000Z',
    modifiedTime: '2025-01-01T00:00:00.000Z',
    authors: ['James Reyes'],
    tags: projects.portfolio.techStack.map(tech => tech.name),
    images: [
      {
        url: projects.portfolio.featuredImage.dark || projects.portfolio.featuredImage.default,
        width: 1200,
        height: 630,
        alt: `${projects.portfolio.title} - Screenshot`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: [projects.portfolio.featuredImage.dark || projects.portfolio.featuredImage.default],
    creator: '@jamesleoreyes',
  },
  alternates: {
    canonical: `${urlConfig.app}/projects/portfolio`,
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
    ...projects.portfolio.techStack.map(tech => tech.name.toLowerCase()),
  ],
  other: {
    'article:author': 'James Reyes',
    'project:type': projects.portfolio.type,
    'project:status': projects.portfolio.status,
    'project:tech_stack': projects.portfolio.techStack.map(tech => tech.name).join(', '),
  },
};

export default metadata; 