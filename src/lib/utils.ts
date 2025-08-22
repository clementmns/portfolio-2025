import { clsx, type ClassValue } from "clsx";
import { getLocale } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function formatRange(start: string, end?: string | null) {
  try {
    const locale = await getLocale();
    const fmt = new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
    });
    const startDate = new Date(start);
    const startLabel = fmt.format(startDate);
    if (!end) return `${startLabel} – Present`;
    const endDate = new Date(end);
    const endLabel = fmt.format(endDate);
    return startLabel === endLabel ? startLabel : `${startLabel} – ${endLabel}`;
  } catch {
    return `${start} – ${end || "Present"}`;
  }
}
