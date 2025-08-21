'use client';

import Link from 'next/link';
import { ExternalLink, Info } from 'lucide-react';
import { resumeData } from '@/src/data';
import { ProjectItem } from '@_types/Resume';
import { GitHub } from '@components/icons';
import {
  Progress,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/src/components';
import ScreenshotCarousel from './ScreenshotCarousel';

function ProjectCard({ project }: { project: ProjectItem }) {
  const completionPercentage = project.completionPercentage || 0;

  return (
    <div className='border border-foreground/10 bg-accent p-6 space-y-4 hover:shadow-md transition-shadow'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>{project.name}</h3>
          <div className='flex gap-4 md:gap-3'>
            {project.projectHref && (
              <Link
                href={project.projectHref}
                target='_self'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary'
                title='View Project Details'
                aria-label='View Project Details'
              >
                <Info className='w-5 h-5 md:w-4 md:h-4' />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary'
                title='View Live Project'
                aria-label='View Live Project'
              >
                <ExternalLink className='w-5 h-5 md:w-4 md:h-4' />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary'
                title='View GitHub Repository'
                aria-label='View GitHub Repository'
              >
                <GitHub className='w-5 h-5 md:w-4 md:h-4' />
              </Link>
            )}
          </div>
        </div>
        <div className='flex items-center gap-2 my-2'>
          <div className='flex-1'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress
                  value={completionPercentage}
                  className='h-3'
                  aria-label={`${completionPercentage}% complete`}
                />
              </TooltipTrigger>
              <TooltipContent className='shadow-lg'>
                <span className='font-semibold'>{completionPercentage}% complete</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <p className='flex justify-center md:hidden -mb-1 text-sm text-muted-foreground'>{completionPercentage}% complete</p>
      </div>

      <ScreenshotCarousel project={project} />

      <p className='text-muted-foreground leading-relaxed'>
        {project.description}
      </p>

      <div>
        <h4 className='font-semibold mb-2 text-primary'>Key Highlights:</h4>
        <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className='font-semibold mb-2 text-primary'>Technologies:</h4>
        <div className='flex flex-wrap gap-1'>
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className='bg-primary/10 text-primary px-2 py-1 text-sm'
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