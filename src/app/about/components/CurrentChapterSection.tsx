import { Target, Heart, Lightbulb, Rocket } from "lucide-react";

export default function CurrentChapterSection() {
  return (
    <section className='space-y-8 border-b border-foreground/10 pb-16'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight mb-4'>Where I Am Now</h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          Today, I&apos;m building products that solve real problems. Every technical decision is guided by user impact,
          because great software isn't just about perfect algorithms - it&apos;s about meeting expectations and creating value.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <div className='flex items-start gap-4'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0'>
              <Heart className='w-5 h-5 text-primary' />
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-lg'>What Drives Me</h3>
              <p className='text-muted-foreground leading-relaxed'>
                I love the intersection of technical precision and user empathy. The moment when clean,
                scalable code meets real human needs — that&apos;s where the magic happens. I&apos;m passionate about
                building software that people actually want to use.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0'>
              <Lightbulb className='w-5 h-5 text-primary' />
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-lg'>How I Think</h3>
              <p className='text-muted-foreground leading-relaxed'>
                <em className="text-foreground">&quot;The more I learn, the less I know&quot;</em> — my favorite saying because it perfectly captures
                the learning journey. Every new skill reveals deeper rabbit holes, and I embrace that
                endless curiosity. I&apos;m always asking &quot;What&apos;s the goal?&quot; and &quot;How well are we aligned?&quot;
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <div className='flex items-start gap-4'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0'>
              <Target className='w-5 h-5 text-primary' />
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-lg'>Current Focus</h3>
              <p className='text-muted-foreground leading-relaxed'>
                I&apos;m doubling down on fundamentals while building SubTracked, a SaaS platform for collectible
                grading submissions. It&apos;s the perfect blend of technical challenge and real-world problem solving.
                I&apos;m also completing certifications and learning from the best in the field.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0'>
              <Rocket className='w-5 h-5 text-primary' />
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-lg'>What&apos;s Next</h3>
              <p className='text-muted-foreground leading-relaxed'>
                My goal is to land a full-stack engineering role where I can focus 100% on building great software.
                I want to work with teams that value both technical excellence and user experience. Once I&apos;m there,
                I&apos;ll get back to making music — because creativity feeds creativity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-accent p-8 border border-foreground/10 text-center space-y-4'>
        <h3 className='text-xl font-semibold'>The Full-Stack Product Engineer Mindset</h3>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          I don&apos;t just write code — I solve problems. Every technical decision is informed by user impact,
          business value, and long-term maintainability. From backend architecture to frontend experience,
          I think about the whole picture.
        </p>
        <div className='flex flex-wrap justify-center gap-4 text-sm'>
          <span className='bg-primary/10 text-primary px-3 py-1'>User-Centered Design</span>
          <span className='bg-primary/10 text-primary px-3 py-1'>Clean Architecture</span>
          <span className='bg-primary/10 text-primary px-3 py-1'>Business Value</span>
          <span className='bg-primary/10 text-primary px-3 py-1'>Continuous Learning</span>
        </div>
      </div>
    </section>
  );
} 