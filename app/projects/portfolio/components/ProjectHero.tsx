'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, Globe, ArrowLeft } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { GitHub } from '@components/icons';
import { Button, Card, CardContent, PlaceholderScreenshot } from '@/src/components';
import { cn, getStatusColor, getStatusBorderColor, getTypeColor, getTypeBorderColor } from '@/src/lib';
import { projects } from '@/src/data/projects';

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

  return (
    <section className={cn('border-b border-border/50 py-16 pt-4 sm:pt-16 w-full px-4', className)}>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Project Info */}
          <div className='space-y-6'>
            {/* Badges */}
            <div className='flex flex-wrap justify-between items-center'>
              <div className='flex flex-wrap gap-3'>
                <span className={cn(
                  'px-3 py-1 text-sm font-medium border',
                  getStatusColor(status),
                  getStatusBorderColor(status)
                )}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
                <span className={cn(
                  'px-3 py-1 text-sm font-medium border',
                  getTypeColor(type),
                  getTypeBorderColor(type)
                )}>
                  {type.charAt(0).toUpperCase() + type.slice(1)} Project
                </span>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/projects">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Projects
                </Link>
              </Button>
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
                    <GitHub />
                    View Source
                    <ExternalLink />
                  </Link>
                </Button>
              )}
            </div>

            {/* Timeline */}
            <Card className="bg-accent/50 border-border/50 p-4 py-3 w-full sm:w-fit">
              <CardContent className='px-0'>
                <div className='flex items-center justify-center gap-4'>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Calendar className='w-4 h-4' />
                    <span>Started: {startDate}</span>
                  </div>
                  <div className='w-px h-4 bg-border'></div>
                  <div className='text-sm text-muted-foreground'>
                    Last updated: {lastUpdated}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Image */}
          <div className='relative'>
            <div className='relative aspect-video overflow-hidden border border-border/50 shadow-xl'>
              {mounted && resolvedTheme ? (
                <Image
                  src={featuredImage[currentTheme as 'light' | 'dark'] || featuredImage.default}
                  alt={`${title} - Featured Screenshot`}
                  width={800}
                  height={500}
                  className='w-full h-auto object-cover'
                  priority
                />
              ) : (
                <PlaceholderScreenshot className='h-full' />
              )}
            </div>

            {/* Floating status indicator */}
            <div className='absolute -top-3 -right-3 bg-background border-2 border-border rounded-full p-3 shadow-lg'>
              <div className={cn(
                'w-3 h-3 rounded-full',
                status === 'live' ? 'bg-green-500 animate-pulse' :
                  status === 'development' ? 'bg-yellow-500' : 'bg-gray-500'
              )}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 