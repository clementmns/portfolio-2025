import { useTranslations } from "next-intl";

export function FooterCopyright() {
  const t = useTranslations("Footer");
  return (
    <div className="sm:mt-12 text-xs text-muted-foreground flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-center sm:text-left">
      <p>{t("message")}</p>
      <p>
        &copy; {new Date().getFullYear()} {t("copyright")}
      </p>
    </div>
  );
}
