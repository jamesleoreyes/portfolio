import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'live': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'development': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    case 'coming-soon': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  }
};

export const getStatusBorderColor = (status: string) => {
  switch (status) {
    case 'live': return 'border-green-500';
    case 'development': return 'border-yellow-500';
    case 'archived': return 'border-gray-500';
    case 'coming-soon': return 'border-blue-500';
    default: return 'border-gray-500';
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case 'personal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    case 'professional': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
    case 'open-source': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  }
};

export const getTypeBorderColor = (type: string) => {
  switch (type) {
    case 'personal': return 'border-blue-500';
    case 'professional': return 'border-purple-500';
    case 'open-source': return 'border-orange-500';
    default: return 'border-gray-500';
  }
};