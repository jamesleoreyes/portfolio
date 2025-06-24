import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio | James Reyes',
    short_name: 'James Reyes',
    description: 'Full Stack Product Engineer building useful, purposeful apps and learning everything along the way.',
    start_url: '/',
    scope: '/',
    lang: 'en-US',
    categories: [
      'portfolio',
      'developer',
      'software engineer',
      'web developer',
      'mobile developer',
      'full stack developer',
      'frontend developer',
      'backend developer',
      'software developer',
      'software engineer',
      'web developer',
      'mobile developer',
      'full stack developer',
      'frontend developer',
      'backend developer',
      'software developer'
    ],
    background_color: '#f1efe7',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}