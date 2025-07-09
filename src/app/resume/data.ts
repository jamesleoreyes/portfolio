import * as Icons from '@/components/icons';
import type { ResumeData, ExperienceItem, ProjectItem, EducationItem, CertificationItem, TechnicalSkills } from './types/data';

const resumeData: ResumeData = {
  personalInfo: {
    name: 'James Reyes',
    title: 'Full-Stack Product Engineer',
    summary: [
      'As a Full-Stack Product Engineer, I\'ve cut infrastructure costs by 90%, automated systems processing 100K+ webhooks, and built tools that reduced manual work by over 98%. I specialize in building intuitive, scalable software that solves real user problems, from backend architecture to frontend experience, always guided by what the end user needs.',
      'My background spans HR, payroll, and timekeeping tech, with deep experience in modern stacks like TypeScript, React, Next.js, and Supabase. I thrive at the intersection of technical precision and product empathy, where clean code meets real-world impact. I\'m currently seeking roles where I can help design and ship thoughtful products in collaborative, growth-minded teams.'
    ],
    contact: {
      email: 'jamesleoreyes@gmail.com',
      website: 'jamesleoreyes.com',
    }
  },
  experience: [
    {
      company: 'SubTracked',
      position: 'Co-Founder & Lead Developer',
      location: 'Rock Hill, SC',
      startDate: 'Dec 2024',
      endDate: 'Present',
      description: 'Designed and built a full-stack platform for collectible grading submissions, enabling businesses to track and manage orders across multiple categories.',
      achievements: [
        'Cut monthly infrastructure costs by 90% by migrating from Azure to Supabase and Railway, while simplifying CI/CD and environment management',
        'Architected backend with Express and Supabase (PostgreSQL, auth, storage, edge functions)',
        'Enabled real-time submission tracking with custom serverless functions and personalized dashboards',
        'Designed for scalability and future integrations with third-party vendors and marketplace features'
      ],
      technologies: ['TypeScript', 'Node.js', 'Express.js', 'React.js', 'Supabase', 'Edge Functions', 'UI/UX Design']
    },
    {
      company: 'Cimplx HR, Inc.',
      position: 'Full-Stack Developer / Integration Engineer',
      location: 'Rock Hill, SC',
      startDate: 'Sep 2023',
      endDate: 'Present',
      description: 'Architected and developed enterprise-grade HR/payroll integration platform synchronizing employee data between Factorial HR and UKG Ready systems for multiple clients.',
      achievements: [
        'Built event-driven microservices architecture using Azure Storage Queues and Key Vault, successfully processing 100,000+ webhook events',
        'Developed timekeeping tools including an ID-linked QR code generator, a document uploader with auto-mapping, and a timecard processor that reduced import time by over 98%',
        'Implemented comprehensive TypeScript APIs with Express.js, SQL Server integration, and automated retry/error handling reducing manual intervention by 95%',
        'Streamlined internal operations by contributing across backend and frontend stacks, improving delivery speed and system visibility'
      ],
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Azure DevOps', 'Azure Web Apps', 'Azure SQL Server', 'Azure Key Vault', 'Azure Queue Storage', 'REST APIs']
    },
    {
      company: 'Cimplx HR, Inc.',
      position: 'Full-Stack Developer (Internship)',
      location: 'Rock Hill, SC',
      startDate: 'Jul 2023',
      endDate: 'Sep 2023',
      description: 'Built a subscription management platform for the Abenity coupon system using Python, Flask, and ChargeBee.',
      achievements: [
        'Integrated webhook-based licensing and dynamic user provisioning via custom access tiers',
        'Developed frontend with vanilla JS, HTML, and CSS to support full subscription lifecycle (onboarding, limits, access)',
        'Created responsive user interface to streamline the subscription lifecycle'
      ],
      technologies: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'ChargeBee', 'GitLab']
    }
  ],
  projects: [
    {
      name: 'The Reyes Vault',
      description: 'A digital vault for preserving family memories. Forever, searchable, and safe in the cloud. Created to prevent the permanent loss of analog family memories from disasters like fires.',
      technologies: ['Next.js', 'TypeScript', 'React', 'shadcn/ui', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Cloudflare R2', 'Vercel'],
      highlights: [
        'Disaster-Resilient Storage: Secure cloud backups ensure memories outlast physical risks',
        'Role-Based Access: Admin-managed user accounts and permissions, with protected routes for privacy',
        'Admin Dashboard: Manage user creation, roles, and access',
        'Rich Metadata & Search: Tag, describe, and organize memories for easy retrieval',
        'Demo Environment: A separate, feature-restricted demo site for testing and showcasing privacy controls',
        'Modern, Accessible UI: Fully responsive design, accessible across devices'
      ],
      url: 'https://demo.thereyesvault.com',
      github: 'https://github.com/jamesleoreyes/the-reyes-vault'
    },
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio site showcasing projects, experience, and backend-to-full stack journey. Built with modern web technologies and enterprise-grade features.',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'shadcn/ui', 'Tailwind CSS', 'Vercel'],
      highlights: [
        'Server-side rendering and static generation for optimal performance and SEO',
        'Advanced UI/UX features including custom animated word rotation component',
        'Adaptive theming system (light/dark mode) and fully responsive design',
        'Comprehensive SEO optimization with structured data (JSON-LD), Open Graph meta tags',
        'Progressive web app capabilities including service worker and app manifest',
        'Modern DevOps practices with automated builds and performance monitoring'
      ],
      url: 'https://jamesleoreyes.com',
      github: 'https://github.com/jamesleoreyes/portfolio'
    }
  ],
  education: [
    {
      institution: 'University of South Carolina - Columbia',
      degree: 'Bachelor of Arts',
      field: 'Media Arts',
      startDate: 'Aug 2016',
      endDate: 'Jan 2018',
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
      { name: 'Express', icon: Icons.Express, url: 'https://expressjs.com/' },
      { name: 'Flask', icon: Icons.Flask, url: 'https://flask.palletsprojects.com/' },
      { name: 'Supabase', icon: Icons.Supabase, url: 'https://supabase.com/' },
    ],
    devops: [
      { name: 'Git', icon: Icons.Git, url: 'https://git-scm.com/' },
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
    'API Development & Integration',
    'System Architecture',
    'Cloud Infrastructure',
    'DevOps & CI/CD',
    'REST APIs',
    'Microservices Architecture',
    'Database Design',
    'Performance Optimization',
    'User Experience Design',
    'Technical Leadership',
    'Product Development'
  ]
};

export { resumeData };
export type { ResumeData, ExperienceItem, ProjectItem, EducationItem, CertificationItem, TechnicalSkills }; 