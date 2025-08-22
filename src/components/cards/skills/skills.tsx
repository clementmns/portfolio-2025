"use client";
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
import { Badge } from "../../ui/badge";
import SkillsCardDialog from "./skills-dialog";

export default function SkillsCard() {
  const t = useTranslations("Skills");

  const hypeStack = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React.js", icon: SiReact, color: "text-blue-400" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-gray-900 dark:text-white",
    },
    { name: "Nest.js", icon: SiNestjs, color: "text-red-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Java", icon: SiOpenjdk, color: "text-red-500" },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20">
          <HiUserGroup size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 space-y-4">
        <div className="flex flex-row flex-wrap justify-between sm:flex-col gap-2">
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
      </CardContent>
    </Card>
  );
}
