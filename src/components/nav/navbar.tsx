import React from 'react';
import Link from 'next/link';
import { nav } from '@/configs/nav';
import { Button, AdaptiveIcon, MobileNav, ThemeToggle } from '@/components';

export default function Navbar() {
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
          {nav.map((page) => (
            <Button key={page.label} asChild variant='ghost'>
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