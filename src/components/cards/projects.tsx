import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { RiBox3Fill } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { LogoLink } from "@/components/ui/logo-link";
import { CardIcon } from "@/components/ui/card-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Project = {
  name: string;
  role: string[];
  description: string;
  stack: string[];
  logo: string;
  link?: string;
  repoLink?: string;
  active?: boolean;
  year: string;
};

export default function ProjectsCard() {
  const t = useTranslations("Projects");

  const projects: Project[] = [
    {
      name: t("selenite.name"),
      role: [t("selenite.role")],
      description: t("selenite.description"),
      stack: ["Unity", "C#"],
      logo: "/projects/selenite.png",
      link: "https://selenite.live/",
      repoLink: "https://github.com/selenite-live/",
      active: true,
      year: "2024",
    },
    {
      name: t("alm.name"),
      role: [t("alm.role")],
      description: t("alm.description"),
      stack: ["Next.js", "TailwindCSS", "Drizzle ORM", "MySQL"],
      logo: "/projects/alm.svg",
      link: "https://alm-app.vercel.app/",
      year: "2023",
    },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <CardIcon Icon={RiBox3Fill} />
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="gap-10 flex flex-col relative pt-2 px-4">
        {projects.map((proj, idx) => (
          <div
            key={proj.name + proj.role + idx}
            className={"flex items-start gap-3 w-full relative"}
          >
            {proj.repoLink && (
              <Button
                asChild
                variant="outline"
                className="group absolute top-0 right-0 z-10"
                aria-label={`${proj.name} repository`}
              >
                <Link
                  href={proj.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiExternalLink className="group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">Repo</span>
                </Link>
              </Button>
            )}
            <LogoLink
              href={proj.link}
              logoSrc={proj.logo}
              logoAlt={proj.name}
              title={`View ${proj.name} logo`}
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col">
                <div className="flex flex-col gap-0">
                  <p className="font-semibold">{proj.name}</p>
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={proj.year}>{proj.year}</time>
                  </p>
                  <p className="text-sm mt-2">{proj.description}</p>
                </div>
                <p className="leading-snug font-medium mt-2">{proj.role}</p>
                <div className="flex items-center gap-1 mt-2 font-medium">
                  <div className="flex flex-wrap gap-1 sm:hidden">
                    {proj.stack.map((skill, skillIdx) => (
                      <Badge
                        key={skill}
                        variant={"secondary"}
                        className="text-sm flex items-center gap-1.5 px-2 py-1 bg-muted/60 hover:bg-muted/80 dark:bg-muted/40"
                      >
                        {skill}
                        {skillIdx < proj.stack.length - 1 && ", "}
                      </Badge>
                    ))}
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    {proj.stack.slice(0, 2).map((skill) => (
                      <Badge
                        key={skill}
                        variant={"secondary"}
                        className="text-sm flex items-center gap-1.5 px-2 py-1 bg-muted/60 hover:bg-muted/80 dark:bg-muted/40"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {proj.stack.length > 2 && (
                      <>
                        <span className="text-sm">, </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="text-sm underline decoration-dotted cursor-help">
                                +{proj.stack.length - 2} skill
                                {proj.stack.length - 2 > 1 ? "s" : ""}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent variant={"outline"}>
                              <p className="text-base">
                                {proj.stack.join(", ")}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {idx < projects.length - 1 && (
              <div className="absolute left-[15px] top-[40px] h-full w-[2px] bg-muted"></div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
