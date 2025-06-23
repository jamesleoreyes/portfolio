'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function DynamicThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const existingThemeColor = document.querySelectorAll('meta[name="theme-color"]');
    if (existingThemeColor) {
      existingThemeColor.forEach(meta => meta.remove());
    }

    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = resolvedTheme === 'dark' ? '#0a0a0a' : '#f1efe7';

    document.head.appendChild(meta);
  }, [resolvedTheme]);

  return null;
}