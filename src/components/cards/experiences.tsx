import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiBriefcase } from "react-icons/hi2";
import { formatRange } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LogoLink } from "@/components/ui/logo-link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CardIcon } from "@/components/ui/card-icon";

type Experience = {
  company: string;
  role: string;
  type?: string;
  location: string;
  stack: string[];
  logo: string;
  link: string;
  start: string;
  end?: string | null;
};

export default function ExperiencesCard() {
  const t = useTranslations("Experiences");

  const experiences: Experience[] = [
    {
      company: "R3mScore",
      role: t("1.role"),
      type: t("apprenticeship"),
      location: t("remote"),
      link: "https://www.r3mscore.com/",
      logo: "/companies/r3mscore.jpg",
      start: "2024-09-01",
      stack: ["React", "Java", "TypeScript", "Spring", "Docker", "MySQL"],
    },
    {
      company: "R3mScore",
      role: t("2.role"),
      type: t("internship"),
      location: t("remote"),
      link: "https://www.r3mscore.com/",
      logo: "/companies/r3mscore.jpg",
      start: "2024-03-01",
      end: "2024-06-01",
      stack: ["React", "JavaScript", "Git"],
    },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <CardIcon Icon={HiBriefcase} />
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="gap-10 flex flex-col relative pt-2 px-4">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company + exp.role + idx}
            className="flex items-start gap-3 w-full relative"
          >
            <LogoLink
              href={exp.link}
              logoSrc={exp.logo}
              logoAlt={exp.company}
              title={`View ${exp.company} logo`}
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col">
                <div className="flex flex-col gap-0">
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={exp.start}>
                      {formatRange(exp.start, exp.end)}
                    </time>
                    {" · "}
                    {exp.type}
                  </p>
                </div>
                <p className="leading-snug font-medium mt-2">{exp.role}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                <div className="flex items-center gap-1 mt-2 font-medium">
                  <div className="flex flex-wrap gap-1 sm:hidden">
                    {exp.stack.map((skill, skillIdx) => (
                      <span key={skill} className="text-sm">
                        {skill}
                        {skillIdx < exp.stack.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    {exp.stack.slice(0, 2).map((skill, skillIdx) => (
                      <span key={skill} className="text-sm">
                        {skill}
                        {skillIdx < Math.min(exp.stack.length, 2) - 1 && ", "}
                      </span>
                    ))}
                    {exp.stack.length > 2 && (
                      <>
                        <span className="text-sm">, </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="text-sm underline decoration-dotted cursor-help">
                                +{exp.stack.length - 2} skill
                                {exp.stack.length - 2 > 1 ? "s" : ""}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent variant={"outline"}>
                              <p className="text-base">
                                {exp.stack.join(", ")}
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
            {idx < experiences.length - 1 && (
              <div className="absolute left-[15px] top-[40px] h-full w-[2px] bg-muted"></div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
