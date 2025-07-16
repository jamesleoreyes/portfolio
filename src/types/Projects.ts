interface TechStack {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'tools' | 'analytics';
  icon?: string;
}

interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  status: 'live' | 'development' | 'archived';
  type: 'personal' | 'professional' | 'open-source';

  // Links
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;

  // Visual assets
  screenshots: {
    default: string[];
    light?: string[];
    dark?: string[];
  };
  featuredImage: {
    default: string;
    light?: string;
    dark?: string;
  };

  // Technical details
  techStack: TechStack[];
  features: ProjectFeature[];
  challenges?: ProjectChallenge[];

  // Timeline
  startDate: string;
  endDate?: string;
  lastUpdated: string;

  // Metrics
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface Projects {
  portfolio: Project;
}

export type { Project, ProjectFeature, ProjectChallenge, TechStack, Projects };