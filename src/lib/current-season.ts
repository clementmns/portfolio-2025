"use server";

import { cookies } from "next/headers";
import { fallbackSeason, getSeasonByDate } from "@/types/seasons";
import type { Season } from "@/types/seasons";

export async function getCurrentSeason(): Promise<Season> {
  const cookieStore = await cookies();
  const raw =
    (cookieStore.get("user-season")?.value as Season) || fallbackSeason;
  if (raw === "auto") {
    return getSeasonByDate(new Date());
  }
  return raw;
}
