import { Alert, AlertDescription } from '@/src/components';
import { ThemedLink } from '@/src/components/ui/themed-link';

export default function QuickNavSection() {
  return (
    <Alert
      variant='secondary'
      className='text-sm text-muted-foreground flex justify-center md:justify-start w-fit mx-auto md:mx-0'
    >
      <AlertDescription>
        <p className='tracking-wider'>
          Explore my{' '}
          <ThemedLink
            href='/resume'
            aria-label='View my resume'
            title='View my resume'
          >
            resume
          </ThemedLink>
          {' '}or{' '}
          <ThemedLink
            href='/contact'
            aria-label='Reach out to me'
            title='Reach out to me'
          >
            contact me
          </ThemedLink>
        </p>
      </AlertDescription>
    </Alert>
  );
}