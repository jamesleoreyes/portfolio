'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/configs/nav';
import { cn } from '@/lib/utils';
import { Button, MobileNav, ThemeToggle } from '@/components';
import { AdaptiveIcon } from '@/components/icons';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className='flex justify-center items-center p-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'>
      <div className='flex justify-between items-center max-w-screen-xl w-full'>
        {/* Logo */}
        <Link href='/'>
          <AdaptiveIcon
            src='/media/icon-transparent.svg'
            alt='logo'
            width={100}
            height={100}
            className='w-10 h-10 hover:opacity-60 transition-all duration-150'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-2'>
          {nav.filter(page => page.href !== '/resume').map((page) => (
            <Button
              key={page.label}
              asChild
              disabled={page.disabled}
              variant='ghost'
              className={cn(
                isActive(page.href) && 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground dark:hover:bg-primary/90 dark:hover:text-primary-foreground'
              )}
            >
              <Link href={page.href}>
                {page.label}
              </Link>
            </Button>
          ))}
          <ThemeToggle variant='simple' />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </nav>
  );
}