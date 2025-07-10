'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components';
import usePageDisabled from '@/hooks/usePageDisabled';

export default function NotFound() {
  const [backUrl, setBackUrl] = useState<string>('/');
  const isPageDisabled = (href: string) => usePageDisabled(href);

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && new URL(referrer).origin === window.location.origin) {
      setBackUrl(new URL(referrer).pathname);
    }
  }, []);

  return (
    <div className='max-w-4xl flex items-center justify-center px-4 py-8'>
      <main className='mx-auto text-center space-y-8'>
        {/* Error Section */}
        <div className='space-y-6 flex flex-col items-center'>
          <div className='text-center'>
            <div className='space-y-1'>
              <h1 className='text-6xl sm:text-7xl font-bold tracking-tight text-foreground'>
                404
              </h1>

              <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight text-foreground'>
                Page Not Found
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className='max-w-md mx-auto'>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button
            asChild
            size='lg'
            className='min-w-[140px] w-full sm:w-auto'
            aria-label='Go back to previous page'
            title='Go back to previous page'
          >
            <Link href={backUrl}>
              Go Back
            </Link>
          </Button>

          {isPageDisabled('/projects') ? (
            <Button
              size='lg'
              className='w-full sm:w-auto'
              disabled={true}
              aria-label='Projects page (coming soon)'
              title='Projects page (coming soon)'
            >
              View My Projects
            </Button>
          ) : (
            <Button
              asChild
              size='lg'
              className='min-w-[140px] w-full sm:w-auto'
              aria-label='View my projects'
              title='View my projects'
            >
              <Link href='/projects'>
                View Projects
              </Link>
            </Button>
          )}

          <Button
            asChild
            size='lg'
            className='min-w-[140px] w-full sm:w-auto'
            aria-label='Contact me'
            title='Contact me'
          >
            <Link href='/contact'>
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Quick Navigation Hint */}
        <div className='text-sm text-muted-foreground'>
          <p>
            Or try one of these pages:{' '}
            <Link
              href='/about'
              className='underline hover:text-foreground transition-colors'
              aria-label='Go to about page'
              title='Go to about page'
            >
              about
            </Link>
            {', '}
            {isPageDisabled('/experience') ? (
              <span className='text-muted-foreground/50 cursor-not-allowed'>
                experience
              </span>
            ) : (
              <Link
                href='/experience'
                className='underline hover:text-foreground transition-colors'
                aria-label='Go to experience page'
                title='Go to experience page'
              >
                experience
              </Link>
            )}
            {', or '}
            <Link
              href='/resume'
              className='underline hover:text-foreground transition-colors'
              aria-label='View my resume'
              title='View my resume'
            >
              resume
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

