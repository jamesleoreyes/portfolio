'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { nav } from '@/configs/nav';
import { Button } from '@/components';

interface MobileNavProps {
  className?: string;
}

export default function MobileNav({ className }: MobileNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant='ghost'
        size='icon'
        className={`md:hidden ${className}`}
        onClick={toggleMobileMenu}
        aria-label='Toggle mobile menu'
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <X className='h-5 w-5' />
        ) : (
          <Menu className='h-5 w-5' />
        )}
      </Button>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40'
            onClick={closeMobileMenu}
            aria-hidden='true'
          />

          {/* Mobile Menu */}
          <div className='absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden z-50'>
            <div className='mx-auto max-w-screen-lg px-4 py-4'>
              <div className='flex flex-col space-y-2 items-end'>
                {nav.map((page) => (
                  <Button
                    key={page.label}
                    asChild
                    variant='ghost'
                    className='justify-end h-12 text-base w-auto px-4'
                    onClick={closeMobileMenu}
                  >
                    <Link href={page.href}>
                      {page.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
} 