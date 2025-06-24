import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { nav } from '@/configs/nav';
import { Button } from '@/components';
import { MobileNav } from '@/components';

export default function Navbar() {
  return (
    <nav className='flex justify-center items-center p-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40'>
      <div className='flex justify-between items-center max-w-screen-lg w-full'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/media/icon-transparent.svg'
            alt='logo'
            width={100}
            height={100}
            className='w-10 h-10 bg-background hover:opacity-80 transition-all duration-300'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex'>
          {nav.map((page) => (
            <Button key={page.label} asChild variant='ghost'>
              <Link href={page.href}>
                {page.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </nav>
  );
}