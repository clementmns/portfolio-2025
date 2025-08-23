import { useTranslations } from "next-intl";

export function HiringFullContent() {
  const t = useTranslations("Hiring");
  return (
    <div id="hiring-full-content">
      <p className="text-xs text-muted-foreground leading-relaxed">
        {t("paragraph1")}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed mt-2">
        {t("paragraph2")}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed mt-2">
        {t("paragraph3")}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed mt-2">
        {t("whyDifferentTitle")}: {t("whyDifferent")}
      </p>
    </div>
  );
}
