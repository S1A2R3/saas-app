import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSubjectColor(subject: string): string {
  const colors: Record<string, string> = {
    math: "#FFCDD2",
    science: "#BBDEFB",
    history: "#C8E6C9",
    coding: "#E1BEE7",
    english: "#FFE0B2",
  };

  return colors[subject.toLowerCase()] || "#E2E8F0";
}

