import {
  ProjectHero,
  TechStack,
  ProjectFeatures,
  ProjectStory
} from './components';
export { default as metadata } from './metadata';

export default function PokedexCliProject() {
  return (
    <div className='flex items-center justify-center w-full'>
      <main className='w-full'>
        <ProjectHero />
        <TechStack />
        <ProjectFeatures />
        <ProjectStory />
      </main>
    </div>
  );
}