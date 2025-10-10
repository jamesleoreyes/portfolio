type TechStackCategory = 'frontend' | 'backend' | 'database' | 'deployment' | 'tools' | 'analytics';
type TechStack = {
  name: string;
  category: TechStackCategory;
  icon?: string;
}

type ProjectFeature = {
  title: string;
  description: string;
  icon?: string;
}

type ProjectChallenge = {
  title: string;
  description: string;
  solution: string;
}

type ProjectStatus = 'live' | 'development' | 'archived' | 'coming-soon';
type ProjectType = 'personal' | 'professional' | 'open-source';
type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  type: ProjectType;

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
  theReyesVault: Project;
}

export type {
  Project,
  ProjectStatus,
  ProjectType,
  ProjectFeature,
  ProjectChallenge,
  TechStack,
  TechStackCategory,
  Projects
};