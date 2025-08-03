import { defineRouting } from "next-intl/routing";
import { fallbackLocale, Locales } from "../types/locales";

export const routing = defineRouting({
  locales: Locales,
  defaultLocale: fallbackLocale,
});
