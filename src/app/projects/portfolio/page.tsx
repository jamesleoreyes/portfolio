import {
  ProjectHero,
  TechStack,
  ProjectFeatures,
  ScreenshotGallery,
  ProjectMetrics,
  ProjectStory
} from './components';
export { default as metadata } from './metadata';

export default function PortfolioProject() {
  return (
    <div className='flex items-center justify-center w-full'>
      <main className='w-full'>
        <ProjectHero />
        <TechStack />
        <ProjectFeatures />
        <ScreenshotGallery />
        <ProjectMetrics />
        <ProjectStory />
      </main>
    </div>
  );
}