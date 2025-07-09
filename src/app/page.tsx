import Link from 'next/link';
import { Button, SocialLinks, WordRotate } from '@/components';
import { nav } from '@/configs/nav';
import ProfileImage from '@/components/ProfileImage';

const words = [
  'Full-Stack Product Engineer',
  'UX-Driven Problem Solver',
  'Cross-Functional Translator',
  'Lifelong Learner',
  'Insatiably Curious',
  'Open for Work',
];

export default function Home() {
  // Helper function to check if a page is disabled
  const isPageDisabled = (href: string) => {
    const page = nav.find(p => p.href === href);
    return page?.disabled || false;
  };

  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center space-y-8 lg:space-y-0'>
        <ProfileImage
          width={400}
          height={400}
          priority={true}
          sizes='(max-width: 768px) 90vw, (max-width: 1200px) 400px, 400px'
          alt='Me in front of my desk'
        />
        <div className='space-y-5'>
          {/* Hero Section */}
          <div className='space-y-6 flex flex-col items-start'>
            <div className='text-left'>
              <div className='space-y-1'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight'>
                  James Reyes
                </h1>

                <div className='text-xl sm:text-2xl text-muted-foreground font-medium'>
                  <WordRotate
                    words={words}
                    duration={5000}
                    motionProps={{
                      initial: { opacity: 0, y: -50 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 50 },
                    }}
                    className='text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-muted-foreground'
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className='max-w-2xl mx-auto space-y-4 text-left'>
              <p className='text-lg text-primary leading-relaxed'>
                Passionate about creating scalable, maintainable software solutions.
                I specialize in modern web technologies and understand the importance of simplicity.
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-start items-start'>
            {isPageDisabled('/about') ? (
              <Button
                size='lg'
                className='min-w-[140px] w-full sm:w-auto'
                disabled={true}
                aria-label='About page (coming soon)'
                title='About page (coming soon)'
              >
                About Me
              </Button>
            ) : (
              <Button
                asChild
                size='lg'
                className='min-w-[140px] w-full sm:w-auto'
                aria-label='Go to About page'
                title='Go to About page'
              >
                <Link href='/about'>
                  About Me
                </Link>
              </Button>
            )}

            {isPageDisabled('/projects') ? (
              <Button
                size='lg'
                className='min-w-[140px] w-full sm:w-auto'
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
                  View My Projects
                </Link>
              </Button>
            )}

            {isPageDisabled('/blog') ? (
              <Button
                size='lg'
                className='min-w-[140px] w-full sm:w-auto'
                disabled={true}
                aria-label='Blog page (coming soon)'
                title='Blog page (coming soon)'
              >
                My Blog
              </Button>
            ) : (
              <Button
                asChild
                size='lg'
                className='min-w-[140px] w-full sm:w-auto'
                aria-label='Go to my personal blog'
                title='Go to my personal blog'
              >
                <Link href='/blog'>
                  My Blog
                </Link>
              </Button>
            )}
          </div>

          {/* Social Links */}
          <div className='mt-6 flex space-x-4 justify-start'>
            <SocialLinks />
          </div>

          {/* Quick Navigation Hint */}
          <div className='text-sm text-muted-foreground text-left'>
            <p>
              Explore my{' '}
              {isPageDisabled('/resume') ? (
                <span className='text-muted-foreground/50 cursor-not-allowed'>
                  resume
                </span>
              ) : (
                <Link
                  href='/resume'
                  className='underline hover:text-foreground transition-colors'
                  aria-label='View my resume'
                  title='View my resume'
                >
                  resume
                </Link>
              )}
              {' '}or reach out to me{' '}
              {isPageDisabled('/contact') ? (
                <span className='text-muted-foreground/50 cursor-not-allowed'>
                  here
                </span>
              ) : (
                <Link
                  href='/contact'
                  className='underline hover:text-foreground transition-colors'
                  aria-label='Go to Contact page'
                  title='Go to Contact page'
                >
                  here
                </Link>
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
