import { Navigation } from '@/types/Navigation';

const navContent: Navigation[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
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