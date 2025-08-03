"use server";

import type { Locale } from "@/types/locales";
import type { Theme } from "@/types/themes";
import { fallbackLocale } from "@/types/locales";
import { fallbackTheme } from "@/types/themes";
import { cookies, headers } from "next/headers";
import { redirect } from "@/i18n/navigation";

export async function settingsFormAction(formData: FormData) {
  const cookieStore = await cookies();

  const locale: Locale = (formData.get("lang") as Locale) || fallbackLocale;
  const theme: Theme = (formData.get("theme") as Theme) || fallbackTheme;

  const nextHeaders = await headers();
  const pathname = nextHeaders.get("x-pathname");
  const pathWithoutLocale = pathname
    ? pathname.replace(/^\/[a-zA-Z-]+(\/|$)/, "/")
    : "/";

  if (theme) {
    cookieStore.set("user-theme", theme);
  }

  redirect({ href: pathWithoutLocale, locale });
}
