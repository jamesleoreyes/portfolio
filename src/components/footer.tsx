import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { nav } from '@/configs/nav';
import { GitHubIcon, LinkedInIcon, TwitterIcon, Button } from '@/components';
import { ThemeToggle } from '@/components';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className='border-t bg-background'>
      <div className='mx-auto max-w-screen-lg px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Logo and Description */}
          <div className='lg:col-span-1 text-center lg:text-left'>
            <Link href='/' className='inline-block'>
              <Image
                src='/media/icon-transparent.svg'
                alt='James Reyes Logo'
                width={40}
                height={40}
                className='w-10 h-10 bg-background hover:opacity-80 transition-all duration-300'
              />
            </Link>
            <p className='mt-4 text-sm text-muted-foreground max-w-xs mx-auto lg:mx-0'>
              Full Stack Product Engineer building useful, purposeful apps and learning everything along the way.
            </p>

            {/* Social Links */}
            <div className='mt-6 flex space-x-4 justify-center lg:justify-start'>
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
            </div>
          </div>

          {/* Navigation Links */}
          <div className='lg:col-span-1 text-center lg:text-left'>
            <h3 className='text-sm font-semibold text-foreground'>Look Around</h3>
            <ul className='mt-4 space-y-3'>
              {nav.slice(0, 3).map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className='text-sm text-muted-foreground hover:text-foreground transition-colors duration-200'
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='lg:col-span-1 text-center lg:text-left'>
            <h3 className='text-sm font-semibold text-foreground'>Get in Touch</h3>
            <div className='mt-4 space-y-3'>
              <Link
                href='/contact'
                className='block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200'
              >
                Contact Me
              </Link>
              <Link
                href='/resume'
                className='block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200'
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 pt-8 border-t border-border'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-sm text-muted-foreground'>
              &copy; {currentYear} James Reyes
            </p>
            <ThemeToggle variant='full' />
          </div>
        </div>
      </div>
    </footer>
  );
}
