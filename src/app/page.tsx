import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GitHubIcon } from '@/components/ui/github-icon';
import { AdaptiveIcon } from '@/components/adaptive-icon';
import { LinkedInIcon } from '@/components/ui/linkedin-icon';
import { TwitterIcon } from '@/components/ui/twitter-icon';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center'>
        <AdaptiveIcon
          src='/media/icon-transparent.svg'
          alt='James Reyes Transparent Logo'
          width={200}
          height={200}
        />
        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <Button size='sm' asChild className='transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium'>
            <Link
              href='https://github.com/jamesleoreyes'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon className='size-5' />
              GitHub
            </Link>
          </Button>
          <Button size='sm' asChild className='transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium'>
            <Link
              href='https://www.linkedin.com/in/jamesleoreyes/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon className='size-5' />
              LinkedIn
            </Link>
          </Button>
          <Button size='sm' asChild className='transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium'>
            <Link
              href='https://x.com/jamesleoreyes'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TwitterIcon className='size-5' />
              Twitter
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
