'use client';

import Image from 'next/image';
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
  const optimizedSizes = width <= 300
    ? '(max-width: 768px) 280px, 300px'
    : '(max-width: 768px) 350px, 400px';

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={assets.images.profile.me}
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
        quality={85}
      />
    </div>
  );
}