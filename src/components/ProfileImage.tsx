'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { assets } from '@/configs/app';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  width: number;
  height: number;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export default function ProfileImage({
  width,
  height,
  className,
  alt = 'James Reyes — Professional Photo',
  priority = false,
}: ProfileImageProps) {
  const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);
  const [shouldUpgrade, setShouldUpgrade] = useState(false);

  // Progressive loading: WebP first, then upgrade to JPEG after LCP
  const webpSrc = assets.images.profile.meWebp;
  const jpegSrc = assets.images.profile.meJpg;
  const currentSrc = isHighQualityLoaded ? jpegSrc : webpSrc;

  const optimizedSizes = width <= 300
    ? '(max-width: 768px) 280px, 300px'
    : '(max-width: 768px) 350px, 400px';

  const triggerUpgrade = useCallback(() => {
    const delay = priority ? 150 : 300;

    setTimeout(() => {
      setShouldUpgrade(true);
    }, delay);
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
        setTimeout(() => {
          setIsHighQualityLoaded(true);
        }, 50);
      };

      img.onerror = () => setShouldUpgrade(false);

      img.src = jpegSrc;
    }
  }, [shouldUpgrade, jpegSrc, isHighQualityLoaded]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={optimizedSizes}
        className='shadow-2xl transition-opacity duration-300'
        draggable={false}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        fetchPriority={priority ? 'high' : 'auto'}
        quality={isHighQualityLoaded ? 85 : 75}
        key={currentSrc}
      />
    </div>
  );
}