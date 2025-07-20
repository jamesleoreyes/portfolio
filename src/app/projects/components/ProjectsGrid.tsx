import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  const projectsArray = Object.values(projects);

  if (projectsArray.length === 0) {
    return (
      <section className='py-16 w-full px-4'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='bg-muted p-12'>
            <h3 className='text-xl font-semibold mb-2'>No Projects Yet</h3>
            <p className='text-muted-foreground'>
              Projects are currently being added. Check back soon for updates!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-16 w-full px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsArray.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}