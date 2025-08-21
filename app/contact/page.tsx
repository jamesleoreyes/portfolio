import {
  HeroSection,
  ContactMethodsSection,
  ContactInfoSection,
  SocialLinksSection
} from './components';

export { default as metadata } from './metadata';

export default function Contact() {
  return (
    <div className='flex items-center justify-center w-full'>
      <main className='w-full'>
        <HeroSection className='px-4' />
        <ContactMethodsSection className='px-4' />
        <ContactInfoSection className='px-4' />
        <SocialLinksSection className='px-4' />
      </main>
    </div>
  );
}