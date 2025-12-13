import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components';
import { cn } from '@/src/lib';
import { projects } from '@/src/data/projects';

interface TechStackProps {
  className?: string;
}

export default function TechStack({ className }: TechStackProps) {
  const { techStack } = projects.portfolio;

  // Group tech stack by category
  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category]!.push(tech);
    return acc;
  }, {} as Record<string, typeof techStack>);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend & UI';
      case 'backend': return 'Backend & API';
      case 'database': return 'Database & Storage';
      case 'deployment': return 'Deployment & Hosting';
      case 'analytics': return 'Analytics';
      case 'tools': return 'Development Tools';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'frontend': return 'User interface and client-side technologies';
      case 'backend': return 'Server-side logic and APIs';
      case 'database': return 'Data storage and management';
      case 'deployment': return 'Hosting, CDN, and deployment pipeline';
      case 'analytics': return 'Analytics and monitoring';
      case 'tools': return 'Development workflow and code quality';
      default: return '';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800';
      case 'backend': return 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800';
      case 'database': return 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800';
      case 'deployment': return 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800';
      case 'analytics': return 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800';
      case 'tools': return 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800';
      default: return 'bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800';
    }
  };

  const getTagColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'backend': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'database': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'deployment': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'analytics': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'tools': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getTagBorderColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'border-blue-500';
      case 'backend': return 'border-green-500';
      case 'database': return 'border-purple-500';
      case 'deployment': return 'border-orange-500';
      case 'analytics': return 'border-purple-500';
      case 'tools': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  return (
    <section className={cn('py-16 w-full px-4', className)}>
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>Technology Stack</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            A carefully selected set of modern technologies and tools that power this portfolio website,
            chosen for performance, developer experience, and maintainability.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Object.entries(groupedTech).map(([category, technologies]) => (
            <Card key={category} className={cn('h-full', getCategoryColor(category))}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {getCategoryTitle(category)}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {getCategoryDescription(category)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={cn(
                        'px-3 py-1 text-sm font-medium transition-colors border',
                        getTagColor(category),
                        getTagBorderColor(category),
                      )}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 