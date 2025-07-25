import { Suspense } from 'react';
import {
  ResumeHero,
  ProfessionalSummary,
  CoreCompetencies,
  Experience,
  TechnicalSkills,
  SoftSkills,
  Education,
  Certifications,
  StickyResumeHeader
} from './components';
import { lazy } from 'react';

const Projects = lazy(() => import('./components/Projects'));

export { default as metadata } from './metadata';

export default function Resume() {
  return (
    <div className="bg-background relative sm:border-x border-border/30">
      <StickyResumeHeader />

      <div className="mx-auto max-w-4xl">
        <div className="bg-secondary overflow-hidden border-b border-border/30">
          <ResumeHero />

          <div className="p-8 space-y-10">
            <ProfessionalSummary />
            <CoreCompetencies />
            <Experience />
            <Suspense fallback={
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="h-64 bg-gray-200 rounded"></div>
                  <div className="h-64 bg-gray-200 rounded"></div>
                </div>
              </div>
            }>
              <Projects />
            </Suspense>
            <TechnicalSkills />
            <SoftSkills />
            <Education />
            <Certifications />

          </div>
        </div>
      </div>
    </div>
  );
}