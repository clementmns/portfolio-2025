"use server";

import { cookies } from "next/headers";
import { fallbackFont, Font } from "@/types/fonts";

export async function getCurrentFont(): Promise<Font> {
  const cookieStore = await cookies();
  const font = (cookieStore.get("user-font")?.value as Font) || fallbackFont;
  return font;
}
