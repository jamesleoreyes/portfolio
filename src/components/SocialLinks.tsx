import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components';
import { GitHub, LinkedIn, Twitter } from '@/components/icons';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface SocialLinkProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinkProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/jamesleoreyes',
      icon: GitHub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jamesleoreyes',
      icon: LinkedIn,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/jamesleoreyes',
      icon: Twitter,
    },
  ];

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
            className={cn('h-9 w-9 p-0', className)}
          >
            <Link
              href={link.href}
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