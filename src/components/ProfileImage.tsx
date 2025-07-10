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
  sizes?: string;
}

export default function ProfileImage({
  width,
  height,
  className,
  alt = 'James Reyes - Professional Photo',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ProfileImageProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={assets.images.profile.me}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className='shadow-2xl transition-opacity duration-300'
        draggable={false}
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
} 