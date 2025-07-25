'use client';

import Link from "next/link";
import { Calendar, MapPin, Briefcase, Rocket, GraduationCap } from "lucide-react";
import { useMobile } from "@/hooks";
import { experienceData } from "@/data";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  className?: string;
}

function TimelineItem({ experience, isLast }: {
  experience: typeof experienceData.experiences[0];
  isLast: boolean;
}) {
  const isMobile = useMobile();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-green-800';
      case 'completed': return 'bg-blue-800';
      case 'upcoming': return 'bg-orange-800';
      default: return 'bg-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship': return <GraduationCap className="w-4 h-4" />;
      case 'full-time': return <Briefcase className="w-4 h-4" />;
      case 'side-project': return <Rocket className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current': return 'Current';
      case 'completed': return 'Completed';
      case 'upcoming': return 'Upcoming';
      default: return 'Unknown';
    }
  };

  return (
    <div className='relative'>
      {/* Sticky Mobile Header */}
      <div className='md:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border/50 -mx-4 px-4 py-3 pt-7'>
        <div className='flex items-center gap-3'>
          <div className={`w-8 h-8 ${getStatusColor(experience.status)} flex items-center justify-center text-white flex-shrink-0`}>
            {getTypeIcon(experience.type)}
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-lg font-semibold'>{experience.position}</h3>
            <p className='text-sm text-muted-foreground truncate'>
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
          <div className={`px-2 py-1 text-xs font-medium text-white ${getStatusColor(experience.status)} flex-shrink-0`}>
            {getStatusText(experience.status)}
          </div>
        </div>
      </div>

      {/* Timeline line */}
      {!isLast && !isMobile && (
        <div className='absolute left-6 top-16 w-0.5 h-[calc(100%-80px)] bg-border'></div>
      )}

      <div className='flex gap-6'>
        {/* Timeline dot */}
        {!isMobile && (
          <div className={`flex-shrink-0 w-12 h-12 ${getStatusColor(experience.status)} flex items-center justify-center text-white font-semibold text-sm`}>
            {getTypeIcon(experience.type)}
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 space-y-4 ${isLast ? 'pb-0' : 'pb-12'} min-w-0`}>
          {!isMobile && (
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
              <div>
                <h3 className='text-xl font-semibold'>{experience.position}</h3>
                <p className='text-muted-foreground'>
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
              <div className='flex flex-col sm:items-end gap-1'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <Calendar className='w-4 h-4' />
                  <span>{experience.startDate} — {experience.endDate}</span>
                </div>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <MapPin className='w-4 h-4' />
                  <span>{experience.location}</span>
                </div>
                <div className={`px-2 py-1 text-sm font-medium text-white ${getStatusColor(experience.status)} self-start sm:self-end`}>
                  {getStatusText(experience.status)}
                </div>
              </div>
            </div>
          )}

          <p className='text-muted-foreground leading-relaxed text-lg mt-2'>{experience.overview}</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-accent p-4 space-y-2'>
              <h4 className='font-semibold'>Projects Built</h4>
              <p className='text-2xl font-bold text-primary'>{experience.keyProjects.length}</p>
            </div>
            <div className='bg-accent p-4 space-y-2'>
              <h4 className='font-semibold'>Technologies</h4>
              <p className='text-2xl font-bold text-primary'>{experience.technologies.length}</p>
            </div>
            <div className='bg-accent p-4 space-y-2'>
              <h4 className='font-semibold'>Key Achievements</h4>
              <p className='text-2xl font-bold text-primary'>{experience.achievements.length}</p>
            </div>
          </div>

          <div className='bg-primary/5 p-4 border-l-4 border-primary'>
            <h4 className='font-semibold mb-2 text-lg text-primary'>Context & Impact</h4>
            <p className='text-muted-foreground leading-relaxed'>{experience.context}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceTimeline({ className }: ExperienceTimelineProps) {
  const { experiences } = experienceData;

  return (
    <section className={cn("border-b border-border/50 py-16 w-full", className)}>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>Experience Timeline</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            A chronological journey through my professional development, from first internship to current entrepreneurial ventures.
          </p>
        </div>
        <div className=''>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}