'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { cn, getStatusColor, getStatusBorderColor } from '@/lib/utils';
import { Project } from '@/types/Projects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, PlaceholderScreenshot } from '@/components';
import { GitHub } from '@/components/icons';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = mounted ? (resolvedTheme || 'light') : 'light';
  const primaryTechStack = project.techStack.slice(0, 3);
  const shouldShowDetailButtons = project.liveUrl && project.githubUrl;

  useEffect(() => {
    setMounted(true);
  }, []);

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'live':
        return 'Live';
      case 'development':
        return 'In Development';
      case 'coming-soon':
        return 'Coming Soon';
      case 'archived':
        return 'Archived';
      default:
        return 'Unknown';
    }
  };

  return (
    <Card className='group flex flex-col justify-between hover:shadow-lg pt-0 transition-all duration-300 overflow-hidden'>
      {/* Project Preview/Screenshot */}
      <div className='space-y-6'>
        <div className='aspect-video bg-accent/50 flex items-center justify-center overflow-hidden'>
          {mounted && resolvedTheme && project.featuredImage[currentTheme as 'light' | 'dark'] ? (
            <Image
              src={project.featuredImage[currentTheme as 'light' | 'dark']!}
              alt={`${project.title} screenshot`}
              width={400}
              height={225}
              className='w-full h-full object-cover'
              priority={true}
            />
          ) : (
            <PlaceholderScreenshot />
          )}
        </div>


        <CardHeader>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-xl truncate'>{project.title}</CardTitle>
            <span className={cn(`px-2 py-1 text-xs ${getStatusColor(project.status)} border ${getStatusBorderColor(project.status)}`)}>
              {getStatusLabel(project.status)}
            </span>
          </div>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
      </div>
      <CardContent className={cn(`flex flex-col justify-between ${shouldShowDetailButtons ? 'space-y-4' : ''}`)}>
        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2'>
          {primaryTechStack.map((tech) => (
            <span
              key={tech.name}
              className='bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-500 px-2 py-1 text-xs'
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className='bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border border-gray-500 px-2 py-1 text-xs'>
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
        {/* Action Buttons */}
        <div className='grid grid-cols-2 gap-2'>
          {project.status !== 'development' && project.liveUrl && (
            <>
              <Button asChild variant='default' size='lg'>
                <Link href={`/projects/${project.id}`}>
                  <Eye className='w-4 h-4' />
                  View Details
                </Link>
              </Button>
              <Button asChild variant='secondary' size='lg'>
                <Link href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                  <ExternalLink className='w-4 h-4' />
                  Live Site
                </Link>
              </Button>
            </>
          )}
          {project.status === 'development' && (
            <Button asChild size='lg' className='col-span-2'>
              <Link href={project.githubUrl ?? ''} target='_blank' rel='noopener noreferrer'>
                <GitHub />
                View Repository
              </Link>
            </Button>
          )}
        </div>
      </CardContent>

    </Card>
  );
}