"use client";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HiSparkles,
  HiCodeBracket,
  HiRocketLaunch,
  HiUserGroup,
  HiArrowTrendingUp,
} from "react-icons/hi2";
import HiringDialog from "./hiring-dialog";
import { HiringFullContent } from "./hiring-content";
import { SeoHidden } from "@/components/seo/seo-hidden";

type Chip = {
  icon: React.ComponentType<{ className?: string }>;
  key: string;
};

export default function HiringCard() {
  const t = useTranslations("Hiring");

  const chips: Chip[] = [
    { icon: HiArrowTrendingUp, key: "chipDelivery" },
    { icon: HiCodeBracket, key: "chipQuality" },
    { icon: HiUserGroup, key: "chipCollab" },
    { icon: HiRocketLaunch, key: "chipGrowth" },
    { icon: HiSparkles, key: "chipInnovation" },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20 shrink-0">
          <HiSparkles size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 space-y-4">
        <div className="m-0 flex flex-col gap-4">
          <p className="text-[13px] leading-snug">{t("hybridPitch")}</p>
          <div className="flex flex-wrap gap-2 text-[11px] font-medium mt-2">
            {chips.map(({ icon: Icon, key }) => (
              <span
                key={key}
                className="flex items-center gap-1 rounded-md border bg-muted/50 dark:bg-muted/20 px-2 py-1"
              >
                <Icon className="w-3 h-3 text-primary" />
                {t(key)}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] uppercase tracking-wide font-semibold">
            {t("verbs")
              .split(",")
              .map((verb) => (
                <div
                  key={verb}
                  className="rounded-md bg-primary/10 dark:bg-primary/15 text-primary py-2"
                >
                  {verb.trim()}
                </div>
              ))}
          </div>
          <HiringDialog />
        </div>
        <SeoHidden id="hiring-full-text">
          <HiringFullContent />
        </SeoHidden>
      </CardContent>
    </Card>
  );
}
