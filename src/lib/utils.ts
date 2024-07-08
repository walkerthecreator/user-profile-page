import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate( time : string ){
  const date = new Date(time)
  return date.toLocaleDateString('en-us')
} 