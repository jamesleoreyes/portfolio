import Link from "next/link";
import { isPageDisabled } from "@/lib/utils";

export default function QuickNavSection() {
  return (
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
  );
}