'use client';

import { cn } from '@/lib/utils';
import { CTASection, FeaturesStatus, HeroSection } from './components';

interface UnderConstructionProps {
  className?: string;
}

export default function UnderConstruction({ className }: UnderConstructionProps) {
  return (
    <div className={cn('flex items-center justify-center w-full', className)}>
      <main className='w-full'>
        <HeroSection />
        <FeaturesStatus />
        <CTASection />
      </main>
    </div>
  );
}