import {
  HeroSection,
  IntroSection,
  TechSkillsSection,
  SoftSkillsSection,
  ValuesSection,
  CTASection
} from './components';
import { techSkills } from './data';
export { default as metadata } from './metadata';

export default function About() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto space-y-12'>
        <HeroSection />
        <IntroSection />
        <TechSkillsSection techSkills={techSkills} />
        <SoftSkillsSection />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  );
}