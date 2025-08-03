import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LangSelect } from "./lang-select";
import { settingsFormAction } from "@/actions/settings-form-action";
import { ThemeSelect } from "./theme-select";

export function SettingsForm({ className }: React.ComponentProps<"form">) {
  const t = useTranslations("Header");
  const tg = useTranslations("Generic");

  return (
    <form
      className={cn("grid items-start gap-6", className)}
      action={settingsFormAction}
    >
      <div className="grid gap-3">
        <Label htmlFor="lang">{t("formLangLabel")}</Label>
        <LangSelect />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="theme">{t("formThemeLabel")}</Label>
        <ThemeSelect />
      </div>
      <Button type="submit">{tg("buttonSave")}</Button>
    </form>
  );
}
