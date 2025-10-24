import type { ExperienceData } from '@_types/Experience';
import { ClipboardList, ClockPlus, FileVideoIcon, LifeBuoy, Rocket, Shield, TrendingUp, Users, Zap } from 'lucide-react';

const experienceData: ExperienceData = {
  experiences: [
    {
      id: 'cimplx-internship',
      tabName: 'Internship',
      company: {
        name: 'Cimplx HR, Inc.',
        url: 'https://cimplx.com',
      },
      position: 'Full-Stack Developer',
      type: 'internship',
      location: 'Rock Hill, SC',
      startDate: 'Jul 2023',
      endDate: 'Sep 2023',
      status: 'completed',
      overview: 'Built subscription management platform for Abenity coupon system using Python, Flask, and ChargeBee. First professional software development experience.',
      context: 'Career transition from FedEx delivery driver to software development. Father connected me with opportunity after seeing my Discord and Telegram bot projects. Proved capabilities through Google Apps Script technical assessment.',
      keyProjects: [
        {
          name: 'Abenity Subscription Platform',
          description: 'Full-stack SaaS platform for managing subscription access to Abenity coupon system',
          impact: 'Enabled business to offer subscription-based coupon services to clients',
          technologies: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'ChargeBee', 'Azure', 'Jenkins'],
          challenges: [
            'First time building a complete web application',
            'Learning web development fundamentals while building',
            'Understanding subscription billing and webhooks',
            'Navigating Azure infrastructure as a beginner'
          ],
          outcomes: [
            'Successfully launched working SaaS platform',
            'Integrated subscription billing and user management',
            'Created responsive frontend with Flowbite components',
            'Implemented secure webhook processing'
          ]
        }
      ],
      achievements: [
        {
          title: 'Accelerated Learning',
          description: 'Learned full-stack development fundamentals in 2 months',
          impact: 'Delivered production-ready SaaS platform as first coding project',
          metrics: '0 to production in 8 weeks',
          icon: Rocket,
          badgeColor: 'bg-blue-700'
        },
        {
          title: 'Career Breakthrough',
          description: 'Successfully transitioned from physical labor to software development',
          impact: 'Earned a full-time developer position offer at Cimplx',
          metrics: 'Internship to full-time in 2 months',
          icon: TrendingUp,
          badgeColor: 'bg-green-700'
        }
      ],
      technologies: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'ChargeBee', 'GitLab', 'Azure', 'Jenkins'],
      learnings: [
        'Full-stack web development fundamentals',
        'Subscription billing system integration',
        'Professional software development workflow',
        'Client communication and requirements gathering',
        'Cloud infrastructure basics (Azure)'
      ],
      nextSteps: [
        'None. I got a full-time role :)',
      ]
    },
    {
      id: 'cimplx-fulltime',
      tabName: 'Full-Time',
      company: {
        name: 'Cimplx HR, Inc.',
        url: 'https://cimplx.com',
      },
      position: 'Tier II Support Specialist & API Developer',
      type: 'full-time',
      location: 'Rock Hill, SC',
      startDate: 'Sep 2023',
      endDate: 'Present',
      status: 'current',
      overview: 'Architected and developed HR/timekeeping integration synchronizing employee data between Factorial HR and UKG Ready systems for multiple clients. Also managed technical operations such as time clock integrations, IT inventory, and advanced client support.',
      context: 'Transitioned from internship to full-time role, becoming the sole in-house developer responsible for maintaining and rebuilding critical integration systems. Took ownership of production systems processing 100,000+ webhook events.',
      keyProjects: [
        {
          name: 'Factorial x UKG Integration Platform',
          description: 'Complete rebuild of integration system connecting European HR platform with US payroll system',
          impact: 'Replaced unreliable third-party solution with secure, maintainable in-house system',
          technologies: ['TypeScript', 'Express.js', 'React', 'Tailwind CSS', 'Azure SQL Server', 'Azure DevOps', 'Azure Key Vault', 'Azure Queue Storage'],
          challenges: [
            'Inherited poorly architected microservices with no authentication',
            'No documentation or proper error handling',
            'Tight timeline with active client dependencies'
          ],
          outcomes: [
            'Built monolithic architecture for better maintainability',
            'Implemented proper authentication and security',
            'Created admin dashboard for client management',
            'Reduced deployment complexity by 80%'
          ]
        },
        {
          name: 'Employee QR Code Generator',
          description: 'Micro web app for generating employee ID QR codes for timekeeping system',
          impact: 'Enabled facial recognition alternative for privacy-conscious employees',
          technologies: ['Python', 'Flask', 'HTML', 'Tailwind CSS', 'UKG Ready API', 'Heroku'],
          outcomes: [
            'Seamlessly integrated into UKG Ready dashboard via iframe',
            'Eliminated manual badge creation process',
            '100% client satisfaction with privacy-first approach'
          ]
        },
        {
          name: 'Mass Document Uploader',
          description: 'Automated document processing system for bulk employee document uploads',
          impact: 'Reduced document upload time from hours to minutes',
          technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Express.js', 'File Processing APIs', 'UKG Ready API'],
          outcomes: [
            'Processes hundreds of documents per week in minutes instead of hours',
            'Intelligent file naming and employee detection',
            'Outperformed native UKG Ready solution in usability'
          ]
        },
        {
          name: 'Timecard Processor (ETL)',
          description: 'Extract, Transform, Load system for automated timesheet imports from external timekeeping system to UKG Ready',
          impact: 'Reduced payroll processing time by over 95%',
          technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Express.js', 'Excel Processing', 'UKG Ready API', 'Data Transformation'],
          outcomes: [
            'Automated hour-long manual process to 30 seconds',
            'Eliminated human error in timesheet entry',
            'Enabled seamless multi-system workflow'
          ]
        }
      ],
      achievements: [
        {
          title: 'High-Volume Event Processing',
          description: 'Architected integration platform handling continuous webhook traffic',
          impact: 'Enabled event-driven data synchronization across multiple client systems',
          metrics: '100,000+ events processed',
          icon: Zap,
          badgeColor: 'bg-purple-700'
        },
        {
          title: 'Workflow Transformation',
          description: 'Eliminated manual processes through intelligent automation tools',
          impact: 'Freed up hours of employee time for strategic work',
          metrics: '98% reduction in manual tasks',
          icon: Users,
          badgeColor: 'bg-orange-700'
        },
        {
          title: 'Legacy System Modernization',
          description: 'Rebuilt unreliable microservices into maintainable monolithic architecture',
          impact: 'Dramatically improved system stability and reduced operational overhead',
          metrics: '95% reduction in manual interventions',
          icon: Shield,
          badgeColor: 'bg-red-700'
        },
        {
          title: 'Time Clock Integration & Support',
          description: 'Configured, deployed, and maintained UKG, Synergy, and NoahFace time clocks',
          impact: 'Enabled accurate payroll and compliance tracking across client environments',
          metrics: '100+ clocks deployed and supported',
          icon: ClockPlus,
          badgeColor: 'bg-green-700'
        },
        {
          title: 'Technical Inventory Management',
          description: 'Tracked and managed all company/client time clocks and employee laptops',
          impact: 'Ensured smooth hardware lifecycle, upgrades, and troubleshooting',
          metrics: '20+ laptops maintained, 100+ devices inventoried',
          icon: ClipboardList,
          badgeColor: 'bg-blue-700'
        },
        {
          title: 'Tier II Client Support',
          description: 'Handled escalated HCM/TLM issues beyond AE/PM capabilities',
          impact: 'Resolved critical client payroll/timekeeping problems quickly',
          metrics: 'Average resolution time <4h for escalated issues',
          icon: LifeBuoy,
          badgeColor: 'bg-yellow-700'
        },
        {
          title: 'Training & Media Production',
          description: 'Produced video walkthroughs and guides for client onboarding and internal training',
          impact: 'Reduced onboarding time and improved self-service support',
          metrics: '10+ training materials produced',
          icon: FileVideoIcon,
          badgeColor: 'bg-purple-700'
        }
      ],
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Azure DevOps', 'Azure Web Apps', 'Azure SQL Server', 'Azure Key Vault', 'Azure Queue Storage', 'REST APIs'],
      learnings: [
        'System architecture and security',
        'Production system maintenance and debugging',
        'Client communication and requirement gathering',
        'Azure cloud infrastructure and DevOps practices',
        'API design and integration patterns',
        'Hands-on deployment and support of time clock hardware/software',
        'Technical inventory management and lifecycle planning',
        'High-level client support and troubleshooting for payroll/timekeeping systems',
        'Cross-functional collaboration with AEs, PMs, and payroll staff'
      ],
      nextSteps: [
        'Continue optimizing integration performance',
        'Explore additional automation opportunities',
        'Improve and expand internal processes and tooling'
      ]
    }
  ],
  techEvolution: [
    {
      period: 'Late 2022',
      technologies: [
        { name: 'Python', url: 'https://python.org' },
        { name: 'Discord.py', url: 'https://discordpy.readthedocs.io' },
        { name: 'ChatGPT', url: 'https://chat.openai.com' }
      ],
      focus: 'AI-Assisted Learning',
      milestone: 'First interaction with ChatGPT sparked software development interest'
    },
    {
      period: 'Jul-Sep 2023',
      technologies: [
        { name: 'Flask', url: 'https://flask.palletsprojects.com' },
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'Flowbite', url: 'https://flowbite.com' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
      ],
      focus: 'Web Development Fundamentals',
      milestone: 'Built my first full-stack application during internship'
    },
    {
      period: 'Sep 2023-Present',
      technologies: [
        { name: 'TypeScript', url: 'https://typescriptlang.org' },
        { name: 'Node.js', url: 'https://nodejs.org' },
        { name: 'Express.js', url: 'https://expressjs.com' },
        { name: 'React', url: 'https://react.dev' },
        { name: 'shadcn/ui', url: 'https://ui.shadcn.com' },
        { name: 'Azure', url: 'https://azure.microsoft.com' }
      ],
      focus: 'Real-World Product Development',
      milestone: 'Rebuilt critical integration systems in production'
    },
    {
      period: 'Dec 2024-Present',
      technologies: [
        { name: 'Supabase', url: 'https://supabase.com' },
        { name: 'Edge Functions', url: 'https://supabase.com/docs/guides/functions' },
        { name: 'PostgreSQL', url: 'https://postgresql.org' },
        { name: 'Railway', url: 'https://railway.app' },
        { name: 'System Design', url: null },
        { name: 'Product-Market Fit', url: null },
        { name: 'Partnership', url: null },
        { name: 'Business Development', url: null },
        { name: 'SaaS', url: null },
        { name: 'Multi-Tenant', url: null },
        { name: 'Cost Optimization', url: null },
        { name: 'Infrastructure', url: null },
      ],
      focus: 'Modern Full-Stack & SaaS',
      milestone: 'Co-founded SaaS platform with optimized infrastructure'
    }
  ],
  overallStats: {
    totalExperience: '2 years',
    projectsBuilt: 6,
    technologiesUsed: 25,
    problemsSolved: 100
  }
};

export { experienceData };