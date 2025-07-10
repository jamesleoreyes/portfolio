import { Navigation } from '@/types/Navigation';

const navContent: Navigation[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog', disabled: true },
  { href: '/experience', label: 'Experience', disabled: true },
  { href: '/projects', label: 'Projects', disabled: true },
];

const navWork: Navigation[] = [
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

const nav: Navigation[] = [
  ...navContent,
  ...navWork,
];

export { nav, navContent, navWork };