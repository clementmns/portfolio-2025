import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HiUser } from "react-icons/hi2";

export default function AboutCard() {
  const t = useTranslations("About");

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20">
          <HiUser size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-sm leading-relaxed">{t("about")}</p>
      </CardContent>
    </Card>
  );
}
