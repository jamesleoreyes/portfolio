interface ContactInfo {
  email: string;
  website: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ProjectItem {
  name: string;
  description: string;
  completionPercentage?: number;
  technologies: string[];
  highlights: string[];
  image?: {
    light: string;
    dark: string;
  };
  projectHref?: string;
  liveUrl?: string;
  github?: string;
}

interface EducationItem {
  institution: string;
  degree?: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

interface TechnicalSkills {
  languages: { name: string; icon: React.ElementType; url: string }[];
  frontend: { name: string; icon: React.ElementType; url: string }[];
  backend: { name: string; icon: React.ElementType; url: string }[];
  devops: { name: string; icon: React.ElementType; url: string }[];
  cloud: { name: string; icon: React.ElementType; url: string }[];
}

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    summary: string[];
    contact: ContactInfo;
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: TechnicalSkills;
  coreCompetencies: string[];
}

export type {
  ContactInfo,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  TechnicalSkills,
  ResumeData
};