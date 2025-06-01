import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const displayCustomerCount = () => {
  const startCount = 500;
  const startDate = "2025-01-01";
  const incrementPerDay = 0.5;

  const start = new Date(startDate);
  const today = new Date();

  const diffInDays = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.floor(startCount + diffInDays * incrementPerDay);
}
