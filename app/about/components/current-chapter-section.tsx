import type { ReactNode } from 'react';
import { Target, Heart, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/src/components';
import { cn } from '@/src/lib';

interface CurrentChapterSectionProps {
  className?: string;
}

interface CurrentChapterItem {
  title: string;
  description: ReactNode;
  icon: ReactNode;
}

const currentChapterItems: CurrentChapterItem[] = [
  {
    title: 'What Drives Me',
    description: "I love the intersection of technical precision and user empathy. The moment when clean, scalable code meets real human needs is where the magic happens. I'm passionate about building software that people actually want to use.",
    icon: <Heart className='w-5 h-5 text-primary' />
  },
  {
    title: 'Current Focus',
    description: "I'm doubling down on fundamentals while building a major side project. It's the perfect blend of technical challenge and real-world problem solving. I'm also completing certifications and learning from the best in the field.",
    icon: <Target className='w-5 h-5 text-primary' />
  },
  {
    title: 'How I Think',
    description: (
      <>
        <em className="text-foreground mr-1">&quot;The more I learn, the less I know&quot;</em> is my favorite saying because it perfectly captures
        the learning journey. Every new skill reveals deeper rabbit holes, and I embrace that
        endless curiosity.
      </>
    ),
    icon: <Lightbulb className='w-5 h-5 text-primary' />
  },
  {
    title: 'What\'s Next',
    description: 'My goal is to land a full-stack engineering role where I can focus 100% on building great software. I want to work with teams that value both technical excellence and user experience.',
    icon: <Rocket className='w-5 h-5 text-primary' />
  }
];

function CurrentChapterItem({ title, description, icon }: CurrentChapterItem) {
  return (
    <div className='flex items-start gap-4'>
      <div className='w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0'>
        {icon}
      </div>
      <div>
        <h3 className='font-semibold mb-2 text-lg'>{title}</h3>
        <p className='text-muted-foreground leading-relaxed'>{description}</p>
      </div>
    </div>
  );
}

export default function CurrentChapterSection({ className }: CurrentChapterSectionProps) {
  return (
    <section className={cn('space-y-8 border-b border-border/50 py-16 w-full', className)}>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>Where I Am Now</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Today, I&apos;m building products that solve real problems. Every technical decision is guided by user impact,
            because great software isn&apos;t just about perfect algorithms, it&apos;s about meeting expectations and creating value.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8'>
          {currentChapterItems.map((item) => (
            <CurrentChapterItem key={item.title} {...item} />
          ))}
        </div>
        <Card className='bg-accent p-8 border border-foreground/10 text-center'>
          <CardTitle className='text-xl font-semibold'>The Full-Stack Product Engineer Mindset</CardTitle>
          <CardDescription className='text-muted-foreground text-base max-w-2xl mx-auto'>
            I don&apos;t just write code, I solve problems. Every technical decision is informed by user impact,
            business value, and long-term maintainability. From backend architecture to frontend experience,
            I think about the whole picture.
          </CardDescription>
          <CardContent className='flex flex-wrap justify-center gap-4 text-sm'>
            <span className='bg-primary/10 text-primary px-3 py-1'>User-Centered Design</span>
            <span className='bg-primary/10 text-primary px-3 py-1'>Clean Architecture</span>
            <span className='bg-primary/10 text-primary px-3 py-1'>Business Value</span>
            <span className='bg-primary/10 text-primary px-3 py-1'>Continuous Learning</span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}