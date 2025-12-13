'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export function DynamicThemeColor() {
  const { resolvedTheme } = useTheme();
  const metaRef = useRef<HTMLMetaElement | null>(null);

  useEffect(() => {
    // Only proceed if we have a resolved theme
    if (!resolvedTheme) return;

    // Remove our previously created meta tag if it exists
    if (metaRef.current && metaRef.current.parentNode) {
      metaRef.current.parentNode.removeChild(metaRef.current);
      metaRef.current = null;
    }

    // Create new meta tag
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = resolvedTheme === 'dark' ? '#0a0a0a' : '#f1efe7';

    // Add to document head and store reference
    document.head.appendChild(meta);
    metaRef.current = meta;

    // Cleanup function
    return () => {
      if (metaRef.current && metaRef.current.parentNode) {
        try {
          metaRef.current.parentNode.removeChild(metaRef.current);
        } catch (error) {
          // Ignore errors during cleanup - element might already be removed
          console.warn('DynamicThemeColor cleanup error:', error);
        }
        metaRef.current = null;
      }
    };
  }, [resolvedTheme]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (metaRef.current && metaRef.current.parentNode) {
        try {
          metaRef.current.parentNode.removeChild(metaRef.current);
        } catch (error) {
          // Ignore errors during cleanup
          console.warn('DynamicThemeColor unmount cleanup error:', error);
        }
      }
    };
  }, []);

  return null;
}