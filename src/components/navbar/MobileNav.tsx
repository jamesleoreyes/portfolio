'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { nav } from '@/configs/nav';
import { assets } from '@/configs/app';
import { Button, ThemeToggle } from '@/components';
import { AdaptiveIcon } from '@/components/icons';
import { usePWAMode } from '@/hooks/usePWAMode';
import {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';

interface MobileNavProps {
  className?: string;
}

export default function MobileNav({ className }: MobileNavProps) {
  const isPWA = usePWAMode();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className={`md:hidden ${className}`}
          aria-label='Toggle mobile menu'
        >
          <Menu className='h-5 w-5' />
        </Button>
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/80 z-40" />
        <DrawerContent className={`bg-background flex flex-col fixed bottom-0 left-0 right-0 mt-24 rounded-t-[10px] z-50 ${isPWA ? 'pb-safe' : ''}`}>
          <div className={`max-w-md mx-auto w-full p-4 pt-0 ${isPWA ? 'pb-safe-offset-4' : ''}`}>

            {/* Header */}
            <DrawerHeader>
              <DrawerTitle className="font-medium flex items-center justify-center">
                <AdaptiveIcon
                  src={assets.branding.iconTransparent}
                  alt='logo'
                  width={100}
                  height={100}
                  className='w-25 h-25 transition-all duration-150'
                />
              </DrawerTitle>
            </DrawerHeader>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2 mb-4 text-left">
              {nav.map((page) => (
                page.disabled ? (
                  <Button
                    key={page.label}
                    variant='ghost'
                    className='h-12 text-3xl w-full px-4'
                    disabled={true}
                  >
                    {page.label}
                  </Button>
                ) : (
                  <DrawerClose key={page.label} asChild>
                    <Button
                      asChild
                      variant='ghost'
                      className='h-12 text-3xl w-full px-4'
                    >
                      <Link href={page.href}>
                        {page.label}
                      </Link>
                    </Button>
                  </DrawerClose>
                )
              ))}
            </div>

            {/* Theme Section */}
            <DrawerFooter>
              <div className='flex justify-center'>
                <ThemeToggle variant="full" />
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
} 