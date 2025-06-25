import Link from 'next/link';
import { Button, GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}


export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/jamesleoreyes',
      icon: GitHubIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jamesleoreyes',
      icon: LinkedInIcon,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/jamesleoreyes',
      icon: TwitterIcon,
    },
  ];

  return (
    <>
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Button
            key={link.name}
            variant='ghost'
            size='sm'
            asChild
            className='h-9 w-9 p-0'
          >
            <Link
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Follow on ${link.name}`}
            >
              <IconComponent className='h-4 w-4' />
            </Link>
          </Button>
        );
      })}
    </>
  );
}