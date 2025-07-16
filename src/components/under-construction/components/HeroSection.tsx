import { Construction, Calendar } from "lucide-react";
import { Progress } from "@/components";
import { projectsConfig } from "@/configs/projects";

export default function HeroSection() {
  const { completionPercentage, estimatedCompletion } = projectsConfig;

  return (
    <section className="border-b border-border/50 py-16 w-full px-4">
      <div className='max-w-4xl mx-auto text-center space-y-8'>
        {/* Construction Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <Construction className="w-20 h-20 text-primary animate-bounce" />
          </div>
        </div>

        {/* Title */}
        <div className='space-y-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary'>
            Projects Page
          </h1>
          <h2 className='text-2xl sm:text-3xl font-semibold text-muted-foreground'>
            Under Construction
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            I&apos;m building something amazing here! This page will showcase my projects,
            from side experiments to production applications. Stay tuned!
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-accent p-6 border border-foreground/10 max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">Development Progress</h3>
            <span className="text-2xl font-bold text-primary">{completionPercentage}%</span>
          </div>

          <Progress
            value={completionPercentage}
            className="h-3"
          />

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Estimated completion: {estimatedCompletion}</span>
          </div>
        </div>
      </div>
    </section>
  );
}