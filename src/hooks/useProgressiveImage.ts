import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const triggerUpgrade = () => {
      const delay = priority ? 150 : 300;
      setTimeout(() => setShouldUpgrade(true), delay);
    };

    if (document.readyState === 'complete') {
      triggerUpgrade();
    } else {
      window.addEventListener('load', triggerUpgrade);
      return () => window.removeEventListener('load', triggerUpgrade);
    }

    return undefined;
  }, [priority]);

  useEffect(() => {
    if (!shouldUpgrade || isHighQualityLoaded) return;

    const img = new window.Image();
    let cancelled = false;

    img.onload = () => {
      if (!cancelled) {
        img.decode().then(() => {
          if (!cancelled) setIsHighQualityLoaded(true);
        }).catch(() => {
          if (!cancelled) setIsHighQualityLoaded(true);
        });
      }
    };

    img.onerror = () => {
      console.warn('High-quality image failed to load');
      setShouldUpgrade(false);
    };

    img.src = highQualitySrc;

    return () => {
      cancelled = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [shouldUpgrade, highQualitySrc, isHighQualityLoaded]);

  return {
    currentSrc: isHighQualityLoaded ? highQualitySrc : lowQualitySrc,
    isHighQualityLoaded,
    quality: isHighQualityLoaded ? 85 : 75,
  };
};