import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button, SocialLinks } from '@/components';
import type { Meta } from '@/types/App';
import { JavaScriptIcon, PythonIcon, TypeScriptIcon } from '@/components/icons';

const meta: Meta = {
  title: 'About Me',
  description: 'Learn more about James Reyes - Full Stack Product Engineer passionate about creating scalable, maintainable software solutions.'
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

interface TechnicalSkills {
  languages: Record<string, React.ElementType>,
  frontend: string[],
  backend: string[],
  devops: string[],
  cloud: string[],
}

const techSkills: TechnicalSkills = {
  languages: {
    'JavaScript': JavaScriptIcon,
    'TypeScript': TypeScriptIcon,
    'Python': PythonIcon,
  },
  frontend: [
    'HTML + CSS',
    'React',
    'Next.js',
    'Tailwind CSS',
    'shadcn/ui',
    'Vite',
  ],
  backend: [
    'Node.js',
    'Deno',
    'Express',
    'Flask',
    'Supabase',
    'REST API Design',
  ],
  devops: [
    'Git',
    'GitHub',
    'CI/CD Pipelines',
    'Postman',
    'Sentry'
  ],
  cloud: [
    'Azure',
    'Vercel',
    'Heroku',
    'Railway',
    'Render',
  ]
}

export default function About() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto space-y-12'>
        {/* Hero Section */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10 text-center lg:text-left space-y-8 lg:space-y-0'>
          <Image
            src='/media/me.jpg'
            alt='James Reyes'
            width={300}
            height={300}
            className='shadow-2xl'
            draggable={false}
          />
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
              About Me
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl'>
              Hi, I'm James Reyes, a Product-Focused Engineer who loves building meaningful software that makes a difference.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className='space-y-6'>
          <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>My Story</h2>
          <div className='text-center sm:text-left space-y-4 text-lg leading-relaxed'>
            <p>
              I'm passionate about creating scalable, maintainable software solutions that solve real-world problems.
              My journey in technology began with a curiosity about how things work, which evolved into a deep
              appreciation for clean code, thoughtful architecture, and user-centered design.
            </p>
            <p>
              As a Product-Focused Engineer, I bridge the gap between technical implementation and business value.
              I believe that the best software is not just technically sound, but also intuitive, accessible,
              and truly useful to the people who use it.
            </p>
            <p>
              I specialize in modern web technologies and understand the importance of simplicity - both in code
              and in user experience. Every line of code I write is guided by principles of maintainability,
              scalability, and performance.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className='space-y-6'>
          <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>Technical Skills</h2>
          <div className='flex flex-col gap-6'>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Languages</h3>
              <div className="flex text-center sm:text-left gap-3 text-muted-foreground">
                {Object.entries(techSkills.languages).map(([name, IconComponent]) => {
                  return (
                    <p key={name} className="flex items-center gap-2">
                      <IconComponent className="w-15 h-15" title={name}/>
                    </p>
                  )
                })}
              </div>
            </div>
            <div className='space-y-3'>
              <h3 className='text-xl font-semibold'>Frontend Development</h3>
              <ul className='text-center sm:text-left space-y-1 text-muted-foreground'>
                {techSkills.frontend.map(item => {
                  return (
                    <li key={item}>{item}</li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-xl font-semibold'>Backend Development</h3>
              <ul className='text-center sm:text-left space-y-1 text-muted-foreground'>
                {techSkills.backend.map(item => {
                  return (
                    <li key={item}>{item}</li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-xl font-semibold'>Tooling & DevOps</h3>
              <ul className='text-center sm:text-left space-y-1 text-muted-foreground'>
                {techSkills.devops.map(item => {
                  return (
                    <li key={item}>{item}</li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-xl font-semibold'>Cloud & Infrastructure</h3>
              <ul className='text-center sm:text-left space-y-1 text-muted-foreground'>
                {techSkills.cloud.map(item => {
                  return (
                    <li key={item}>{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className='space-y-6'>
          <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>Soft Skills</h2>
          <div className='flex flex-col items-center sm:items-start sm:grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="space-y-3">
              <h3 className="text-center sm:text-left text-xl font-semibold">Communication</h3>
              <p className="text-center sm:text-left text-muted-foreground">
                Clear, transparent communication across teams and stakeholders
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Collaboration</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Working effectively with diverse teams to achieve shared goals
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Openness to Feedback</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Actively seeking and incorporating constructive feedback for growth
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Adaptability</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Embracing change and adjusting approaches based on new requirements
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Curiosity</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Driven by genuine interest in understanding problems and solutions
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Continuous Learning</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Committed to staying current with technologies and best practices
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Empathy</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Understanding user needs and team perspectives to build better solutions
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Accountability</h3>
              <p className='text-center sm:text-left text-muted-foreground'>
                Taking ownership of decisions, code quality, and project outcomes
              </p>
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className='space-y-6'>
          <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>My Approach</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>User-Centered Design</h3>
              <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
                Every technical decision I make is informed by how it will impact the end user.
                Great software should be intuitive and delightful to use.
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Clean Code</h3>
              <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
                I believe in writing code that is not just functional, but readable, maintainable,
                and scalable. Future developers (including myself) will thank me later.
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Continuous Learning</h3>
              <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
                Technology evolves rapidly, and I'm committed to staying current with best practices,
                new tools, and emerging patterns in software development.
              </p>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Collaboration</h3>
              <p className='text-center sm:text-left text-muted-foreground leading-relaxed'>
                The best products are built by teams. I value clear communication, empathy,
                and the diverse perspectives that make great software possible.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='space-y-6 text-center border-t pt-12'>
          <h2 className='text-3xl font-bold tracking-tight'>Let's Work Together</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            I'm always interested in new opportunities and meaningful projects.
            Whether you're looking to build something new or improve something existing,
            I'd love to help bring your ideas to life.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button asChild size='lg' className='min-w-[140px]'>
              <Link href='/projects'>
                View My Work
              </Link>
            </Button>

            <Button asChild size='lg' variant='ghost' className='min-w-[140px]'>
              <Link href='/contact'>
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className='flex justify-center'>
            <SocialLinks />
          </div>
        </section>
      </main>
    </div>
  );
} 