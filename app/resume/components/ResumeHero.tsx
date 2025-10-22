import { Globe, Mail } from 'lucide-react';
import Link from 'next/link';
import { resumeData } from '@/src/data';

export default function ResumeHero() {
  const { personalInfo } = resumeData;

  return (
    <header className='bg-primary text-primary-foreground p-8'>
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>{personalInfo.name}</h1>
        <p className='text-xl'>{personalInfo.title}</p>

        <div className='flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-12 text-sm'>
          <div className='relative flex items-center gap-2'>
            <Mail className='w-4 h-4 absolute -left-6.5 top-1.25' />
            <Link
              href={`mailto:${personalInfo.contact.email}`}
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-7 decoration-muted-foreground hover:decoration-background decoration-[1.5px] transition-colors duration-200'
            >
              {personalInfo.contact.email}
            </Link>
          </div>
          <div className='relative flex items-center gap-2'>
            <Globe className='w-4 h-4 absolute -left-6.5 top-1.25' />
            <Link
              href='/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-7 decoration-muted-foreground hover:decoration-background decoration-[1.5px] transition-colors duration-200'
            >
              {personalInfo.contact.website}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}