import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TechSkills from './components/TechSkillsSection';
import SoftSkills from './components/SoftSkillsSection';
import ValuesSection from './components/ValuesSection';
import CTASection from './components/CTASection';
import { techSkills } from './data';
export { default as metadata } from './metadata';

export default function About() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto space-y-12'>
        <HeroSection />
        <IntroSection />
        <TechSkills techSkills={techSkills} />
        <SoftSkills />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  );
}