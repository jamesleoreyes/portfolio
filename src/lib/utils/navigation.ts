import { nav } from "@/configs/nav";

export function isPageDisabled(href: string) {
  const page = nav.find(p => p.href === href);
  return page?.disabled ?? false;
};

export function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
};

export function shouldShowUnderConstruction() {
  const projectsMode = process.env['PROJECTS_MODE'] ?? 'production';
  return projectsMode === 'production';
};

export function getProgressColor(percentage: number) {
  if (percentage < 30) return 'bg-destructive';
  if (percentage < 70) return 'bg-yellow-500';
  return 'bg-green-500';
};