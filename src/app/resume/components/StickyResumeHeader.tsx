'use client';

import { useEffect, useRef, useState } from 'react';
import ResumeActions from './ResumeActions';

export default function StickyResumeHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsSticky(!entry.isIntersecting);
        }
      },
      {
        threshold: 0,
        rootMargin: '-64px 0px 0px 0px', // Account for top-16 (64px)
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element to detect when header should be sticky */}
      <div ref={headerRef} className="absolute top-0 h-px" />

      {/* Sticky Resume Header */}
      <div className="sticky top-16 z-30 pt-2 bg-background border-b border-foreground/10">
        <div className={`container mx-auto py-4 transition-all duration-300 ${isSticky ? 'px-4' : 'px-4 md:px-0'
          }`}>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Resume</h1>
            <ResumeActions />
          </div>
        </div>
      </div>
    </>
  );
}