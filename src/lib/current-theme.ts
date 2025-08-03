"use server";

import { cookies } from "next/headers";
import { fallbackTheme, Theme } from "@/types/themes";

export async function getCurrentTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const theme =
    cookieStore.get("user-theme")?.value ?? (fallbackTheme as Theme);

  return theme as Theme;
}
