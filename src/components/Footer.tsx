import React from 'react';
import Link from 'next/link';
import { assets } from '@/configs/app';
import { navContent, navWork } from '@/configs/nav';
import { ThemeToggle, SocialLinks } from '@/components';
import { AdaptiveIcon } from '@/components/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t bg-background'>
      <div className='mx-auto max-w-screen-xl py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Logo and Description */}
          <div className='lg:col-span-1 text-center lg:text-left'>
            <Link href='/' className='inline-block'>
              <AdaptiveIcon
                src={assets.branding.iconTransparent}
                alt='James Reyes Transparent Logo'
                width={40}
                height={40}
                className='w-10 h-10 hover:opacity-60 transition-all duration-150'
              />
            </Link>
            <p className='mt-4 text-sm text-muted-foreground max-w-xs mx-auto lg:mx-0'>
              Full-Stack Product Engineer building useful, purposeful apps and learning everything along the way.
            </p>

            {/* Social Links */}
            <div className='mt-6 flex space-x-4 justify-center lg:justify-start'>
              <SocialLinks />
            </div>
          </div>

          {/* Navigation Links */}
          <div className='lg:col-span-1 text-center lg:text-left'>
            <h2 className='text-sm font-semibold text-foreground'>Look Around</h2>
            <ul className='mt-4 space-y-3'>
              {navContent.map((page) => (
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
            <h2 className='text-sm font-semibold text-foreground'>Get in Touch</h2>
            <ul className='mt-4 space-y-3'>
              {navWork.map((page) => (
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
