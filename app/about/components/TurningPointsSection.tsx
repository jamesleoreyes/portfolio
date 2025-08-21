import type { ReactNode } from 'react';
import { Calendar, MapPin, Quote } from 'lucide-react';
import { Alert, AlertDescription } from '@/src/components';
import { cn } from '@/src/lib';

interface TurningPointsSectionProps {
  className?: string;
}

interface TurningPoint {
  year: string;
  title: string;
  description: string | ReactNode;
  lesson: string;
  location?: string;
}

const turningPoints: TurningPoint[] = [
  {
    year: '2008-2012',
    title: 'The Accidental Hacker',
    description: `Built my first desktop apps in Visual Basic, following as many YouTube tutorials as I could find. I also tinkered with Cheat Engine to "hack" Club Penguin and Bloons Tower Defense.`,
    lesson: 'Learning by doing beats learning by reading — curiosity and experimentation are the best teachers.',
  },
  {
    year: '2016-2018',
    title: 'The Creative Detour',
    description: 'Majored in Media Arts at USC-Columbia, dove into filmmaking and photography. Learned storytelling, visual design, and the importance of user experience.',
    lesson: 'Every technical skill benefits from understanding human creativity and emotion.',
    location: 'Columbia, SC'
  },
  {
    year: '2018-2022',
    title: 'The Music Obsession',
    description: 'Spent years making beats in FL Studio, recording music, selling on BeatStars. Learned about iteration, feedback loops, and finding my unique voice.',
    lesson: 'Passion projects teach you more than any textbook ever could.'
  },
  {
    year: '2020-2022',
    title: 'The Reality Check',
    description: 'FedEx Ground delivery driver working 60+ hours a week. Physical labor, time pressure, customer service — all while dreaming of something more.',
    lesson: 'Hard work builds character, while smart work builds futures.',
    location: 'Rock Hill, SC'
  },
  {
    year: 'Late 2022',
    title: 'The ChatGPT Moment',
    description: 'First interaction with ChatGPT sparked everything. Asked about building a Discord bot, got introduced to Python, and suddenly the path forward was clear.',
    lesson: 'The right tool at the right moment can change everything.'
  },
  {
    year: '2023-Present',
    title: 'The Full Circle',
    description: (
      <>
        From{' '}
        <a
          href='https://x.com/karpathy/status/1886192184808149383'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:underline'
          title='Wait... what?'
          aria-label='What is vibe coding?'
        >
          &quot;vibe coding&quot;
        </a>
        {' '}with AI to learning fundamentals, landing my first dev role, and building production systems. The childhood curiosity finally found its home.
      </>
    ),
    lesson: 'The best journeys bring you back to where you started, but with new eyes.'
  }
];

function TurningPointItem({ point, index, isLast }: { point: TurningPoint; index: number; isLast: boolean }) {
  return (
    <div className='relative'>
      {/* Timeline line */}
      {!isLast && (
        <div className='absolute left-6 top-16 w-0.5 h-[calc(100%-48px)] bg-border'></div>
      )}

      <div className='flex gap-6'>
        {/* Timeline dot */}
        <div className='flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm'>
          {index + 1}
        </div>

        {/* Content */}
        <div className='flex-1 space-y-3 pb-8'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <Calendar className='w-4 h-4' />
              <span className='font-medium'>{point.year}</span>
            </div>
            {point.location && (
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <MapPin className='w-4 h-4' />
                <span>{point.location}</span>
              </div>
            )}
          </div>

          <h3 className='text-xl font-semibold'>{point.title}</h3>
          <p className='text-muted-foreground leading-relaxed'>{point.description}</p>

          <Alert variant='ghost' className='bg-accent p-4 border-l-4 border-primary'>
            <AlertDescription className='flex items-start gap-2'>
              <Quote className='w-4 h-4 text-primary mt-1 flex-shrink-0' />
              <p className='text-sm text-primary font-medium italic'>{point.lesson}</p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default function TurningPointsSection({ className }: TurningPointsSectionProps) {
  return (
    <section className={cn('space-y-8 border-b border-border/50 py-16 w-full', className)}>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight mb-4'>The Turning Points</h2>
          <p className='text-lg text-muted-foreground max-w-xl mx-auto'>
            Every journey has moments that change everything. Here are the pivotal experiences that shaped who I am today.
          </p>
        </div>
        <div className='space-y-8'>
          {turningPoints.map((point, index) => (
            <TurningPointItem
              key={index}
              point={point}
              index={index}
              isLast={index === turningPoints.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}