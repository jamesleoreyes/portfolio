# Portfolio Technical Deep Dive

> **For Recruiters & Overview**: See [README.md](./README.md) for a high-level overview of the portfolio.

This document provides comprehensive technical documentation for developers who want to understand the architecture, implementation details, and development setup of this portfolio.

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Tech Stack Deep Dive](#tech-stack-deep-dive)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Code Quality Standards](#code-quality-standards)
- [Performance Optimizations](#performance-optimizations)
- [Component Architecture](#component-architecture)
- [Data Management](#data-management)
- [Deployment & Hosting](#deployment--hosting)
- [Configuration Details](#configuration-details)

## 🏗️ Architecture Overview

### Current Version: v0.16.6

The portfolio has evolved from a basic showcase to a comprehensive digital presence with:

- **6 Complete Pages**: Home, About, Experience, Projects, Resume, Contact
- **20+ Interactive Components**: Modular, reusable components with consistent design
- **Advanced Navigation**: Sticky navbar with mobile-responsive drawer menu
- **Rich Content**: Detailed project case studies, experience timeline, and personal narrative
- **Performance Excellence**: Perfect Lighthouse scores across all metrics

### Key Architectural Decisions

1. **Next.js 15 App Router**: Modern React framework with file-based routing
2. **TypeScript Strict Mode**: Comprehensive type safety throughout
3. **Component-First Design**: Modular, reusable components with proper separation
4. **Performance-First**: Every decision optimized for Core Web Vitals
5. **Accessibility by Default**: WCAG compliance built into every component

## 🛠️ Tech Stack Deep Dive

### Core Technologies

| Technology       | Version | Purpose                             |
| ---------------- | ------- | ----------------------------------- |
| **Next.js**      | 15.3.3  | React framework with App Router     |
| **React**        | 19.1.0  | UI library with concurrent features |
| **TypeScript**   | 5.8.3   | Type-safe JavaScript                |
| **Tailwind CSS** | 4.0.0   | Utility-first CSS framework         |
| **shadcn/ui**    | Latest  | Reusable component library          |
| **Motion**       | 12.23.3 | Production-ready animations         |
| **Radix UI**     | Latest  | Accessible component primitives     |
| **Lucide React** | 0.516.0 | Icon library                        |

### Development Tools

| Tool                 | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| **pnpm**             | Fast, disk space efficient package manager     |
| **ESLint**           | Code linting with Next.js and TypeScript rules |
| **Turbopack**        | Next.js bundler for faster development         |
| **Sonner**           | Toast notifications                            |
| **Vercel Analytics** | Performance monitoring                         |

### Dependencies Breakdown

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@vercel/analytics": "^1.5.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.6.0",
    "lucide-react": "^0.516.0",
    "motion": "^12.23.3",
    "next": "15.3.3",
    "next-themes": "^0.4.6",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "sonner": "^2.0.6",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2"
  }
}
```

## 📁 Project Structure

```bash
portfolio/
├── public/                   # Static assets
│   ├── branding/             # App icons and branding
│   │   ├── favicon.ico
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── icon-maskable.png
│   │   ├── icon-transparent.svg
│   │   ├── icon.svg
│   │   └── icon-inverted.svg
│   ├── downloads/            # Resume and downloadable content
│   │   └── resume/
│   │       └── James-Reyes-Resume.pdf
│   └── images/               # Images and media files
│       ├── logos/            # Brand logos
│       │   └── jlr.png
│       ├── profile/          # Profile images
│       │   ├── me.jpg
│       │   └── me.webp
│       ├── screenshots/      # Portfolio screenshots
│       │   ├── light/portfolio/
│       │   └── dark/portfolio/
│       └── og-image.png
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (home)/           # Home page and components
│   │   │   ├── components/   # Home page specific components
│   │   │   │   ├── CTASection.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── QuickNavSection.tsx
│   │   │   └── page.tsx
│   │   ├── (seo)/            # SEO-related files
│   │   │   ├── head.tsx      # HTML head component
│   │   │   ├── metadata.ts   # Global metadata configuration
│   │   │   ├── robots.ts     # SEO robots.txt configuration
│   │   │   ├── sitemap.ts    # Dynamic sitemap generation
│   │   │   └── viewport.ts   # Viewport configuration
│   │   ├── about/            # About page and components
│   │   │   ├── components/   # About page specific components
│   │   │   │   ├── CTASection.tsx
│   │   │   │   ├── CurrentChapterSection.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── JourneySection.tsx
│   │   │   │   └── TurningPointsSection.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # About page component
│   │   ├── experience/       # Experience page and components
│   │   │   ├── components/   # Experience page specific components
│   │   │   │   ├── CTASection.tsx
│   │   │   │   ├── DetailedExperience.tsx
│   │   │   │   ├── ExperienceTimeline.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── KeyAchievements.tsx
│   │   │   │   └── TechEvolution.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Experience page component
│   │   ├── projects/         # Projects page and components
│   │   │   ├── components/   # Projects page specific components
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── ProjectsGrid.tsx
│   │   │   ├── portfolio/    # Portfolio case study
│   │   │   │   ├── components/
│   │   │   │   │   ├── ProjectFeatures.tsx
│   │   │   │   │   ├── ProjectHero.tsx
│   │   │   │   │   ├── ProjectMetrics.tsx
│   │   │   │   │   ├── ProjectStory.tsx
│   │   │   │   │   ├── ScreenshotGallery.tsx
│   │   │   │   │   └── TechStack.tsx
│   │   │   │   ├── metadata.ts
│   │   │   │   └── page.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Projects page component
│   │   ├── resume/           # Resume page and components
│   │   │   ├── components/   # Resume page specific components
│   │   │   │   ├── Certifications.tsx
│   │   │   │   ├── CoreCompetencies.tsx
│   │   │   │   ├── Education.tsx
│   │   │   │   ├── Experience.tsx
│   │   │   │   ├── ProfessionalSummary.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── ResumeActions.tsx
│   │   │   │   ├── ResumeHero.tsx
│   │   │   │   ├── ScreenshotCarousel.tsx
│   │   │   │   ├── SoftSkills.tsx
│   │   │   │   ├── StickyResumeHeader.tsx
│   │   │   │   └── TechnicalSkills.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Resume page component
│   │   ├── contact/          # Contact page and components
│   │   │   ├── components/   # Contact page specific components
│   │   │   │   ├── ContactInfoSection.tsx
│   │   │   │   ├── ContactMethodsSection.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   └── SocialLinksSection.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Contact page component
│   │   ├── api/              # API routes
│   │   │   └── resume/       # Resume download API
│   │   │       └── route.ts
│   │   ├── globals.css       # Global styles and CSS variables
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── manifest.ts       # PWA manifest configuration
│   │   └── not-found.tsx     # 404 error page
│   ├── components/           # Reusable components
│   │   ├── icons/            # Custom icon components
│   │   │   ├── frontend/     # Frontend technology icons
│   │   │   │   ├── CSS.tsx
│   │   │   │   ├── HTML5.tsx
│   │   │   │   ├── NextJs.tsx
│   │   │   │   ├── React.tsx
│   │   │   │   ├── Shadcn.tsx
│   │   │   │   ├── Tailwind.tsx
│   │   │   │   └── Vite.tsx
│   │   │   ├── backend/      # Backend technology icons
│   │   │   │   ├── Deno.tsx
│   │   │   │   ├── Express.tsx
│   │   │   │   ├── Flask.tsx
│   │   │   │   ├── NodeJs.tsx
│   │   │   │   └── Supabase.tsx
│   │   │   ├── devops/       # DevOps tool icons
│   │   │   │   ├── Git.tsx
│   │   │   │   ├── GitLab.tsx
│   │   │   │   ├── Postman.tsx
│   │   │   │   └── Sentry.tsx
│   │   │   ├── cloud/        # Cloud platform icons
│   │   │   │   ├── Azure.tsx
│   │   │   │   ├── Cloudflare.tsx
│   │   │   │   ├── Heroku.tsx
│   │   │   │   ├── Railway.tsx
│   │   │   │   └── Vercel.tsx
│   │   │   ├── socials/      # Social media icons
│   │   │   │   ├── GitHub.tsx
│   │   │   │   ├── LinkedIn.tsx
│   │   │   │   └── Twitter.tsx
│   │   │   ├── languages/    # Programming language icons
│   │   │   │   ├── JavaScript.tsx
│   │   │   │   ├── Python.tsx
│   │   │   │   └── TypeScript.tsx
│   │   │   └── index.ts
│   │   ├── magicui/          # Magic UI components
│   │   │   └── WordRotate.tsx
│   │   ├── navbar/           # Navigation components
│   │   │   ├── MobileNav.tsx
│   │   │   └── NavBar.tsx
│   │   ├── theme/            # Theme-related components
│   │   │   ├── DynamicFavicon.tsx
│   │   │   ├── DynamicThemeColor.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── alert.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── tooltip.tsx
│   │   ├── easter-eggs/      # Easter egg components
│   │   │   ├── ImpossibleDeviceEasterEgg.tsx
│   │   │   └── index.ts
│   │   ├── seo/              # SEO components
│   │   │   ├── FAQPageSchema.tsx
│   │   │   ├── PersonSchema.tsx
│   │   │   ├── ProfilePageSchema.tsx
│   │   │   └── index.ts
│   │   ├── DynamicViewport.tsx
│   │   ├── Footer.tsx
│   │   ├── index.ts          # Component exports
│   │   ├── LiveTimeDisplay.tsx
│   │   ├── PlaceholderScreenshot.tsx
│   │   ├── ProfileImage.tsx
│   │   └── SocialLinks.tsx
│   ├── configs/              # App configuration
│   │   ├── app.ts            # App metadata and assets
│   │   ├── nav.ts            # Navigation configuration
│   │   └── projects.ts       # Project configuration
│   ├── data/                 # Content data
│   │   ├── projects.ts       # Project data and case studies
│   │   ├── experience.ts     # Experience timeline data
│   │   ├── resume.ts         # Resume content data
│   │   ├── contact.ts        # Contact information
│   │   └── index.ts          # Data exports
│   ├── hooks/                # Custom React hooks
│   │   ├── index.ts
│   │   ├── useGoBack.ts
│   │   ├── useMobile.ts
│   │   ├── useProgressiveImage.ts
│   │   ├── usePWAMode.ts
│   │   └── useScrollPosition.ts
│   ├── lib/                  # Utility functions
│   │   └── utils/            # Utility functions
│   │       ├── constants.ts
│   │       ├── format.ts
│   │       ├── index.ts
│   │       ├── navigation.ts
│   │       ├── styles.ts
│   │       └── time.ts
│   └── types/                # TypeScript type definitions
│       ├── App.ts
│       ├── Contact.ts
│       ├── Experience.ts
│       ├── Navigation.ts
│       ├── Projects.ts
│       └── Resume.ts
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── pnpm-lock.yaml           # pnpm lock file
├── postcss.config.mjs        # PostCSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Development Setup

### Prerequisites

- [Node.js](https://nodejs.org) 18.0 or higher
- [pnpm](https://pnpm.io) 9.0 or higher

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/jamesleoreyes/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   touch .env.local
   ```

   Configure the following variables:

   ```bash
   # App Configuration
   APP_URL=jamesleoreyes.com
   SITEMAP_URL=jamesleoreyes.com/sitemap.xml
   ```

4. **Run the development server**

   ```bash
   pnpm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script                   | Description                             |
| ------------------------ | --------------------------------------- |
| `pnpm run dev`           | Start development server with Turbopack |
| `pnpm run build`         | Build for production                    |
| `pnpm run start`         | Start production server                 |
| `pnpm run lint`          | Run ESLint                              |
| `pnpm run version:patch` | Bump patch version                      |
| `pnpm run version:minor` | Bump minor version                      |
| `pnpm run version:major` | Bump major version                      |

## 🔧 Code Quality Standards

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    // Language and Environment - Target modern browsers more aggressively
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",

    // Modules
    "module": "esnext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,

    // JavaScript Support
    "allowJs": false,
    "checkJs": false,

    // Emit
    "noEmit": true,
    "incremental": true,

    // Interop Constraints
    "forceConsistentCasingInFileNames": true,
    "verbatimModuleSyntax": false,

    // Type Checking - Strict Mode
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,

    // Completeness
    "skipLibCheck": true,

    // Next.js specific
    "plugins": [
      {
        "name": "next"
      }
    ],

    // Path Mapping
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", ".next", "out", "dist", "build"]
}
```

### ESLint Configuration

```javascript
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

### Code Style Guidelines

1. **TypeScript**: Strict mode with comprehensive type checking
2. **Naming**: PascalCase for components, camelCase for functions
3. **Imports**: Organized imports with proper grouping
4. **Comments**: JSDoc comments for complex functions
5. **Accessibility**: ARIA labels and semantic HTML

## ⚡ Performance Optimizations

### Bundle Optimization

- **Tree Shaking**: Automatic dead code elimination
- **Code Splitting**: Dynamic imports for route-based splitting
- **Lazy Loading**: Suspense boundaries for non-critical components
- **Image Optimization**: Next.js Image component with WebP support

### Core Web Vitals

| Metric  | Target  | Current |
| ------- | ------- | ------- |
| **LCP** | < 2.5s  | < 1.5s  |
| **FID** | < 100ms | < 50ms  |
| **CLS** | < 0.1   | < 0.05  |

### Lighthouse Scores

| Category           | Score   | Details                                    |
| ------------------ | ------- | ------------------------------------------ |
| **Performance**    | 99/100  | Optimized images, efficient code splitting |
| **Accessibility**  | 100/100 | WCAG 2.1 AA compliance                     |
| **Best Practices** | 100/100 | Modern web standards                       |
| **SEO**            | 100/100 | Complete meta tags and structured data     |

## 🧩 Component Architecture

### Component Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition**: Favor composition over inheritance
3. **Props Interface**: TypeScript interfaces for all props
4. **Accessibility**: Built-in accessibility features
5. **Responsive**: Mobile-first design approach

### Component Categories

#### Page Components

- Located in `src/app/*/page.tsx`
- Handle page-level layout and data fetching
- Export metadata for SEO

#### Feature Components

- Located in `src/app/*/components/`
- Page-specific functionality
- Reusable within the page context

#### Shared Components

- Located in `src/components/`
- Reusable across multiple pages
- Follow consistent patterns

#### UI Components

- Located in `src/components/ui/`
- shadcn/ui based components
- Atomic design principles

## 📊 Data Management

### Data Structure

All content is managed through TypeScript interfaces and data files:

```typescript
// src/types/Projects.ts
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  status: "live" | "development" | "coming-soon";
  type: "personal" | "professional";
  liveUrl?: string;
  githubUrl?: string;
  screenshots: {
    default: string[];
    light: string[];
    dark: string[];
  };
  featuredImage: {
    default: string;
    light?: string;
    dark?: string;
  };
  techStack: TechStackItem[];
  features: Feature[];
  challenges: Challenge[];
  startDate: string;
  lastUpdated: string;
  metrics: Metric[];
}
```

### Data Files

- `src/data/contact.ts` - Contact information and methods
- `src/data/experience.ts` - Professional experience timeline
- `src/data/projects.ts` - Project case studies and details
- `src/data/resume.ts` - Resume content and sections

### Type Safety

All data is strongly typed with TypeScript interfaces:

```typescript
// src/types/App.ts
export interface Meta {
  title: string;
  fullTitle: string;
  description: string;
  siteName: string;
  creator: string;
}

export interface Assets {
  branding: BrandingAssets;
  downloads: DownloadAssets;
  images: ImageAssets;
}
```

## 🚀 Deployment & Hosting

### Vercel Deployment

1. **Connect Repository**

   - Link GitHub repository to Vercel
   - Configure build settings

2. **Environment Variables**

   ```bash
   APP_URL=jamesleoreyes.com
   SITEMAP_URL=jamesleoreyes.com/sitemap.xml
   ```

3. **Build Configuration**

   ```json
   {
     "buildCommand": "pnpm run build",
     "outputDirectory": ".next",
     "installCommand": "pnpm install"
   }
   ```

### Performance Monitoring

- **Vercel Analytics**: Real-time performance monitoring
- **Lighthouse CI**: Automated performance testing
- **Core Web Vitals**: Continuous monitoring

### Domain Configuration

- **Custom Domain**: jamesleoreyes.com
- **SSL Certificate**: Automatic via Vercel
- **CDN**: Global edge network

## ⚙️ Configuration Details

### Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
```

### Tailwind CSS Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
```

### PWA Configuration

```typescript
// src/app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "James Reyes | Full-Stack Product Engineer",
    short_name: "James Reyes",
    description:
      "Full-Stack Product Engineer building useful, purposeful apps and learning everything along the way.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/branding/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/branding/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/branding/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
```

## 🔍 Troubleshooting

### Common Issues

1. **TypeScript Errors**

   - Ensure strict mode is enabled
   - Check for proper type imports
   - Verify interface definitions

2. **Build Failures**

   - Clear `.next` directory
   - Reinstall dependencies
   - Check for circular imports

3. **Performance Issues**
   - Run Lighthouse audit
   - Check bundle analyzer
   - Optimize images and code splitting

### Development Tips

1. **Hot Reload**: Use Turbopack for faster development
2. **Type Checking**: Enable TypeScript strict mode
3. **Linting**: Run ESLint before commits
4. **Testing**: Test on multiple devices and browsers

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Motion Documentation](https://motion.dev)

---

**For Overview**: See [README.md](./README.md) for a high-level overview of the portfolio.

Made with ❤️ by James Reyes | © 2025
