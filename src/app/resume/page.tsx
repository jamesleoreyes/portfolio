import { Suspense } from 'react';
import {
  ResumeHeader,
  ProfessionalSummary,
  CoreCompetencies,
  Experience,
  TechnicalSkills,
  Education,
  Certifications,
  ResumeActions
} from './components';
import { lazy } from 'react';

const Projects = lazy(() => import('./components/Projects'));

export { default as metadata } from './metadata';

export default function Resume() {
  return (
    <div className="bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 md:px-0 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Resume</h1>
            <ResumeActions />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-0 md:px-0 py-0 md:py-8 max-w-4xl">
        <div className="bg-card shadow-lg overflow-hidden">
          <ResumeHeader />

          <div className="p-8 space-y-12">
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
            <Education />
            <Certifications />

          </div>
        </div>
      </div>
    </div>
  );
}