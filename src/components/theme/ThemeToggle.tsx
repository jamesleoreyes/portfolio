'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components';

interface ThemeToggleProps {
  variant?: 'simple' | 'full';
  className?: string;
}

export function ThemeToggle({ variant = 'simple', className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder that matches the expected structure
    if (variant === 'simple') {
      return (
        <Button
          variant='ghost'
          size='icon'
          className={className}
          aria-label='Toggle theme'
          title='Toggle theme'
        >
          <Moon className='h-3 w-3' />
        </Button>
      );
    }

    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <Button
          variant='ghost'
          size='sm'
          className='h-8'
        >
          <Sun className='h-3 w-3' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='h-8'
        >
          <Moon className='h-3 w-3' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='h-8'
        >
          <Monitor className='h-3 w-3' />
        </Button>
      </div>
    );
  }

  if (variant === 'simple') {
    // Simple toggle between light and dark only
    const toggleTheme = () => {
      if (theme === 'system') {
        // Check if system prefers dark mode
        const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemIsDark ? 'light' : 'dark');
      } else {
        // Normal toggle between explicit light and dark
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }
    };

    return (
      <Button
        variant='ghost'
        size='icon'
        onClick={toggleTheme}
        className={className}
        aria-label='Toggle theme'
        title='Toggle theme'
      >
        <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    );
  }

  // Full toggle with light/dark/system options
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Button
        variant={theme === 'light' ? 'default' : 'ghost'}
        size='sm'
        onClick={() => setTheme('light')}
        aria-label='Light theme'
        title='Light theme'
        className='h-8'
      >
        <Sun className='h-3 w-3' />
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'ghost'}
        size='sm'
        onClick={() => setTheme('dark')}
        aria-label='Dark theme'
        title='Dark theme'
        className='h-8'
      >
        <Moon className='h-3 w-3' />
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'ghost'}
        size='sm'
        onClick={() => setTheme('system')}
        aria-label='System theme'
        className='h-8'
        title='System theme'
      >
        <Monitor className='h-3 w-3' />
      </Button>
    </div>
  );
}

export default ThemeToggle; 