"use client";

import { HiLightBulb, HiPlus, HiUsers } from "react-icons/hi";
import { HiChatBubbleLeftRight, HiClock } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpenjdk,
  SiPhp,
  SiReact,
  SiSharp,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../../ui/button";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "../../hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../../ui/drawer";

export default function SkillsCardDialog() {
  const t = useTranslations("Skills");
  const tg = useTranslations("Generic");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const skillCategories = [
    {
      title: t("languages"),
      skills: [
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "PHP", icon: SiPhp, color: "text-purple-900" },
        { name: "Java", icon: SiOpenjdk, color: "text-red-500" },
        { name: "C#", icon: SiSharp, color: "text-purple-600" },
      ],
    },
    {
      title: t("frameworks"),
      skills: [
        { name: "React.js", icon: SiReact, color: "text-blue-400" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Nest.js", icon: SiNestjs, color: "text-red-600" },
        { name: "Spring Boot", icon: SiSpring, color: "text-green-700" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: t("technical"),
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "SCRUM", icon: MdGroups, color: "text-blue-700" },
      ],
    },
    {
      title: t("communication"),
      skills: [
        { name: t("teamWorking"), icon: HiUsers, color: "text-gray-500" },
        {
          name: t("forceOfProposal"),
          icon: HiLightBulb,
          color: "text-gray-500",
        },
        {
          name: t("stressManagement"),
          icon: HiChatBubbleLeftRight,
          color: "text-gray-500",
        },
        { name: t("timeManagement"), icon: HiClock, color: "text-gray-500" },
      ],
    },
    {
      title: t("designSkills"),
      skills: [
        {
          name: "Adobe Illustrator",
          icon: SiAdobeillustrator,
          color: "text-gray-400",
        },
        {
          name: "Adobe Photoshop",
          icon: SiAdobephotoshop,
          color: "text-gray-400",
        },
        { name: "Adobe XD", icon: SiAdobexd, color: "text-gray-400" },
        { name: "Figma", icon: SiFigma, color: "text-gray-400" },
      ],
    },
  ];

  const skills = () => {
    return (
      <div className="space-y-6 pt-4">
        {skillCategories.map((category, categoryIndex) => {
          const isSecondarySkill = categoryIndex >= 3;
          return (
            <div key={category.title} className="space-y-3">
              <h3
                className={`text-lg font-semibold pb-2 ${
                  isSecondarySkill ? "text-muted-foreground" : ""
                }`}
              >
                {category.title}
              </h3>
              <div
                className={`grid gap-3 ${
                  isSecondarySkill ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-3 group p-3 rounded-lg transition-colors ${
                        isSecondarySkill
                          ? "bg-muted/30 border-muted"
                          : "border hover:bg-muted/50"
                      }`}
                    >
                      <IconComponent
                        className={`${
                          isSecondarySkill ? "w-4 h-4" : "w-6 h-6"
                        } ${skill.color} group-hover:rotate-12 transition-transform`}
                      />
                      <span
                        className={`${
                          isSecondarySkill
                            ? "font-normal  text-muted-foreground"
                            : "font-medium text-sm"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="w-full">
            <HiPlus className="w-4 h-4 mr-2" />
            {tg("buttonShowMore")}
          </Button>
        </DialogTrigger>
        <DialogContent className="!max-w-3xl w-full max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t("title")}</DialogTitle>
          </DialogHeader>
          {skills()}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="w-full">
          <HiPlus className="w-4 h-4 mr-2" />
          {tg("buttonShowMore")}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader className="text-left">
          <DialogTitle>{t("title")}</DialogTitle>
        </DrawerHeader>
        <div className="overflow-y-auto px-4">{skills()}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{tg("buttonClose")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
