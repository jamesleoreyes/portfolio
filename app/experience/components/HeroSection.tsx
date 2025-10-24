import { experienceData } from '@/src/data';
import { cn } from '@/src/lib';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  const { overallStats } = experienceData;

  return (
    <section className={cn('border-b border-border/50 py-16 w-full', className)}>
      <div className='max-w-4xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center md:text-left space-y-8 lg:space-y-0'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary'>
              Professional Experience
            </h1>
            <p className='text-xl text-muted-foreground'>
              From FedEx delivery driver to Full-Stack Product Engineer, discover the projects, challenges, and breakthroughs that shaped my technical journey.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-accent p-4 text-center space-y-1'>
              <div className='text-2xl font-bold text-primary'>{overallStats.totalExperience}</div>
              <div className='text-muted-foreground'>Experience</div>
            </div>
            <div className='bg-accent p-4 text-center space-y-1'>
              <div className='text-2xl font-bold text-primary'>{overallStats.projectsBuilt}</div>
              <div className='text-muted-foreground'>Projects Built</div>
            </div>
            <div className='bg-accent p-4 text-center space-y-1'>
              <div className='text-2xl font-bold text-primary'>{overallStats.technologiesUsed}+</div>
              <div className='text-muted-foreground'>Technologies</div>
            </div>
            <div className='bg-accent p-4 text-center space-y-1'>
              <div className='text-2xl font-bold text-primary'>{overallStats.problemsSolved}+</div>
              <div className='text-muted-foreground'>Problems Solved</div>
            </div>
          </div>

          <div className='bg-primary/10 p-6 border border-foreground/10 text-center lg:text-left'>
            <h2 className='text-lg font-semibold mb-2'>What I&apos;ve Learned</h2>
            <p className='text-muted-foreground'>
              Each role taught me something different: the internship showed me what&apos;s possible,
              the full-time position taught me real-world development, and the side project
              is teaching me entrepreneurship and product development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}