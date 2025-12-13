import { CheckCircle, Zap, Smartphone, Palette, Search, Shield, Code, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components';
import { cn } from '@/src/lib';
import { projects } from '@/src/data/projects';

interface ProjectFeaturesProps {
  className?: string;
}

const featureIcons = {
  'Responsive Design': Smartphone,
  'Dark/Light Mode': Palette,
  'Progressive Web App': Globe,
  'Performance Optimized': Zap,
  'SEO & Accessibility': Search,
  'Dynamic Content': Code,
  'Component Library': Code,
  'Modern Deployment': Shield,
};

export default function ProjectFeatures({ className }: ProjectFeaturesProps) {
  const { features } = projects['pokedex-cli'];

  const getFeatureIcon = (title: string) => {
    const IconComponent = featureIcons[title as keyof typeof featureIcons] || CheckCircle;
    return IconComponent;
  };

  return (
    <section className={cn('py-16 w-full px-4 border-t border-border/50', className)}>
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>Key Features</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Every feature of this portfolio was carefully designed and implemented with purpose,
            focusing on user experience, performance, and modern web standards.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {features.map((feature, index) => {
            const IconComponent = getFeatureIcon(feature.title);

            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="-mt-3">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="py-6 text-center">
              <div className="mb-3">
                <div className="bg-blue-500 p-3 w-fit mx-auto">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Lightning Fast
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Excellent PageSpeed Insight scores across all metrics with optimized loading and rendering.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="py-6 text-center">
              <div className="mb-3">
                <div className="bg-green-500 p-3 w-fit mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                Accessible & Secure
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                WCAG compliant with comprehensive security measures and SEO optimization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="py-6 text-center">
              <div className="mb-3">
                <div className="bg-purple-500 p-3 w-fit mx-auto">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                Universal Design
              </h3>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Responsive across all devices with progressive enhancements for a great user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 