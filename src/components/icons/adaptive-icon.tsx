'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AdaptiveIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  draggable?: boolean;
}

export default function AdaptiveIcon({
  src,
  alt,
  width,
  height,
  className,
  draggable = false,
}: AdaptiveIconProps) {
  return (
    <div className={cn('adaptive-icon transition-colors duration-200', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={draggable}
        priority={true}
        className='transition-colors duration-200'
      />
    </div>
  );
}