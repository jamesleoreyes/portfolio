export interface ProjectsConfig {
  /** Completion percentage (0-100) */
  completionPercentage: number;
  /** Whether the page is ready for production */
  isComplete: boolean;
  /** Estimated completion date */
  estimatedCompletion: string;
  /** Features that have been completed */
  completedFeatures: string[];
  /** Features currently in development */
  inProgressFeatures: string[];
  /** Features planned for future */
  plannedFeatures: string[];
}

export const projectsConfig: ProjectsConfig = {
  completionPercentage: 75,
  isComplete: false,
  estimatedCompletion: "End of July 2025",
  completedFeatures: [
    "Page structure setup",
    "Under construction design",
    "Project showcase design",
    "Project data modeling",
    "Individual project pages",
    "Technology stack visualization",
    "Project card components",
    "Portfolio case study page",
    "Screenshot gallery with themes",
    "Project metrics dashboard",
    "Responsive grid layout"
  ],
  inProgressFeatures: [
    "Additional project case studies",
    "Project filtering by technology",
    "Performance optimizations"
  ],
  plannedFeatures: [
    "Project filtering system",
    "Interactive project demos",
    "GitHub integration",
    "Project timeline view",
    "Search functionality",
    "Tags and categories"
  ]
};