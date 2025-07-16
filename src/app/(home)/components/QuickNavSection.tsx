import Link from "next/link";
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
          <Link
            href='/resume'
            className='underline hover:text-foreground transition-colors'
            aria-label='View my resume'
            title='View my resume'
          >
            resume
          </Link>
          {' '}or reach out to me{' '}
          <Link
            href='/contact'
            className='underline hover:text-foreground transition-colors'
            aria-label='Reach out to me'
            title='Reach out to me'
          >
            here
          </Link>
        </p>
      </AlertDescription>
    </Alert>
  );
}