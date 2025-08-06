"use server";

import type { Locale } from "@/types/locales";
import type { Theme } from "@/types/themes";
import { fallbackLocale } from "@/types/locales";
import { fallbackTheme } from "@/types/themes";
import { cookies, headers } from "next/headers";
import { redirect } from "@/i18n/navigation";
import { fallbackFont } from "../types/fonts";

export async function settingsFormAction(formData: FormData) {
  const cookieStore = await cookies();

  const locale: Locale = (formData.get("lang") as Locale) || fallbackLocale;
  const theme: Theme = (formData.get("theme") as Theme) || fallbackTheme;
  const font = (formData.get("font") as string) || fallbackFont;

  const nextHeaders = await headers();
  const pathname = nextHeaders.get("x-pathname");
  const pathWithoutLocale = pathname
    ? pathname.replace(/^\/[a-zA-Z-]+(\/|$)/, "/")
    : "/";

  if (theme) {
    cookieStore.set("user-theme", theme);
  }
  if (font) {
    cookieStore.set("user-font", font);
  }

  redirect({ href: pathWithoutLocale, locale });
}
