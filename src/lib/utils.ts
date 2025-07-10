import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { nav } from "@/configs/nav";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isPageDisabled(href: string) {
  const page = nav.find(p => p.href === href);
  return page?.disabled ?? false;
}