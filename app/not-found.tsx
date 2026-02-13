'use client';

import Link from 'next/link';
import { Button } from '@/src/components';
import { isPageDisabled } from '@/src/lib';
import { useGoBack } from '@/src/hooks';
import { ThemedLink } from '@/src/components/ui/themed-link';

export default function NotFound() {
  const { backUrl, handleGoBack } = useGoBack();

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
                Lost? It happens.
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className='max-w-md mx-auto'>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              We all get lost sometimes, and that&apos;s OK. This page doesn&apos;t exist, but there&apos;s plenty more to explore.
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
            onMouseEnter={() => console.log(backUrl)}
          >
            <Link href={backUrl} onClick={handleGoBack}>
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
            <ThemedLink
              href='/about'
              className='underline hover:text-foreground transition-colors'
              aria-label='Go to about page'
              title='Go to about page'
            >
              about
            </ThemedLink>
            {', '}
            {isPageDisabled('/experience') ? (
              <span className='text-muted-foreground/50 cursor-not-allowed'>
                experience
              </span>
            ) : (
              <ThemedLink
                href='/experience'
                className='underline hover:text-foreground transition-colors'
                aria-label='Go to experience page'
                title='Go to experience page'
              >
                experience
              </ThemedLink>
            )}
            {', or '}
            <ThemedLink
              href='/resume'
              className='underline hover:text-foreground transition-colors'
              aria-label='View my resume'
              title='View my resume'
            >
              resume
            </ThemedLink>
          </p>
        </div>
      </main>
    </div>
  );
}

