import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiUserGroup } from "react-icons/hi2";
import { CardIcon } from "@/components/ui/card-icon";

export default function CurrentCard() {
  const t = useTranslations("Current");

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <CardIcon Icon={HiUserGroup} />
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-sm">{t("description")}</p>
        <p className="text-sm font-semibold mt-1">{t("role")}</p>
      </CardContent>
    </Card>
  );
}
