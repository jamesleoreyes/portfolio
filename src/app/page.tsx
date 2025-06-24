import Link from 'next/link';
import { Button } from '@/components';
import { GitHubIcon } from '@/components';
import { AdaptiveIcon } from '@/components';
import { LinkedInIcon } from '@/components';
import { TwitterIcon } from '@/components';

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
      </main>
    </div>
  );
}
