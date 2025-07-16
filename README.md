# James Reyes | Portfolio

[![JLR Logo](public/images/logos/jlr.png)](https://jamesleoreyes.com)

A modern, responsive portfolio website showcasing my work as a Full-Stack Product Engineer. Built with Next.js 15, TypeScript, and Tailwind CSS with a focus on performance, accessibility, and maintainability.

## 🚀 Live Demo

Visit the live site: [jamesleoreyes.com](https://jamesleoreyes.com)

## ✨ Features

- **Modern Design**: Clean, responsive design with dark/light theme support
- **Performance Optimized**: Built with Next.js 15 and optimized for Core Web Vitals
- **Accessibility First**: WCAG compliant with proper semantic HTML and keyboard navigation
- **SEO Optimized**: Complete meta tags, sitemap, and structured data
- **Type Safe**: Strict TypeScript configuration with comprehensive type checking
- **Progressive Web App**: Installable PWA with offline support
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations and transitions using Framer Motion

### Completed Features

- ✅ **Home**: Hero section with rotating taglines and quick navigation
- ✅ **About**: Comprehensive overview of skills, values, and approach
- ✅ **Experience**: Timeline of experience with detailed descriptions
- ✅ **Contact**: Methods to get in touch with me
- ✅ **Resume**: Interactive resume with download functionality

### Planned Features (V1 Roadmap)

- 🚧 Projects showcase with detailed case studies
- 🚧 Blog section with MDX support

## 🛠️ Tech Stack

### Core Technologies

- **Framework**: [Next.js 15](https://nextjs.org) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) - Reusable component library
- **Icons**: Custom SVG icons with React components
- **Animations**: [Motion](https://motion.dev) - Production-ready motion library

### Development Tools

- **Package Manager**: [pnpm](https://pnpm.io)
- **Linting**: [ESLint](https://eslint.org) with Next.js and TypeScript rules
- **Code Quality**: Strict TypeScript configuration
- **Build Tool**: Next.js built-in bundler with [Turbopack](https://nextjs.org/docs/app/building-your-application/optimizing/turbopack)
- **Version Control**: [Git](https://git-scm.com) with [Conventional Commits](https://www.conventionalcommits.org)

### Deployment & Hosting

- **Hosting**: [Vercel](https://vercel.com) - Optimized for Next.js
- **Domain**: Custom domain with SSL
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) integration
- **Performance**: Automatic optimization and CDN

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org) 18.0 or higher
- [pnpm](https://pnpm.io) 9.0 or higher

### Setup

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

## 🚀 Development

### Available Scripts

- `pnpm run dev` - Start development server with Turbopack
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run version:patch` - Bump patch version
- `pnpm run version:minor` - Bump minor version
- `pnpm run version:major` - Bump major version

### Project Structure

```bash
portfolio/
├── public/                   # Static assets
│   └── media/                # Images and media files
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/            # About page and components
│   │   │   ├── components/   # About page specific components
│   │   │   ├── data.ts       # Tech skills and content data
│   │   │   ├── metadata.ts   # Page-specific metadata
│   │   │   └── page.tsx      # About page component
│   │   ├── globals.css       # Global styles and CSS variables
│   │   ├── head.tsx          # HTML head component
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── manifest.ts       # PWA manifest configuration
│   │   ├── metadata.ts       # Global metadata configuration
│   │   ├── not-found.tsx     # 404 error page
│   │   ├── page.tsx          # Homepage component
│   │   ├── robots.ts         # SEO robots.txt configuration
│   │   ├── sitemap.ts        # Dynamic sitemap generation
│   │   └── viewport.ts       # Viewport configuration
│   ├── components/           # Reusable components
│   │   ├── icons/            # Custom icon components
│   │   ├── magicui/          # Magic UI components
│   │   ├── nav/              # Navigation components
│   │   ├── theme/            # Theme-related components
│   │   ├── ui/               # shadcn/ui components
│   │   └── index.ts          # Component exports
│   ├── configs/              # App configuration
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

### Code Quality

This project enforces strict code quality standards:

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **ESLint**: Next.js and TypeScript rules with custom configurations
- **Code Style**: Consistent formatting and naming conventions
- **Performance**: Optimized images, lazy loading, and bundle splitting

### Adding New Components

1. Create component in appropriate directory under `src/components/`
2. Export from `src/components/index.ts`
3. Add TypeScript interfaces for props
4. Include proper accessibility attributes
5. Add responsive design considerations

### Theme System

The project uses a custom theme system with:

- Light/dark mode toggle
- CSS custom properties for colors
- Tailwind CSS theme integration
- System preference detection
- Persistent theme storage

## 📱 PWA Features

- **Installable**: Can be installed on mobile and desktop
- **Offline Support**: Service worker for offline functionality
- **App Icons**: Multiple icon sizes for different devices
- **Manifest**: Complete web app manifest
- **Performance**: Optimized for mobile performance

## 🔧 Configuration

### Customization

#### Updating Personal Information

1. Edit `src/configs/app.ts` for site metadata
2. Update `src/app/about/data.ts` for tech skills
3. Replace images in `public/media/`
4. Modify navigation in `src/configs/nav.ts`

#### Styling

- **Colors**: Update CSS custom properties in `src/app/globals.css`
- **Components**: Modify shadcn/ui components in `src/components/ui/`
- **Layout**: Adjust responsive breakpoints in Tailwind config

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push to main

## 📊 Performance

Current performance metrics:

- **PageSpeed Score**: (Performance - **100**, Accessibility - **100**, Best Practices - **96**, SEO - **100**)
- **Core Web Vitals**: All metrics in green (LCP, FID, CLS)
- **Bundle Size**: Optimized with tree shaking and code splitting and lazy loading
- **Images**: Next.js Image optimization with WebP support

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [jamesleoreyes.com](https://jamesleoreyes.com)
- **Email**: [contact@jamesleoreyes.com](mailto:contact@jamesleoreyes.com)
- **LinkedIn**: [linkedin.com/in/jamesleoreyes](https://linkedin.com/in/jamesleoreyes)
- **GitHub**: [github.com/jamesleoreyes](https://github.com/jamesleoreyes)

---

Built with ❤️ by James Reyes | © 2025
