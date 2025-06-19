'use client';

import { useEffect } from 'react';

export function DynamicViewport() {
  useEffect(() => {
    // Check if the app is running in standalone mode as a PWA
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://');

    // Get the existing viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');

    if (viewportMeta) {
      // Set userScalable based on PWA status
      const userScalable = isPWA ? 'no' : 'yes';
      const viewportContent = `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=${userScalable}, viewport-fit=cover`;

      viewportMeta.setAttribute('content', viewportContent);
    }
  }, []);

  return null;
} 