import { assets, baseMeta } from '@configs/app'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: baseMeta.fullTitle,
    short_name: 'James Reyes',
    description: baseMeta.description,
    start_url: '/',
    scope: '/',
    lang: 'en-US',
    categories: [
      'portfolio',
      'developer',
      'software engineer',
      'full stack product engineer',
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
        src: assets.branding.icons['192'],
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: assets.branding.icons['512'],
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: assets.branding.icons.maskable,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}