import Link from "next/link";
import { isPageDisabled } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components";

export default function QuickNavSection() {
  return (
    <Alert
      variant='default'
      className='text-sm text-muted-foreground flex justify-center md:justify-start w-fit mx-auto md:mx-0'
    >
      <AlertDescription>
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
      </AlertDescription>
    </Alert>
  );
}