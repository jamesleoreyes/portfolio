'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function DynamicThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Remove existing theme-color meta tag
    const existingThemeColor = document.querySelector(`meta[name='theme-color']`);
    if (existingThemeColor) {
      existingThemeColor.remove();
    }

    // Create new theme-color meta tag
    const meta = document.createElement('meta');
    meta.name = 'theme-color';

    // Set color based on theme
    if (resolvedTheme === 'dark') {
      meta.content = '#0a0a0a';
    } else {
      meta.content = '#f1efe7';
    }

    document.head.appendChild(meta);
  }, [resolvedTheme]);

  return null;
} 