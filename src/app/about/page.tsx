import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import type { Meta } from '@/types/App';
import { Button, SocialLinks } from '@/components';
import * as Icons from '@/components/icons';

const meta: Meta = {
  title: 'About Me',
  description: 'Learn more about James Reyes - Full Stack Product Engineer passionate about creating scalable, maintainable software solutions.'
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

interface IconComponent {
  name: string;
  icon: React.ElementType;
  url: string;
}

interface TechnicalSkills {
  languages: IconComponent[],
  frontend: IconComponent[],
  backend: IconComponent[],
  devops: IconComponent[],
  cloud: IconComponent[],
}

const techSkills: TechnicalSkills = {
  languages: [
    { name: 'JavaScript', icon: Icons.JavaScript, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: Icons.TypeScript, url: 'https://www.typescriptlang.org/' },
    { name: 'Python', icon: Icons.Python, url: 'https://www.python.org/' },
  ],
  frontend: [
    { name: 'HTML5', icon: Icons.HTML5, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: Icons.CSS, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'React', icon: Icons.React, url: 'https://react.dev/' },
    { name: 'Next.js', icon: Icons.NextJs, url: 'https://nextjs.org/' },
    { name: 'Tailwind CSS', icon: Icons.Tailwind, url: 'https://tailwindcss.com/' },
    { name: 'shadcn/ui', icon: Icons.Shadcn, url: 'https://ui.shadcn.com/' },
    { name: 'Vite', icon: Icons.Vite, url: 'https://vite.dev/' },
  ],
  backend: [
    { name: 'Node.js', icon: Icons.NodeJs, url: 'https://nodejs.org/' },
    { name: 'Deno', icon: Icons.Deno, url: 'https://deno.com/' },
    { name: 'Express', icon: Icons.Express, url: 'https://expressjs.com/' },
    { name: 'Flask', icon: Icons.Flask, url: 'https://flask.palletsprojects.com/' },
    { name: 'Supabase', icon: Icons.Supabase, url: 'https://supabase.com/' },
    // { name: 'REST API Design', icon: Icons.RestApi },
  ],
  devops: [
    { name: 'Git', icon: Icons.Git, url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: Icons.GitHub, url: 'https://github.com/' },
    // { name: 'CI/CD Pipelines', icon: Icons.CiCd },
    { name: 'Postman', icon: Icons.Postman, url: 'https://www.postman.com/' },
    { name: 'Sentry', icon: Icons.Sentry, url: 'https://sentry.io/' },
  ],
  cloud: [
    { name: 'Azure', icon: Icons.Azure, url: 'https://azure.microsoft.com/' },
    { name: 'Vercel', icon: Icons.Vercel, url: 'https://vercel.com/' },
    { name: 'Heroku', icon: Icons.Heroku, url: 'https://www.heroku.com/' },
    { name: 'Railway', icon: Icons.Railway, url: 'https://railway.app/' },
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
              Hi, I&apos;m James Reyes, a Product-Focused Engineer who loves building meaningful software that makes a difference.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className='space-y-6'>
          <h2 className='text-center sm:text-left text-3xl font-bold tracking-tight'>My Story</h2>
          <div className='text-center sm:text-left space-y-4 text-lg leading-relaxed'>
            <p>
              I&apos;m passionate about creating scalable, maintainable software solutions that solve real-world problems.
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
              <h3 className="text-center sm:text-left text-xl font-semibold">Languages</h3>
              <ul className="flex justify-center sm:justify-start text-center sm:text-left gap-3 text-muted-foreground">
                {techSkills.languages.map(({ name, icon: IconComponent, url }) => {
                  return (
                    <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                      <Link href={url} target='_blank' rel='noopener noreferrer'>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Frontend Development</h3>
              <ul className="flex justify-center sm:justify-start text-center sm:text-left gap-3 text-muted-foreground">
                {techSkills.frontend.map(({ name, icon: IconComponent, url }) => {
                  return (
                    <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                      <Link href={url} target='_blank' rel='noopener noreferrer'>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Backend Development</h3>
              <ul className="flex justify-center sm:justify-start text-center sm:text-left gap-3 text-muted-foreground">
                {techSkills.backend.map(({ name, icon: IconComponent, url }) => {
                  return (
                    <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                      <Link href={url} target='_blank' rel='noopener noreferrer'>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Tooling & DevOps</h3>
              <ul className='flex justify-center sm:justify-start text-center sm:text-left gap-3 text-muted-foreground'>
                {techSkills.devops.map(({ name, icon: IconComponent, url }) => {
                  return (
                    <li key={name} className="flex items-center gap-2" title={name} aria-label={name}>
                      <Link href={url} target='_blank' rel='noopener noreferrer'>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='space-y-3'>
              <h3 className='text-center sm:text-left text-xl font-semibold'>Cloud & Infrastructure</h3>
              <ul className='flex justify-center sm:justify-start text-center sm:text-left gap-3 text-muted-foreground'>
                {techSkills.cloud.map(({ name, icon: IconComponent, url }) => {
                  return (
                    <li key={name} className="flex items-center gap-2" title={name} aria-label={name} >
                      <Link href={url} target='_blank' rel='noopener noreferrer'>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" title={name} aria-label={name} />
                      </Link>
                    </li>
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
                Technology evolves rapidly, and I&apos;m committed to staying current with best practices,
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
          <h2 className='text-3xl font-bold tracking-tight'>Let&apos;s Work Together</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            I&apos;m always interested in new opportunities and meaningful projects.
            Whether you&apos;re looking to build something new or improve something existing,
            I&apos;d love to help bring your ideas to life.
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