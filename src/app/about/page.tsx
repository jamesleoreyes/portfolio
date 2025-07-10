import {
  HeroSection,
  JourneySection,
  TurningPointsSection,
  CurrentChapterSection,
  CTASection
} from './components';

export { default as metadata } from './metadata';

export default function About() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto space-y-16'>
        <HeroSection />
        <JourneySection />
        <TurningPointsSection />
        <CurrentChapterSection />
        <CTASection />
      </main>
    </div>
  );
}