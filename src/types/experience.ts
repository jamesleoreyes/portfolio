import { LucideIcon } from 'lucide-react';

type ExperienceProject = {
  name: string;
  description: string;
  impact: string;
  technologies: string[];
  challenges?: string[];
  outcomes?: string[];
}

type ExperienceAchievement = {
  title: string;
  description: string;
  impact: string;
  metrics?: string;
  icon: LucideIcon;
  badgeColor: string;
}

type ExperienceItemType = 'internship' | 'full-time' | 'side-project';
type ExperienceItemStatus = 'completed' | 'current' | 'upcoming';
type ExperienceItem = {
  id: string;
  tabName: string;
  company: {
    name: string;
    url: string;
  }
  position: string;
  type: ExperienceItemType;
  location: string;
  startDate: string;
  endDate: string;
  status: ExperienceItemStatus
  overview: string;
  context: string;
  keyProjects: ExperienceProject[];
  achievements: ExperienceAchievement[];
  technologies: string[];
  learnings: string[];
  nextSteps?: string[];
  image?: string;
}

type TechEvolutionItem = {
  period: string;
  technologies: {
    name: string;
    url: string | null;
  }[];
  focus: string;
  milestone: string;
}

type ExperienceData = {
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
  ExperienceItemStatus,
  ExperienceItemType,
  TechEvolutionItem,
  ExperienceData
}; 