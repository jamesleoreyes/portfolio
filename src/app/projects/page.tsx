import { shouldShowUnderConstruction } from '@/configs/projects';
import UnderConstruction from '@/components/under-construction/UnderConstruction';
import ProjectsContent from './components/ProjectsContent';

export { default as metadata } from './metadata';

export default function Projects() {
  if (shouldShowUnderConstruction()) {
    return <UnderConstruction />;
  }

  return <ProjectsContent />;
}