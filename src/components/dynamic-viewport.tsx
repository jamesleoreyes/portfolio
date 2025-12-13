'use client';

import { useEffect } from 'react';

export function DynamicViewport() {
  useEffect(() => {
    // Check if the app is running in standalone mode as a PWA
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
      document.referrer.includes('android-app://');

    // Get the existing viewport meta tag
    const viewportMeta = document.querySelector(`meta[name='viewport']`);
    let originalContent = '';

    if (viewportMeta) {
      // Store original content for cleanup
      originalContent = viewportMeta.getAttribute('content') || '';

      // Set userScalable based on PWA status
      const userScalable = isPWA ? 'no' : 'yes';
      const viewportContent = `width=device-width, initial-scale=1, maximum-scale=5, user-scalable=${userScalable}, viewport-fit=cover`;

      viewportMeta.setAttribute('content', viewportContent);
    }

    // Add data attribute to body for PWA detection in CSS
    const originalPwaData = document.body.dataset['pwa'];
    document.body.dataset['pwa'] = isPWA ? 'true' : 'false';

    // Cleanup function to restore original values
    return () => {
      try {
        if (viewportMeta && originalContent) {
          viewportMeta.setAttribute('content', originalContent);
        }
        if (originalPwaData !== undefined) {
          document.body.dataset['pwa'] = originalPwaData;
        } else {
          delete document.body.dataset['pwa'];
        }
      } catch (error) {
        // Ignore cleanup errors
        console.warn('DynamicViewport cleanup error:', error);
      }
    };
  }, []);

  return null;
} 