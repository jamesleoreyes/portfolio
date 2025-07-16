'use client';

import { ExternalLink, Github, Calendar, Globe, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button, Card, CardContent } from '@/components';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

interface ProjectHeroProps {
  className?: string;
}

export default function ProjectHero({ className }: ProjectHeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = mounted ? (resolvedTheme || 'light') : 'light';
  const {
    title,
    subtitle,
    description,
    status,
    type,
    liveUrl,
    githubUrl,
    featuredImage,
    startDate,
    lastUpdated
  } = projects.portfolio;

  useEffect(() => {
    setMounted(true);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'development': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'personal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'professional': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'open-source': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section className={cn("border-b border-border/50 py-16 pt-4 sm:pt-16 w-full px-4", className)}>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-end'>
          <Button variant="ghost" size="lg" className='mb-4' asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Project Info */}
          <div className='space-y-6'>
            {/* Badges */}
            <div className='flex flex-wrap gap-3'>
              <span className={cn(
                'px-3 py-1 text-sm font-medium rounded-full',
                getStatusColor(status)
              )}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
              <span className={cn(
                'px-3 py-1 text-sm font-medium rounded-full',
                getTypeColor(type)
              )}>
                {type.charAt(0).toUpperCase() + type.slice(1)} Project
              </span>
            </div>

            {/* Title & Description */}
            <div className='space-y-4'>
              <div>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-2'>
                  {title}
                </h1>
                <p className='text-xl text-muted-foreground font-medium'>
                  {subtitle}
                </p>
              </div>
              <p className='text-lg text-foreground leading-relaxed'>
                {description}
              </p>
            </div>

            {/* Project Links */}
            <div className='flex flex-col sm:flex-row gap-4'>
              {liveUrl && (
                <Button asChild size="lg" className='min-w-[140px]'>
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2'
                  >
                    <Globe className='w-4 h-4' />
                    View Live Site
                    <ExternalLink />
                  </Link>
                </Button>
              )}
              {githubUrl && (
                <Button asChild variant="secondary" size="lg" className='min-w-[140px] text-foreground'>
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2'
                  >
                    <Github className='w-4 h-4' />
                    View Source
                    <ExternalLink />
                  </Link>
                </Button>
              )}
            </div>

            {/* Timeline */}
            <Card className="bg-accent/50 border-border/50">
              <CardContent>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Calendar className='w-4 h-4' />
                    <span>Started: {startDate}</span>
                  </div>
                  <div className='hidden sm:block w-px h-4 bg-border'></div>
                  <div className='text-sm text-muted-foreground'>
                    Last updated: {lastUpdated}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Image */}
          <div className='relative'>
            <div className='relative overflow-hidden border border-border/50 shadow-xl'>
              <Image
                src={featuredImage[currentTheme as 'light' | 'dark'] || featuredImage.default}
                alt={`${title} - Featured Screenshot`}
                width={800}
                height={500}
                className='w-full h-auto object-cover'
                priority
              />
            </div>

            {/* Floating status indicator */}
            <div className='absolute -top-3 -right-3 bg-background border-2 border-border rounded-full p-3 shadow-lg'>
              <div className={cn(
                'w-3 h-3 rounded-full',
                status === 'live' ? 'bg-green-500' :
                  status === 'development' ? 'bg-yellow-500' : 'bg-gray-500'
              )}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 