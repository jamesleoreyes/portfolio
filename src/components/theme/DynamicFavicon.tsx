'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { assets } from '@/configs/app';

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(favicon => favicon.remove());
    const link = document.createElement('link');
    link.rel = 'icon';

    // Set the appropriate icon based on theme
    if (resolvedTheme === 'dark') {
      link.href = assets.branding.icon;
    } else {
      link.href = assets.branding.iconInverted;
    }

    // Add the new favicon to the document head
    document.head.appendChild(link);
  }, [resolvedTheme]);

  return null;
} 