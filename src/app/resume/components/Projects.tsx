'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { resumeData, type ProjectItem } from '../data';
import { GitHub } from '@/components/icons';
import { Progress, PlaceholderScreenshot, Tooltip, TooltipTrigger, TooltipContent } from '@/components';

function ProjectCard({ project }: { project: ProjectItem }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCompletionPercentage(project.completionPercentage || 0));
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && resolvedTheme) {
      setImageReady(true);
    }
  }, [mounted, resolvedTheme]);

  const currentTheme = resolvedTheme || 'light';

  return (
    <div className='border border-foreground/10 bg-accent p-6 space-y-4 hover:shadow-md transition-shadow'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>{project.name}</h3>
          <div className='flex gap-2'>
            {project.url && (
              <Link
                href={project.url}
                target='_blank'
                title='View Project'
                aria-label='View Project'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary'
              >
                <ExternalLink className='w-4 h-4' aria-label='View Project' />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                title='View GitHub Repository'
                aria-label='View GitHub Repository'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary'
              >
                <GitHub className='w-4 h-4' aria-label='GitHub Repository' />
              </Link>
            )}
          </div>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <div className='flex-1'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress
                  value={completionPercentage}
                  className='h-3'
                  aria-label={`${completionPercentage}% complete`}
                  aria-valuenow={completionPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </TooltipTrigger>
              <TooltipContent>
                <span className='font-semibold'>{completionPercentage}% complete</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center relative'>
        {/* Show placeholder until image is fully loaded */}
        {(!project.image || !imageReady || !imageLoaded) && (
          <div className='flex items-center justify-center bg-background'>
            <PlaceholderScreenshot className='w-full max-w-none' />
          </div>
        )}

        {/* Show actual image when ready */}
        {project.image && imageReady && (
          <Link
            href={project.image[currentTheme === 'dark' ? 'dark' : 'light']}
            target='_blank'
            rel='noopener noreferrer'
            className={imageLoaded ? 'block' : 'absolute opacity-0 pointer-events-none'}
          >
            <Image
              src={project.image[currentTheme === 'dark' ? 'dark' : 'light']}
              alt={project.name}
              title={project.name}
              aria-label={project.name}
              width={1000}
              height={1000}
              sizes="100vw"
              className="w-full"
              onLoad={() => setImageLoaded(true)}
            />
          </Link>
        )}
      </div>

      <p className='text-muted-foreground text-sm leading-relaxed'>
        {project.description}
      </p>

      <div>
        <h4 className='font-semibold mb-2 text-sm'>Key Highlights:</h4>
        <ul className='list-disc list-inside space-y-1 text-sm text-muted-foreground'>
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className='font-semibold mb-2 text-sm'>Technologies:</h4>
        <div className='flex flex-wrap gap-1'>
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className='bg-popover text-secondary-foreground px-2 py-1 text-xs'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section>
      <h2 className='text-2xl font-semibold mb-6 text-primary border-b pb-2'>Featured Projects</h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}