import Link from "next/link";
import { Calendar, MapPin, Briefcase, Rocket, GraduationCap } from "lucide-react";
import { experienceData } from "../data";

function TimelineItem({ experience, isLast }: {
  experience: typeof experienceData.experiences[0];
  isLast: boolean;
}) {
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
      {/* Timeline line */}
      {!isLast && (
        <div className='absolute left-6 top-16 w-0.5 h-full bg-border'></div>
      )}

      <div className='flex gap-6'>
        {/* Timeline dot */}
        <div className={`flex-shrink-0 w-12 h-12 ${getStatusColor(experience.status)} flex items-center justify-center text-white font-semibold text-sm`}>
          {getTypeIcon(experience.type)}
        </div>

        {/* Content */}
        <div className={`flex-1 space-y-4 ${isLast ? 'pb-0' : 'pb-12'}`}>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <div>
              <h3 className='text-xl font-semibold'>{experience.position}</h3>
              <p className='text-lg text-muted-foreground font-medium'>
                <Link href={experience.company.url} target='_blank' rel='noopener noreferrer'>
                  {experience.company.name}
                </Link>
              </p>
            </div>
            <div className='flex flex-col sm:items-end gap-1'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Calendar className='w-4 h-4' />
                <span>{experience.startDate} - {experience.endDate}</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <MapPin className='w-4 h-4' />
                <span>{experience.location}</span>
              </div>
              <div className={`px-2 py-1 text-xs font-medium text-white ${getStatusColor(experience.status)} self-start sm:self-end`}>
                {getStatusText(experience.status)}
              </div>
            </div>
          </div>

          <p className='text-muted-foreground leading-relaxed'>{experience.overview}</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-accent p-4 space-y-2'>
              <h4 className='font-semibold text-sm'>Projects Built</h4>
              <p className='text-2xl font-bold text-primary'>{experience.keyProjects.length}</p>
            </div>
            <div className='bg-accent p-4 space-y-2'>
              <h4 className='font-semibold text-sm'>Technologies</h4>
              <p className='text-2xl font-bold text-primary'>{experience.technologies.length}</p>
            </div>
            <div className='bg-accent p-4 space-y-2'>
              <h4 className='font-semibold text-sm'>Key Achievements</h4>
              <p className='text-2xl font-bold text-primary'>{experience.achievements.length}</p>
            </div>
          </div>

          <div className='bg-primary/5 p-4 border-l-4 border-primary'>
            <h4 className='font-semibold mb-2'>Context & Impact</h4>
            <p className='text-sm text-muted-foreground leading-relaxed'>{experience.context}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const { experiences } = experienceData;

  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Experience Timeline</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          A chronological journey through my professional development, from first internship to current entrepreneurial ventures.
        </p>
      </div>

      <div className='space-y-8'>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}