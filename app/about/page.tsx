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
    <div className='flex items-center justify-center w-full'>
      <main className='w-full'>
        <HeroSection className='px-4' />
        <JourneySection className='px-4' />
        <TurningPointsSection className='px-4' />
        <CurrentChapterSection className='px-4' />
        <CTASection className='px-4' />
      </main>
    </div>
  );
}