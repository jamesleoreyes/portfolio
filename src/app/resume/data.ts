import * as Icons from '@/components/icons';

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
  technologies: string[];
  highlights: string[];
  url?: string;
  github?: string;
}

interface EducationItem {
  institution: string;
  degree: string;
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
  languages: Array<{ name: string; icon: React.ElementType; url: string }>;
  frontend: Array<{ name: string; icon: React.ElementType; url: string }>;
  backend: Array<{ name: string; icon: React.ElementType; url: string }>;
  devops: Array<{ name: string; icon: React.ElementType; url: string }>;
  cloud: Array<{ name: string; icon: React.ElementType; url: string }>;
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

const resumeData: ResumeData = {
  personalInfo: {
    name: 'James Reyes',
    title: 'Full-Stack Product Engineer',
    summary: [
      'As a Full-Stack Product Engineer, I’ve cut infrastructure costs by 90%, automated systems processing 100K+ webhooks, and built tools that reduced manual work by over 98%. I specialize in building intuitive, scalable software that solves real user problems, from backend architecture to frontend experience, always guided by what the end user needs.',
      'My background spans HR, payroll, and timekeeping tech, with deep experience in modern stacks like TypeScript, React, Next.js, and Supabase. I thrive at the intersection of technical precision and product empathy, where clean code meets real-world impact. I’m currently seeking roles where I can help design and ship thoughtful products in collaborative, growth-minded teams.'
    ],
    contact: {
      email: 'jamesleoreyes@gmail.com',
      website: 'jamesleoreyes.com',
    }
  },
  experience: [
    {
      company: 'Cimplx HR, Inc.',
      position: 'Full-Stack Product Engineer',
      location: 'Remote',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description: 'Lead full-stack development of HR management platform serving 10,000+ users. Architect scalable solutions using modern web technologies and cloud infrastructure.',
      achievements: [
        'Improved application performance by 40% through code optimization and database query improvements',
        'Led migration from legacy system to modern React/Next.js architecture',
        'Implemented automated testing suite reducing bugs in production by 60%',
        'Mentored 3 junior developers and established coding standards and best practices',
        'Designed and built RESTful APIs serving 1M+ requests daily'
      ],
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Azure', 'Docker']
    },
    {
      company: 'TechStart Solutions',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      startDate: 'Jun 2021',
      endDate: 'Dec 2022',
      description: 'Developed responsive web applications for enterprise clients using React ecosystem. Collaborated with UX/UI designers to create intuitive user interfaces.',
      achievements: [
        'Built 5 client-facing applications serving 50,000+ monthly active users',
        'Reduced bundle size by 35% through code splitting and optimization techniques',
        'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
        'Established component library used across 8 different projects',
        'Integrated with 15+ third-party APIs and services'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Express.js', 'MongoDB']
    },
    {
      company: 'Digital Innovations Lab',
      position: 'Full-Stack Developer',
      location: 'Austin, TX',
      startDate: 'Mar 2020',
      endDate: 'May 2021',
      description: 'Developed full-stack web applications for startups and small businesses. Worked directly with clients to understand requirements and deliver custom solutions.',
      achievements: [
        'Delivered 12 web applications from concept to deployment',
        'Maintained 99.9% uptime across all deployed applications',
        'Implemented payment processing systems handling $500K+ in transactions',
        'Reduced development time by 30% through reusable component architecture',
        'Provided technical consulting for 20+ client projects'
      ],
      technologies: ['JavaScript', 'Python', 'Flask', 'React', 'PostgreSQL', 'Heroku', 'Stripe API']
    }
  ],
  projects: [
    {
      name: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js 15 and TypeScript. Features dark/light mode, PWA capabilities, and optimized performance.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      highlights: [
        'Achieved 100% Lighthouse performance score',
        'Implemented PWA features for offline functionality',
        'Built with accessibility-first approach',
        'Responsive design optimized for all devices'
      ],
      url: 'https://jamesreyes.dev',
      github: 'https://github.com/jamesreyes/portfolio'
    },
    {
      name: 'Task Management SaaS',
      description: 'Full-stack task management application with real-time collaboration features. Built for teams to manage projects and track progress efficiently.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
      highlights: [
        'Real-time collaboration with WebSocket implementation',
        'Supports 1000+ concurrent users',
        'Advanced filtering and search capabilities',
        'Role-based access control system'
      ],
      github: 'https://github.com/jamesreyes/task-manager'
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Analytics dashboard for e-commerce businesses to track sales, customer behavior, and inventory. Features interactive charts and real-time data updates.',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js', 'AWS'],
      highlights: [
        'Processes 100K+ data points daily',
        'Interactive data visualizations',
        'Automated report generation',
        'Integration with multiple payment providers'
      ]
    }
  ],
  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: 'Aug 2016',
      endDate: 'May 2020',
      gpa: '3.8/4.0',
      honors: ['Magna Cum Laude', 'Dean\'s List (6 semesters)', 'Computer Science Honor Society']
    }
  ],
  certifications: [
    {
      name: 'Meta Front-End Developer',
      issuer: 'Coursera',
      date: 'In Progress',
    },
    {
      name: 'Meta Back-End Developer',
      issuer: 'Coursera',
      date: 'In Progress',
    },
    {
      name: 'Full-Stack Engineer',
      issuer: 'Codecademy',
      date: 'In Progress',
    }
  ],
  skills: {
    languages: [
      { name: 'JavaScript', icon: Icons.JavaScript, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: Icons.TypeScript, url: 'https://www.typescriptlang.org/' },
      { name: 'Python', icon: Icons.Python, url: 'https://www.python.org/' },
    ],
    frontend: [
      { name: 'HTML5', icon: Icons.HTML5, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', icon: Icons.CSS, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'React', icon: Icons.React, url: 'https://react.dev/' },
      { name: 'Next.js', icon: Icons.NextJs, url: 'https://nextjs.org/' },
      { name: 'Tailwind CSS', icon: Icons.Tailwind, url: 'https://tailwindcss.com/' },
      { name: 'shadcn/ui', icon: Icons.Shadcn, url: 'https://ui.shadcn.com/' },
      { name: 'Vite', icon: Icons.Vite, url: 'https://vite.dev/' },
    ],
    backend: [
      { name: 'Node.js', icon: Icons.NodeJs, url: 'https://nodejs.org/' },
      { name: 'Deno', icon: Icons.Deno, url: 'https://deno.com/' },
      { name: 'Express', icon: Icons.Express, url: 'https://expressjs.com/' },
      { name: 'Flask', icon: Icons.Flask, url: 'https://flask.palletsprojects.com/' },
      { name: 'Supabase', icon: Icons.Supabase, url: 'https://supabase.com/' },
    ],
    devops: [
      { name: 'Git', icon: Icons.Git, url: 'https://git-scm.com/' },
      { name: 'GitHub', icon: Icons.GitHub, url: 'https://github.com/' },
      { name: 'Postman', icon: Icons.Postman, url: 'https://www.postman.com/' },
      { name: 'Sentry', icon: Icons.Sentry, url: 'https://sentry.io/' },
    ],
    cloud: [
      { name: 'Azure', icon: Icons.Azure, url: 'https://azure.microsoft.com/' },
      { name: 'Vercel', icon: Icons.Vercel, url: 'https://vercel.com/' },
      { name: 'Heroku', icon: Icons.Heroku, url: 'https://www.heroku.com/' },
      { name: 'Railway', icon: Icons.Railway, url: 'https://railway.app/' },
    ]
  },
  coreCompetencies: [
    'Full-Stack Development',
    'System Architecture',
    'API Design & Development',
    'Cloud Infrastructure',
    'DevOps & CI/CD',
    'Technical Leadership',
    'Code Review & Mentoring',
    'Performance Optimization',
    'Security Best Practices',
    'Test-Driven Development'
  ]
};

export { resumeData };
export type { ResumeData, ExperienceItem, ProjectItem, EducationItem, CertificationItem, TechnicalSkills }; 