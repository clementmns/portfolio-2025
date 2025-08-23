import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiCpuChip } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa6";
import { SiIntellijidea, SiNotion, SiJira } from "react-icons/si";
import { IoTerminal } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";

type Tool = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
};

type ToolSection = {
  label: string;
  items: Tool[];
};

export default function ToolsCard() {
  const t = useTranslations("Tools");
  const sections: ToolSection[] = [
    {
      label: t("environment"),
      items: [
        {
          name: "macOS",
          icon: FaApple,
          color: "text-zinc-900 dark:text-zinc-100",
        },
        { name: "Linux", icon: FaLinux, color: "text-orange-500" },
        { name: "Windows", icon: FaWindows, color: "text-sky-600" },
      ],
    },
    {
      label: t("ide"),
      items: [
        { name: "VS Code", icon: BiLogoVisualStudio, color: "text-sky-600" },
        {
          name: "IntelliJ IDEA",
          icon: SiIntellijidea,
          color: "text-black-600",
        },
        { name: "Terminal", icon: IoTerminal, color: "text-zinc-500" },
      ],
    },
    {
      label: t("tooling"),
      items: [
        { name: "Notion", icon: SiNotion, color: "text-black dark:text-white" },
        { name: "Jira", icon: SiJira, color: "text-sky-600" },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20 shrink-0">
          <HiCpuChip size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 space-y-5">
        {sections.map((section) => (
          <div key={section.label} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                {section.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.items.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Badge
                    variant="secondary"
                    key={tool.name}
                    className="flex items-center gap-1.5 px-2 py-1 bg-muted/60 hover:bg-muted/80 dark:bg-muted/40"
                  >
                    <Icon className={`w-3.5 h-3.5 ${tool.color}`} />
                    <span className="text-xs font-medium">{tool.name}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
