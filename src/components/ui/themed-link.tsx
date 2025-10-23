import { cn } from '@/src/lib';
import Link, { LinkProps } from 'next/link';
import { forwardRef, type AnchorHTMLAttributes } from 'react';

type ThemedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & LinkProps & {
  className?: string;
}

const ThemedLink = forwardRef<HTMLAnchorElement, ThemedLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Link ref={ref} className={cn(
        'underline underline-offset-3 hover:underline-offset-6 decoration-[1.5px] decoration-foreground/50 hover:decoration-foreground hover:text-foreground transition-all duration-400',
        className
      )} {...props}
      >
        {children}
      </Link>
    );
  }
);

ThemedLink.displayName = 'ThemedLink';

export { ThemedLink };
