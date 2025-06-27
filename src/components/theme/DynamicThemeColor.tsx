'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function DynamicThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const existingThemeColor = document.querySelector(`meta[name='theme-color']`);
    if (existingThemeColor) {
      existingThemeColor.remove();
    }

    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = resolvedTheme === 'dark' ? '#0a0a0a' : '#f1efe7';

    document.head.appendChild(meta);
  }, [resolvedTheme]);

  return null;
}