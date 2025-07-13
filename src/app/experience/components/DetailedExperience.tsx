'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Target, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { experienceData } from '../data';
import { Button } from '@/components';

function ProjectCard({ project }: { project: typeof experienceData.experiences[0]['keyProjects'][0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='border border-foreground/10 bg-accent p-6 space-y-4 max-w-lg'>
      <div className='flex items-start justify-between relative'>
        <div className='flex-1'>
          <h4 className='text-lg font-semibold mb-2'>{project.name}</h4>
          <p className='text-muted-foreground mb-3'>{project.description}</p>
          <div className='bg-primary/10 p-3 border border-primary/20'>
            <div className='flex items-center gap-2 mb-1'>
              <Target className='w-4 h-4 text-primary' />
              <span className='font-medium'>Impact</span>
            </div>
            <p className='text-muted-foreground'>{project.impact}</p>
          </div>
        </div>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant='ghost'
          className='hover:bg-background! absolute right-0 top-[-5px]'
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          {isExpanded ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
        </Button>
      </div>

      {isExpanded && (
        <div className='space-y-4 border-t border-foreground/10 pt-4'>
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <Lightbulb className='w-4 h-4 text-orange-500' />
                <h5 className='font-semibold'>Challenges</h5>
              </div>
              <ul className='list-disc list-inside space-y-1 text-muted-foreground ml-6'>
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <TrendingUp className='w-4 h-4 text-green-500' />
                <h5 className='font-semibold'>Outcomes</h5>
              </div>
              <ul className='list-disc list-inside space-y-1 text-muted-foreground ml-6'>
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <div className='flex items-center gap-2 mb-2'>
              <Code className='w-4 h-4 text-blue-500' />
              <h5 className='font-semibold'>Technologies Used</h5>
            </div>
            <div className='flex flex-wrap gap-2 ml-6'>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className='bg-background text-foreground px-2 py-1 text-sm border border-foreground/10'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ExperienceDetail({ experience }: { experience: typeof experienceData.experiences[0] }) {
  return (
    <div className='space-y-8'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold mb-2'>{experience.position}</h3>
        <p className='text-lg text-muted-foreground font-medium mb-4'>
          <Link
            href={experience.company.url}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-primary hover:underline-offset-4'
          >
            {experience.company.name}
          </Link>
        </p>
      </div>

      <div className={`grid gap-6 ${experience.keyProjects.length === 1 ? 'justify-center' : 'md:grid-cols-2'}`}>
        {experience.keyProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div className='bg-accent p-6 border border-foreground/10'>
          <h4 className='text-lg font-semibold mb-4'>Key Learnings</h4>
          <ul className='space-y-2'>
            {experience.learnings.map((learning, idx) => (
              <li key={idx} className='flex items-start gap-2 text-sm'>
                <ArrowRight className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                <span className='text-muted-foreground'>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {experience.nextSteps && experience.nextSteps.length > 0 && (
          <div className='bg-primary/10 p-6 border border-primary/20'>
            <h4 className='text-lg font-semibold mb-4'>Next Steps</h4>
            <ul className='space-y-2'>
              {experience.nextSteps.map((step, idx) => (
                <li key={idx} className='flex items-start gap-2 text-sm'>
                  <ArrowRight className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                  <span className='text-muted-foreground'>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DetailedExperience() {
  const [selectedExperience, setSelectedExperience] = useState<typeof experienceData.experiences[0]>(experienceData.experiences[0]!);

  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Detailed Experience</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Deep dive into the projects, challenges, and outcomes that defined each role.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-2 mb-8'>
        {experienceData.experiences.map((experience) => (
          <Button
            key={experience.id}
            onClick={() => setSelectedExperience(experience)}
            variant={selectedExperience.id === experience.id ? 'default' : 'ghost'}
          >
            {experience.company.name}
          </Button>
        ))}
      </div>

      <ExperienceDetail experience={selectedExperience} />
    </section>
  );
} 