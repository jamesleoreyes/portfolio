import Link from 'next/link';
import { ArrowRight, Star, Code, Milestone } from 'lucide-react';
import { experienceData } from '@/src/data';
import { cn } from '@/src/lib';

interface TechEvolutionProps {
  className?: string;
}

function EvolutionItem({ item, index, isLast }: {
  item: typeof experienceData.techEvolution[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <div className='relative'>
      {/* Timeline line */}
      {!isLast && (
        <div className='absolute left-6 top-16 w-0.5 h-[calc(100%-50px)] bg-border'></div>
      )}

      <div className='flex gap-6'>
        {/* Timeline dot */}
        <div className='flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm'>
          {index + 1}
        </div>

        {/* Content */}
        <div className='flex-1 space-y-4 pb-12'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <div>
              <h3 className='text-xl font-semibold text-primary'>{item.period}</h3>
              <p className='text-lg text-muted-foreground'>{item.focus}</p>
            </div>
          </div>

          <div className='bg-primary/5 p-4 border-l-4 border-primary'>
            <div className='flex items-center gap-2 mb-2'>
              <Milestone className='w-5 h-5 text-primary' />
              <span className='font-semibold text-primary text-lg'>Key Milestone</span>
            </div>
            <p className='text-muted-foreground'>{item.milestone}</p>
          </div>

          <div>
            <div className='flex items-center gap-2 mb-3'>
              <Code className='w-5 h-5 text-primary' />
              <span className='font-semibold text-primary text-lg'>Technologies Learned</span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className='bg-accent text-primary px-3 py-1 text-sm border border-border/50 hover:bg-accent/80 transition-colors'
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeStack() {
  const { techEvolution } = experienceData;
  const allTechnologies = [...new Set(techEvolution.flatMap(item => item.technologies))];

  return (
    <div className='bg-accent p-8 border border-foreground/10'>
      <h3 className='text-xl font-semibold mb-6 text-center text-primary'>What I&apos;ve Worked With</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {allTechnologies.map((tech, idx) => (
          tech.url ? (
            <Link
              key={idx}
              href={tech.url || ''}
              target='_blank'
              className='bg-background text-primary px-3 py-2 text-sm text-center hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center'
            >
              {tech.name}
            </Link>
          ) : (
            <span key={idx} className='bg-background text-foreground px-3 py-2 text-sm text-center flex items-center justify-center'>
              {tech.name}
            </span>
          )
        ))}
      </div>
    </div>
  );
}

function EvolutionInsight() {
  return (
    <div className='bg-primary/10 p-8 border border-foreground/10 text-center'>
      <h3 className='text-xl font-semibold mb-4 text-primary'>Evolution Insights</h3>
      <div className='grid gap-6 md:grid-cols-2'>
        <div className='space-y-3'>
          <div className='flex items-center justify-center gap-2'>
            <Star className='w-5 h-5 text-primary fill-primary' />
            <span className='font-semibold text-primary'>Learning Approach</span>
          </div>
          <p className='text-foreground/80'>
            Started with AI-assisted learning, evolved to understanding fundamentals,
            now focusing on architecture and business impact.
          </p>
        </div>
        <div className='space-y-3'>
          <div className='flex items-center justify-center gap-2'>
            <ArrowRight className='w-5 h-5 text-primary' />
            <span className='font-semibold text-primary'>Next Phase</span>
          </div>
          <p className='text-foreground/80'>
            Expanding into advanced system design, team leadership,
            and product strategy while maintaining technical excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TechEvolution({ className }: TechEvolutionProps) {
  const { techEvolution } = experienceData;

  return (
    <section className={cn('border-b border-border/50 py-16 w-full', className)}>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-4 text-primary'>Technical Evolution</h2>
          <p className='text-lg text-muted-foreground max-w-xl mx-auto'>
            The progression of technologies, frameworks, and skills learned throughout my professional journey.
          </p>
        </div>

        <div className='space-y-8'>
          {techEvolution.map((item, index) => (
            <EvolutionItem
              key={index}
              item={item}
              index={index}
              isLast={index === techEvolution.length - 1}
            />
          ))}
        </div>

        <KnowledgeStack />
        <EvolutionInsight />
      </div>
    </section>
  );
}