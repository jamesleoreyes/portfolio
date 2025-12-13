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
- [Additional Resources](#additional-resources)

## Architecture Overview

### Current Version: v0.16.9

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

## Tech Stack Deep Dive

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

## Project Structure

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
│   │   │   │   ├── cta-section.tsx
│   │   │   │   ├── hero-section.tsx
│   │   │   │   └── quick-nav-section.tsx
│   │   │   └── page.tsx
│   │   ├── (seo)/            # SEO-related files
│   │   │   ├── head.tsx      # HTML head component
│   │   │   ├── metadata.ts   # Global metadata configuration
│   │   │   ├── robots.ts     # SEO robots.txt configuration
│   │   │   ├── sitemap.ts    # Dynamic sitemap generation
│   │   │   └── viewport.ts   # Viewport configuration
│   │   ├── about/            # About page and components
│   │   │   ├── components/   # About page specific components
│   │   │   │   ├── cta-section.tsx
│   │   │   │   ├── current-chapter-section.tsx
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── journey-section.tsx
│   │   │   │   └── turning-points-section.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # About page component
│   │   ├── experience/       # Experience page and components
│   │   │   ├── components/   # Experience page specific components
│   │   │   │   ├── cta-section.tsx
│   │   │   │   ├── detailed-experience.tsx
│   │   │   │   ├── experience-timeline.tsx
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── key-achievements.tsx
│   │   │   │   └── tech-evolution.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Experience page component
│   │   ├── projects/         # Projects page and components
│   │   │   ├── components/   # Projects page specific components
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── project-card.tsx
│   │   │   │   └── projects-grid.tsx
│   │   │   ├── portfolio/    # Portfolio case study
│   │   │   │   ├── components/
│   │   │   │   │   ├── project-features.tsx
│   │   │   │   │   ├── project-hero.tsx
│   │   │   │   │   ├── project-metrics.tsx
│   │   │   │   │   ├── project-story.tsx
│   │   │   │   │   ├── screenshot-gallery.tsx
│   │   │   │   │   └── tech-stack.tsx
│   │   │   │   ├── metadata.ts
│   │   │   │   └── page.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Projects page component
│   │   ├── resume/           # Resume page and components
│   │   │   ├── components/   # Resume page specific components
│   │   │   │   ├── certifications.tsx
│   │   │   │   ├── core-competencies.tsx
│   │   │   │   ├── education.tsx
│   │   │   │   ├── experience.tsx
│   │   │   │   ├── professional-summary.tsx
│   │   │   │   ├── projects.tsx
│   │   │   │   ├── resume-actions.tsx
│   │   │   │   ├── resume-hero.tsx
│   │   │   │   ├── screenshot-carousel.tsx
│   │   │   │   ├── soft-skills.tsx
│   │   │   │   ├── sticky-resume-header.tsx
│   │   │   │   └── technical-skills.tsx
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # Resume page component
│   │   ├── contact/          # Contact page and components
│   │   │   ├── components/   # Contact page specific components
│   │   │   │   ├── contact-info-section.tsx
│   │   │   │   ├── contact-methods-section.tsx
│   │   │   │   ├── hero-section.tsx
│   │   │   │   └── social-links-section.tsx
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
│   │   │   │   ├── css.tsx
│   │   │   │   ├── html.tsx
│   │   │   │   ├── nextjs.tsx
│   │   │   │   ├── react.tsx
│   │   │   │   ├── shadcn.tsx
│   │   │   │   ├── tailwind.tsx
│   │   │   │   └── vite.tsx
│   │   │   ├── backend/      # Backend technology icons
│   │   │   │   ├── deno.tsx
│   │   │   │   ├── express.tsx
│   │   │   │   ├── flask.tsx
│   │   │   │   ├── nodejs.tsx
│   │   │   │   └── supabase.tsx
│   │   │   ├── devops/       # DevOps tool icons
│   │   │   │   ├── git.tsx
│   │   │   │   ├── gitlab.tsx
│   │   │   │   ├── postman.tsx
│   │   │   │   └── sentry.tsx
│   │   │   ├── cloud/        # Cloud platform icons
│   │   │   │   ├── azure.tsx
│   │   │   │   ├── cloudflare.tsx
│   │   │   │   ├── heroku.tsx
│   │   │   │   ├── railway.tsx
│   │   │   │   └── vercel.tsx
│   │   │   ├── socials/      # Social media icons
│   │   │   │   ├── github.tsx
│   │   │   │   ├── linkedin.tsx
│   │   │   │   └── twitter.tsx
│   │   │   ├── languages/    # Programming language icons
│   │   │   │   ├── javascript.tsx
│   │   │   │   ├── python.tsx
│   │   │   │   └── typescript.tsx
│   │   │   └── index.ts
│   │   ├── magicui/          # Magic UI components
│   │   │   └── word-rotate.tsx
│   │   ├── navbar/           # Navigation components
│   │   │   ├── mobile-nav.tsx
│   │   │   └── navbar.tsx
│   │   ├── theme/            # Theme-related components
│   │   │   ├── dynamic-favicon.tsx
│   │   │   ├── dynamic-theme-color.tsx
│   │   │   └── theme-toggle.tsx
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
│   │   │   ├── impossible-device.tsx
│   │   │   └── index.ts
│   │   ├── seo/              # SEO components
│   │   │   ├── faq-page-schema.tsx
│   │   │   ├── person-schema.tsx
│   │   │   ├── profile-page-schema.tsx
│   │   │   └── index.ts
│   │   ├── dynamic-viewport.tsx
│   │   ├── footer.tsx
│   │   ├── index.ts          # Component exports
│   │   ├── live-time-display.tsx
│   │   ├── placeholder-screenshot.tsx
│   │   ├── profile-image.tsx
│   │   └── social-links.tsx
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
│   │   ├── use-go-back.ts
│   │   ├── use-mobile.ts
│   │   ├── use-progressive-image.ts
│   │   ├── use-pwa-mode.ts
│   │   └── use-scroll-position.ts
│   ├── lib/                  # Utility functions
│   │   └── utils/            # Utility functions
│   │       ├── constants.ts
│   │       ├── format.ts
│   │       ├── index.ts
│   │       ├── navigation.ts
│   │       ├── styles.ts
│   │       └── time.ts
│   └── types/                # TypeScript type definitions
│       ├── app.ts
│       ├── contact.ts
│       ├── experience.ts
│       ├── navigation.ts
│       ├── projects.ts
│       └── resume.ts
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── pnpm-lock.yaml           # pnpm lock file
├── postcss.config.mjs        # PostCSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Development Setup

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

## Code Quality Standards

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",

    "module": "esnext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,

    "allowJs": false,
    "checkJs": false,

    "noEmit": true,
    "incremental": true,

    "forceConsistentCasingInFileNames": true,
    "verbatimModuleSyntax": false,

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

    "skipLibCheck": true,

    "plugins": [
      {
        "name": "next"
      }
    ],

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

## Performance Optimizations

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

## Component Architecture

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

## Data Management

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

## Deployment & Hosting

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

## Configuration Details

### Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env['ALLOWED_DEV_ORIGINS']
    ? process.env['ALLOWED_DEV_ORIGINS'].split(",")
    : [],
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['@/components', '@/configs'],
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  transpilePackages: [],
  poweredByHeader: false,
};

export default nextConfig;
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

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Motion Documentation](https://motion.dev)

---

**For Overview**: See [README.md](./README.md) for a high-level overview of the portfolio.

Made with ❤️ by James Reyes | © 2025
