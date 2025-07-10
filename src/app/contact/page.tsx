import {
  HeroSection,
  ContactMethodsSection,
  ContactInfoSection,
  SocialLinksSection
} from './components';

export { default as metadata } from './metadata';

export default function Contact() {
  return (
    <div className='flex items-center justify-center px-4 py-8'>
      <main className='max-w-4xl mx-auto space-y-12'>
        <HeroSection />
        <ContactMethodsSection />
        <ContactInfoSection />
        <SocialLinksSection />
      </main>
    </div>
  );
}