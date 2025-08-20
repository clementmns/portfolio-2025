import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { HiSun, HiMoon, HiLightningBolt } from "react-icons/hi";
import { Theme } from "@/types/themes";

export function ThemeSelect() {
  const t = useTranslations("Header");
  let theme: Theme = "system";
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(?:^|; )user-theme=([^;]*)/);
    const cookieTheme = match?.[1] as Theme | undefined;
    if (
      cookieTheme === "dark" ||
      cookieTheme === "light" ||
      cookieTheme === "system"
    ) {
      theme = cookieTheme;
    }
  }

  return (
    <Select defaultValue={theme} name="theme" aria-label={t("formThemeLabel")}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("formThemePlaceholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <HiSun />
          {t("formThemeOptionLight")}
        </SelectItem>
        <SelectItem value="dark">
          <HiMoon />
          {t("formThemeOptionDark")}
        </SelectItem>
        <SelectItem value="system">
          <HiLightningBolt />
          {t("formThemeOptionSystem")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
