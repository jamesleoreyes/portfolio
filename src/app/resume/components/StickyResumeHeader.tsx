'use client';

import ResumeActions from './ResumeActions';
import { useScrollPosition } from '@/hooks';

export default function StickyResumeHeader() {
  const isScrolled = useScrollPosition();

  return (
    <div className={`sticky top-[5.05rem] z-30 bg-background transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-none'}`}>
      <div className='mx-auto p-4'>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Resume</h1>
          <ResumeActions />
        </div>
      </div>
    </div>
  );
}