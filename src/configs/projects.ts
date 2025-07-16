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
  completionPercentage: 5,
  isComplete: false,
  estimatedCompletion: "End of July 2025",
  completedFeatures: [
    "Page structure setup",
    "Under construction design",
  ],
  inProgressFeatures: [
    "Project showcase design",
    "Project data modeling"
  ],
  plannedFeatures: [
    "Individual project pages",
    "Project filtering system",
    "Interactive project demos",
    "GitHub integration",
    "Technology stack visualization",
    "Project timeline view"
  ]
};