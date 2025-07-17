import { useState, useEffect, useCallback } from 'react';

interface UseProgressiveImageOptions {
  lowQualitySrc: string;
  highQualitySrc: string;
  priority?: boolean;
}

interface UseProgressiveImageReturn {
  currentSrc: string;
  isHighQualityLoaded: boolean;
  quality: number;
}

export function useProgressiveImage({
  lowQualitySrc,
  highQualitySrc,
  priority = false
}: UseProgressiveImageOptions): UseProgressiveImageReturn {
  const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);
  const [shouldUpgrade, setShouldUpgrade] = useState(false);

  const triggerUpgrade = useCallback(() => {
    const delay = priority ? 150 : 300;
    setTimeout(() => setShouldUpgrade(true), delay);
  }, [priority]);

  useEffect(() => {
    const checkReadiness = () => {
      const isReady =
        document.readyState === 'complete' ||
        (document.readyState === 'interactive' && performance.now() > 1000);

      if (isReady) {
        triggerUpgrade();
      }
    };

    checkReadiness();

    if (document.readyState !== 'complete') {
      window.addEventListener('load', triggerUpgrade);
      document.addEventListener('DOMContentLoaded', checkReadiness);

      return () => {
        window.removeEventListener('load', triggerUpgrade);
        document.removeEventListener('DOMContentLoaded', checkReadiness);
      };
    }

    return undefined;
  }, [triggerUpgrade]);

  useEffect(() => {
    if (shouldUpgrade && !isHighQualityLoaded) {
      const img = new window.Image();

      img.onload = () => {
        setTimeout(() => setIsHighQualityLoaded(true), 50);
      };

      img.onerror = () => setShouldUpgrade(false);

      img.src = highQualitySrc;
    }
  }, [shouldUpgrade, highQualitySrc, isHighQualityLoaded]);

  return {
    currentSrc: isHighQualityLoaded ? highQualitySrc : lowQualitySrc,
    isHighQualityLoaded,
    quality: isHighQualityLoaded ? 85 : 75,
  };
}