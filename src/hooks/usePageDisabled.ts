import { nav } from "@/configs/nav";

export default function usePageDisabled(href: string) {
  const page = nav.find(p => p.href === href);
  return page?.disabled || false;
}