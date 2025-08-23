import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { HiSun } from "react-icons/hi";
import { LuSnowflake } from "react-icons/lu";
import { FaLeaf, FaCanadianMapleLeaf } from "react-icons/fa6";
import { Season } from "@/types/seasons";
import { HiCalendar } from "react-icons/hi";

export function SeasonSelect() {
  const t = useTranslations("Header");
  let season: Season = "auto";
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(?:^|; )user-season=([^;]*)/);
    const cookieSeason = match?.[1] as Season | undefined;
    if (
      cookieSeason === "spring" ||
      cookieSeason === "summer" ||
      cookieSeason === "autumn" ||
      cookieSeason === "winter" ||
      cookieSeason === "auto"
    ) {
      season = cookieSeason;
    }
  }

  return (
    <Select
      defaultValue={season}
      name="season"
      aria-label={t("formSeasonLabel")}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("formSeasonPlaceholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="autumn" className="autumn">
          <FaCanadianMapleLeaf />
          {t("formSeasonOptionAutumn")}
        </SelectItem>
        <SelectItem value="winter" className="winter">
          <LuSnowflake />
          {t("formSeasonOptionWinter")}
        </SelectItem>
        <SelectItem value="spring" className="spring">
          <FaLeaf />
          {t("formSeasonOptionSpring")}
        </SelectItem>
        <SelectItem value="summer" className="summer">
          <HiSun />
          {t("formSeasonOptionSummer")}
        </SelectItem>
        <SelectItem value="auto">
          <HiCalendar />
          {t("formSeasonOptionAuto")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
