import Link from "next/link";
import { Button } from "@/components";
import { isPageDisabled } from "@/lib/utils";

export default function CTASection() {
  return (
    <section>
      <div className='flex flex-col sm:flex-row gap-4 justify-start items-start'>
        <Button
          asChild
          variant='default'
          size='lg'
          className='min-w-[140px] w-full sm:w-auto'
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
          className='min-w-[140px] w-full sm:w-auto'
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
          className='min-w-[140px] w-full sm:w-auto'
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