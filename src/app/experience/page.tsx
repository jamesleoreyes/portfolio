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
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto space-y-16'>
        <HeroSection />
        <ExperienceTimeline />
        <DetailedExperience />
        <KeyAchievements />
        <TechEvolution />
        <CTASection />
      </main>
    </div>
  );
}