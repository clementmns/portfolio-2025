"use server";

import type { Locale } from "@/types/locales";
import type { Theme } from "@/types/themes";
import type { Season } from "@/types/seasons";
import { fallbackLocale } from "@/types/locales";
import { fallbackTheme } from "@/types/themes";
import { fallbackSeason } from "@/types/seasons";
import { fallbackFont } from "@/types/fonts";
import { cookies } from "next/headers";

/**
 * Server action to update user settings cookies without redirect
 * This is optimized for better performance - no page reload/white flash
 */
export async function updateSettingsAction(formData: FormData) {
  const cookieStore = await cookies();

  const locale: Locale = (formData.get("lang") as Locale) || fallbackLocale;
  const theme: Theme = (formData.get("theme") as Theme) || fallbackTheme;
  const season: Season = (formData.get("season") as Season) || fallbackSeason;
  const font = (formData.get("font") as string) || fallbackFont;

  if (theme) {
    cookieStore.set("user-theme", theme);
  }
  if (season) {
    cookieStore.set("user-season", season);
  }
  if (font) {
    cookieStore.set("user-font", font);
  }
  if (locale) {
    cookieStore.set("user-locale", locale);
  }

  return { success: true };
}
