import { HeroSection, ProjectsGrid } from './components';
export { default as metadata } from './metadata';

export default function Projects() {
  return (
    <div className='flex items-center justify-center w-full'>
      <main className='w-full'>
        <HeroSection />
        <ProjectsGrid />
      </main>
    </div>
  );
}