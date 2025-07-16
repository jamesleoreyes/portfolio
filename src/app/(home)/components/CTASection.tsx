import Link from "next/link";
import { Button } from "@/components";
import { isPageDisabled } from "@/lib/utils";

export default function CTASection() {
  return (
    <section>
      <div className='flex flex-col sm:flex-row gap-4 items-center sm:justify-between md:justify-start w-full transition-none'>
        <Button
          asChild
          variant='default'
          size='lg'
          className='min-w-[140px] w-full sm:w-auto sm:flex-1 md:flex-none transition-none'
          aria-label='Learn more about me'
          title='Learn more about me'
        >
          <Link href='/about'>
            About Me
          </Link>
        </Button>
        <Button
          asChild={!isPageDisabled('/projects')}
          disabled={isPageDisabled('/projects')}
          variant='default'
          size='lg'
          className='min-w-[140px] w-full sm:w-auto sm:flex-1 md:flex-none transition-none'
          aria-label='View my projects'
          title='View my projects'
        >
          <Link href='/projects'>
            View My Projects
          </Link>
        </Button>

        <Button
          asChild={!isPageDisabled('/blog')}
          disabled={isPageDisabled('/blog')}
          variant='default'
          size='lg'
          className='min-w-[140px] w-full sm:w-auto sm:flex-1 md:flex-none transition-none'
          aria-label='View my personal blog'
          title='View my personal blog'
        >
          <Link href='/blog'>
            My Blog
          </Link>
        </Button>
      </div>
    </section>
  );
}