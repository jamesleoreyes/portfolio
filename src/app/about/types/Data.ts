interface IconComponent {
  name: string;
  icon: React.ElementType;
  url: string;
}

interface TechnicalSkills {
  languages: IconComponent[],
  frontend: IconComponent[],
  backend: IconComponent[],
  devops: IconComponent[],
  cloud: IconComponent[],
}

export type {
  IconComponent,
  TechnicalSkills
}