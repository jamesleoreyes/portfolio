import Link from "next/link";
import { Button } from "@/components";
import { isPageDisabled } from "@/lib/utils";

export default function CTASection() {
  return (
    <section>
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
    </section>
  );
}