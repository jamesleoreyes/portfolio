import * as Icons from '@/components/icons';

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

const techSkills: TechnicalSkills = {
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
    // { name: 'REST API Design', icon: Icons.RestApi },
  ],
  devops: [
    { name: 'Git', icon: Icons.Git, url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: Icons.GitHub, url: 'https://github.com/' },
    // { name: 'CI/CD Pipelines', icon: Icons.CiCd },
    { name: 'Postman', icon: Icons.Postman, url: 'https://www.postman.com/' },
    { name: 'Sentry', icon: Icons.Sentry, url: 'https://sentry.io/' },
  ],
  cloud: [
    { name: 'Azure', icon: Icons.Azure, url: 'https://azure.microsoft.com/' },
    { name: 'Vercel', icon: Icons.Vercel, url: 'https://vercel.com/' },
    { name: 'Heroku', icon: Icons.Heroku, url: 'https://www.heroku.com/' },
    { name: 'Railway', icon: Icons.Railway, url: 'https://railway.app/' },
  ]
}

export { techSkills };
export type { TechnicalSkills };