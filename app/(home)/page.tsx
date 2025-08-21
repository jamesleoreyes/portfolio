import { ProfileImage, SocialLinks } from '@/src/components';
import { lazy, Suspense } from 'react';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';

const QuickNavSection = lazy(() => import('./components/QuickNavSection'));

export default function Home() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center space-y-8 lg:space-y-0'>
        <ProfileImage
          width={400}
          height={400}
          priority={true}
          alt='Me in front of my desk'
        />
        <div className='space-y-5'>
          <HeroSection />
          <CTASection />

          <div className='mt-6 flex space-x-4 justify-center md:justify-start'>
            <SocialLinks />
          </div>

          <Suspense fallback={<div className='h-20' />}>
            <QuickNavSection />
          </Suspense>
        </div>
      </main>
    </div>
  );
}