import {
  HeroSection,
  ExperienceTimeline,
  DetailedExperience,
  KeyAchievements,
  TechEvolution,
  CTASection
} from './components';

export { default as metadata } from './metadata';

export default function Experience() {
  return (
    <div className='flex items-center justify-center w-full'>
      <main className='w-full'>
        <HeroSection className='px-4' />
        <ExperienceTimeline className='px-4' />
        <DetailedExperience className='px-4' />
        <KeyAchievements className='px-4' />
        <TechEvolution className='px-4' />
        <CTASection className='px-4' />
      </main>
    </div>
  );
}