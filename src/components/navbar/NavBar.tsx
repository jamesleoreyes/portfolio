'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { assets } from '@/configs/app';
import { nav } from '@/configs/nav';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button, MobileNav, ThemeToggle } from '@/components';
import { AdaptiveIcon } from '@/components/icons';

export default function NavBar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className={cn(
      'flex justify-center items-center p-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      scrolled && 'border-b'
    )}>
      <div className='flex justify-between items-center max-w-screen-xl w-full'>
        {/* Logo */}
        <Link href='/'>
          <AdaptiveIcon
            src={assets.branding.iconTransparent}
            alt='logo'
            width={100}
            height={100}
            className='w-10 h-10 hover:opacity-60 transition-all duration-150'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-2'>
          {nav.map((page) => (
            page.disabled ? (
              <Button
                key={page.label}
                aria-label={`${page.label} page (coming soon)`}
                title={`${page.label} page (coming soon)`}
                disabled={true}
                variant='ghost'
              >
                {page.label}
              </Button>
            ) : (
              <Button
                key={page.label}
                aria-label={`Go to ${page.label} page`}
                title={`Go to ${page.label} page`}
                asChild
                variant='ghost'
                className={cn(
                  isActive(page.href) && 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground dark:hover:bg-primary/90 dark:hover:text-primary-foreground'
                )}
              >
                <Link href={page.href}>
                  {page.label}
                </Link>
              </Button>
            )
          ))}
          <ThemeToggle variant='simple' />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </nav>
  );
}