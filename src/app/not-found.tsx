import Link from 'next/link';
import { Button } from '@/components';

export default function NotFound() {
  return (
    <div className='min-h-dvh flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto text-center space-y-8'>
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
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button asChild size='lg' className='min-w-[140px] w-full sm:w-auto'>
            <Link href='/'>
              Go Home
            </Link>
          </Button>

          <Button asChild size='lg' className='min-w-[140px] w-full sm:w-auto'>
            <Link href='/projects'>
              View Projects
            </Link>
          </Button>

          <Button asChild size='lg' className='min-w-[140px] w-full sm:w-auto'>
            <Link href='/contact'>
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Quick Navigation Hint */}
        <div className='text-sm text-muted-foreground'>
          <p>
            Or try one of these pages:{' '}
            <Link href='/about' className='underline hover:text-foreground transition-colors'>
              about
            </Link>
            {', '}
            <Link href='/experience' className='underline hover:text-foreground transition-colors'>
              experience
            </Link>
            {', or '}
            <Link href='/resume' className='underline hover:text-foreground transition-colors'>
              resume
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

