import {
  ResumeHeader,
  ProfessionalSummary,
  CoreCompetencies,
  Experience,
  Projects,
  TechnicalSkills,
  Education,
  Certifications,
  ResumeActions
} from './components';
export { default as metadata } from './metadata';

export default function Resume() {
  return (
    <div className="bg-background">
      {/* Header with actions */}
      <div className="border-b">
        <div className="container mx-auto px-4 md:px-0 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Resume</h1>
            <ResumeActions />
          </div>
        </div>
      </div>

      {/* Resume content */}
      <div className="container mx-auto px-0 md:px-0 py-0 md:py-8 max-w-4xl">
        <div className="bg-card shadow-lg overflow-hidden">
          {/* Header Section */}
          <ResumeHeader />

          {/* Main Content */}
          <div className="p-8 space-y-12">
            <ProfessionalSummary />
            <CoreCompetencies />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <Education />
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
}