import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { BoltIcon, MoonIcon, SunIcon } from "lucide-react";
import { Theme } from "../../types/themes";

export function ThemeSelect() {
  const t = useTranslations("Header");
  const htmlClass =
    typeof window !== "undefined" ? document.documentElement.className : "";
  let theme: Theme = "system";
  if (htmlClass.includes("dark")) {
    theme = "dark";
  } else if (htmlClass.includes("light")) {
    theme = "light";
  }

  return (
    <Select defaultValue={theme} name="theme">
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("formThemePlaceholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <SunIcon />
          {t("formThemeOptionLight")}
        </SelectItem>
        <SelectItem value="dark">
          <MoonIcon />
          {t("formThemeOptionDark")}
        </SelectItem>
        <SelectItem value="system">
          <BoltIcon />
          {t("formThemeOptionSystem")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
