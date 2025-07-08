'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Drawer } from 'vaul';
import { nav } from '@/configs/nav';
import { assets } from '@/configs/app';
import { Button, ThemeToggle } from '@/components';
import { AdaptiveIcon } from '@/components/icons';
import { usePWAMode } from '@/hooks/usePWAMode';

interface MobileNavProps {
  className?: string;
}

export default function MobileNav({ className }: MobileNavProps) {
  const isPWA = usePWAMode();

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className={`md:hidden ${className}`}
          aria-label='Toggle mobile menu'
        >
          <Menu className='h-5 w-5' />
        </Button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80 z-40" />
        <Drawer.Content className={`bg-background flex flex-col fixed bottom-0 left-0 right-0 mt-24 rounded-t-[10px] z-50 ${isPWA ? 'pb-safe' : ''}`}>
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8 mt-4" />
          <div className={`max-w-md mx-auto w-full p-4 pt-0 ${isPWA ? 'pb-safe-offset-4' : ''}`}>
            {/* Header */}
            <Drawer.Title className="font-medium mb-4 flex items-center justify-center">
              <AdaptiveIcon
                src={assets.branding.iconTransparent}
                alt='logo'
                width={100}
                height={100}
                className='w-25 h-25 transition-all duration-150'
              />
            </Drawer.Title>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2 mb-8 text-left">
              {nav.map((page) => (
                <Drawer.Close key={page.label} asChild>
                  <Button
                    asChild
                    variant='ghost'
                    className='h-12 text-3xl w-full px-4'
                    disabled={page.disabled}
                  >
                    <Link href={page.href}>
                      {page.label}
                    </Link>
                  </Button>
                </Drawer.Close>
              ))}
            </div>

            {/* Theme Section */}
            <div className='flex justify-center'>
              <ThemeToggle variant="full" />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
} 