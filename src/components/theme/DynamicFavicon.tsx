'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { assets } from '@/configs/app';

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => {
    // Only update if theme actually changed
    if (!resolvedTheme || resolvedTheme === currentTheme) return;

    const iconUrl = resolvedTheme === 'dark' ? assets.branding.icons.default : assets.branding.icons.inverted;

    // Find existing dynamic favicon or create one
    let favicon = document.querySelector('link[data-dynamic-favicon]') as HTMLLinkElement;

    if (!favicon) {
      // Remove any existing SVG favicons first (only on first run)
      const existingSvg = document.querySelectorAll('link[rel*="icon"][type="image/svg+xml"]');
      existingSvg.forEach(el => el.remove());

      // Create new dynamic favicon
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.setAttribute('data-dynamic-favicon', 'true');
      document.head.appendChild(favicon);
    }

    // Update href
    favicon.href = iconUrl;
    setCurrentTheme(resolvedTheme);

  }, [resolvedTheme, currentTheme]);

  return null;
} 