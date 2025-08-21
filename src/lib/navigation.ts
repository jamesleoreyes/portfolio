import { nav } from '@configs/nav';

export function isPageDisabled(href: string) {
  const page = nav.find(p => p.href === href);
  return page?.disabled ?? false;
};

export function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
};