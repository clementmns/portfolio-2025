import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useTranslations, useLocale } from "next-intl";
import type { Locale } from "@/types/locales";
import { fallbackLocale } from "@/types/locales";

export function LangSelect() {
  const t = useTranslations("Header");
  const lang: Locale = (useLocale() as Locale) || fallbackLocale;

  return (
    <Select defaultValue={lang} name="lang">
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("formLangPlaceholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">🇬🇧 {t("formLangOptionEnglish")}</SelectItem>
        <SelectItem value="fr">🇫🇷 {t("formLangOptionFrench")}</SelectItem>
      </SelectContent>
    </Select>
  );
}
