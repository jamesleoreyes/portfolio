import { CheckCircle, Clock, Target } from 'lucide-react';
import { projectsConfig } from '@/configs/projects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';

export default function FeaturesStatus() {
  const { completedFeatures, inProgressFeatures, plannedFeatures } = projectsConfig;

  return (
    <section className="py-16 w-full px-4">
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>What&apos;s Being Built</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Here&apos;s a breakdown of the features planned for this page and their current status.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Completed Features */}
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                Completed
              </CardTitle>
              <CardDescription className="text-green-600 dark:text-green-500">
                Features that are ready to go
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {completedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-green-700 dark:text-green-300">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* In Progress Features */}
          <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <Clock className="w-5 h-5" />
                In Progress
              </CardTitle>
              <CardDescription className="text-yellow-600 dark:text-yellow-500">
                Currently being developed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {inProgressFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Clock className="w-3 h-3 text-yellow-500 animate-spin" />
                  <span className="text-yellow-700 dark:text-yellow-300">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Planned Features */}
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <Target className="w-5 h-5" />
                Planned
              </CardTitle>
              <CardDescription className="text-blue-600 dark:text-blue-500">
                Features coming soon
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {plannedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Target className="w-3 h-3 text-blue-500" />
                  <span className="text-blue-700 dark:text-blue-300">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}