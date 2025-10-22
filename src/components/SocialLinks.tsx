import Link from 'next/link';
import { cn } from '@/src/lib';
import { Button } from '@/src/components';
import { contactData } from '../data';

interface SocialLinkProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinkProps) {
  const { socialLinks } = contactData;

  return (
    <>
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Button
            key={link.name}
            aria-label={`Follow on ${link.name}`}
            title={`Follow on ${link.name}`}
            variant='ghost'
            size='icon'
            asChild
            style={{ '--hover-bg': link.color } as React.CSSProperties}
            className={cn(
              `h-9 w-9 p-0 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] hover:text-background dark:hover:text-foreground`,
              className
            )}
          >
            <Link
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconComponent className='h-4 w-4' />
            </Link>
          </Button>
        );
      })}
    </>
  );
}