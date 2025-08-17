import { useTranslations } from "next-intl";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { HiUserGroup } from "react-icons/hi2";

export default function CurrentCard() {
  const t = useTranslations("Current");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900">
          <HiUserGroup
            size={16}
            className="text-orange-500 dark:text-orange-400"
          />
        </div>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>
          <p className="text-xs">{t("description")}</p>
          <p className="font-semibold text-foreground mt-1">{t("role")}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
