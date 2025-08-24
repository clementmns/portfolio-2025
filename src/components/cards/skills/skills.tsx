import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiUserGroup } from "react-icons/hi2";
import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiDocker,
  SiOpenjdk,
  SiTypescript,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import SkillsCardDialog from "./skills-dialog";
import { SkillsFullContent } from "./skills-content";
import { CardIcon } from "@/components/ui/card-icon";
import { SeoHidden } from "@/components/seo/seo-hidden";

type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

export default function SkillsCard() {
  const t = useTranslations("Skills");

  const hypeStack: Skill[] = [
    { name: t("TypeScript"), icon: SiTypescript, color: "text-blue-500" },
    { name: t("Reactjs"), icon: SiReact, color: "text-blue-400" },
    {
      name: t("Nextjs"),
      icon: SiNextdotjs,
      color: "text-gray-900 dark:text-white",
    },
    { name: t("Nestjs"), icon: SiNestjs, color: "text-red-600" },
    { name: t("Docker"), icon: SiDocker, color: "text-blue-500" },
    { name: t("Java"), icon: SiOpenjdk, color: "text-red-500" },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <CardIcon Icon={HiUserGroup} />
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 space-y-4">
        <div className="flex flex-row flex-wrap justify-between sm:flex-col gap-2 m-0">
          {hypeStack.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <Badge
                variant="ghost"
                key={skill.name}
                className="flex items-center gap-1.5 px-2 py-1"
              >
                <IconComponent className={`w-3 h-3 ${skill.color}`} />
                <span className="text-sm">{skill.name}</span>
              </Badge>
            );
          })}
          <SkillsCardDialog />
        </div>
        <SeoHidden id="skills-full-text">
          <SkillsFullContent />
        </SeoHidden>
      </CardContent>
    </Card>
  );
}
