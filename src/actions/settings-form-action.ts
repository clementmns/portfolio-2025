"use server";

import type { Locale } from "@/types/locales";
import type { Theme } from "@/types/themes";
import type { Season } from "@/types/seasons";
import { fallbackLocale } from "@/types/locales";
import { fallbackTheme } from "@/types/themes";
import { fallbackSeason } from "@/types/seasons";
import { fallbackFont } from "@/types/fonts";
import { cookies, headers } from "next/headers";
import { redirect } from "@/i18n/navigation";

export async function settingsFormAction(formData: FormData) {
  const cookieStore = await cookies();

  const locale: Locale = (formData.get("lang") as Locale) || fallbackLocale;
  const theme: Theme = (formData.get("theme") as Theme) || fallbackTheme;
  const season: Season = (formData.get("season") as Season) || fallbackSeason;
  const font = (formData.get("font") as string) || fallbackFont;

  const nextHeaders = await headers();
  const pathname = nextHeaders.get("x-pathname");
  const pathWithoutLocale = pathname
    ? pathname.replace(/^\/[a-zA-Z-]+(\/|$)/, "/")
    : "/";

  if (theme) {
    cookieStore.set("user-theme", theme);
  }
  if (season) {
    cookieStore.set("user-season", season);
  }
  if (font) {
    cookieStore.set("user-font", font);
  }

  redirect({ href: pathWithoutLocale, locale });
}
