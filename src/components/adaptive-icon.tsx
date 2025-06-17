'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";

interface AdaptiveIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  draggable?: boolean;
}

export function AdaptiveIcon({
  src,
  alt,
  width,
  height,
  className,
  draggable = false,
}: AdaptiveIconProps) {
  return (
    <div className={cn('adaptive-icon transition-all duration-200', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={draggable}
        className="transition-all duration-200"
      />
    </div>
  );
}