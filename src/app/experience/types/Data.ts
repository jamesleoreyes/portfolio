interface ExperienceProject {
  name: string;
  description: string;
  impact: string;
  technologies: string[];
  challenges?: string[];
  outcomes?: string[];
}

interface ExperienceAchievement {
  title: string;
  description: string;
  impact: string;
  metrics?: string;
}

interface ExperienceItem {
  id: string;
  company: {
    name: string;
    url: string;
  }
  position: string;
  type: 'internship' | 'full-time' | 'side-project';
  location: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'current' | 'upcoming';
  overview: string;
  context: string;
  keyProjects: ExperienceProject[];
  achievements: ExperienceAchievement[];
  technologies: string[];
  learnings: string[];
  nextSteps?: string[];
  image?: string;
}

interface TechEvolutionItem {
  period: string;
  technologies: string[];
  focus: string;
  milestone: string;
}

interface ExperienceData {
  experiences: ExperienceItem[];
  techEvolution: TechEvolutionItem[];
  overallStats: {
    totalExperience: string;
    projectsBuilt: number;
    technologiesUsed: number;
    problemsSolved: number;
  };
}

export type {
  ExperienceProject,
  ExperienceAchievement,
  ExperienceItem,
  TechEvolutionItem,
  ExperienceData
}; 