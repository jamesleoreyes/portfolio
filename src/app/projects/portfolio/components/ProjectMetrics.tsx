import { TrendingUp, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

interface ProjectMetricsProps {
  className?: string;
}

export default function ProjectMetrics({ className }: ProjectMetricsProps) {
  const { metrics } = projects.portfolio;

  if (!metrics) return null;

  const getMetricIcon = (label: string) => {
    if (label.toLowerCase().includes('lighthouse') || label.toLowerCase().includes('performance')) {
      return TrendingUp;
    }
    if (label.toLowerCase().includes('accessibility') || label.toLowerCase().includes('practices')) {
      return Award;
    }
    if (label.toLowerCase().includes('bundle') || label.toLowerCase().includes('size')) {
      return Clock;
    }
    return Users;
  };

  const getMetricColor = (value: string) => {
    // Perfect scores get green
    if (value === '100' || value === 'All Green' || value === 'PWA') {
      return 'text-green-600 dark:text-green-400';
    }
    // Good scores get blue
    if (parseInt(value) >= 90) {
      return 'text-blue-600 dark:text-blue-400';
    }
    // Bundle size and other metrics get purple
    return 'text-purple-600 dark:text-purple-400';
  };

  const getCardStyle = (value: string) => {
    if (value === '100' || value === 'All Green') {
      return 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50';
    }
    if (value === 'PWA') {
      return 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/50';
    }
    return 'bg-accent/50 border-border/50';
  };

  return (
    <section className={cn("py-16 w-full px-4 border-t border-border/50", className)}>
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-primary mb-4'>Performance Metrics</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Measurable results that demonstrate the technical excellence and attention to detail
            that went into building this portfolio website.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {metrics.map((metric, index) => {
            const IconComponent = getMetricIcon(metric.label);
            const metricColor = getMetricColor(metric.value);
            const cardStyle = getCardStyle(metric.value);

            return (
              <Card key={index} className={cn('text-center h-full', cardStyle)}>
                <CardContent className="py-6">
                  <div className="mb-3">
                    <IconComponent className={cn('w-6 h-6 mx-auto', metricColor)} />
                  </div>
                  <div className={cn('text-2xl font-bold mb-1', metricColor)}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-tight">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-green-900 dark:text-green-100">
                  Perfect Lighthouse Scores
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-700 dark:text-green-300">
                Achieved 100/100 across all four Lighthouse metrics: Performance, Accessibility,
                Best Practices, and SEO. This demonstrates exceptional attention to web standards
                and user experience optimization.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-blue-900 dark:text-blue-100">
                  Optimized Performance
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-700 dark:text-blue-300">
                Core Web Vitals all in the green zone with minimal bundle size and efficient
                code splitting. Every optimization technique was carefully implemented to ensure
                lightning-fast loading times.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Technical Excellence Summary */}
        <Card className="bg-primary/5 border-border">
          <CardContent className="py-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Technical Excellence</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
                These metrics aren&apos;t just numbers—they represent countless hours of optimization,
                testing, and refinement. Every decision was made with performance, accessibility,
                and user experience in mind. The result is a portfolio that not only looks great
                but performs exceptionally across all modern web standards.
              </p>
              <div className="flex justify-center">
                <div className="bg-primary/10 px-6 py-3">
                  <span className="text-primary font-semibold">
                    🏆 Web Excellence Achieved
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 