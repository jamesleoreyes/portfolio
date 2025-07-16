import { WordRotate } from "@/components";

const words = [
  'Full-Stack Product Engineer',
  'UX-Driven Problem Solver',
  'Cross-Functional Translator',
  'Lifelong Learner',
  'Insatiably Curious',
  'Open for Work',
];

export default function HeroSection() {
  return (
    <section>
      <div className='space-y-6 flex flex-col items-start'>
        <div className='text-left'>
          <div className='space-y-1'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight'>
              James Reyes
            </h1>
            <div>
              <WordRotate
                words={words}
                duration={5000}
                motionProps={{
                  initial: { opacity: 0, y: -50 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 50 },
                }}
                className='text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-muted-foreground'
              />
            </div>
          </div>
        </div>
        {/* Introduction */}
        <div className='max-w-2xl mx-auto space-y-4 text-left'>
          <p className='text-lg text-primary leading-relaxed'>
            Passionate about creating scalable, maintainable software solutions.
            I specialize in modern web technologies and understand the importance of simplicity.
          </p>
        </div>
      </div>
    </section>
  );
}