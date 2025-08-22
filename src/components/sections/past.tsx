import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HiBriefcase } from "react-icons/hi2";
import { formatRange } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LogoLink } from "../ui/logo-link";

type Experience = {
  company: string;
  role: string;
  logo: string;
  link: string;
  start: string;
  end?: string | null;
};

export default function PastCard() {
  const t = useTranslations("Past");

  const experiences: Experience[] = [
    {
      company: "R3mScore",
      role: t("1.role"),
      link: "https://www.r3mscore.com/",
      logo: "/companies/r3mscore.jpg",
      start: "2024-09-01",
    },
    {
      company: "R3mScore",
      role: t("2.role"),
      link: "https://www.r3mscore.com/",
      logo: "/companies/r3mscore.jpg",
      start: "2024-03-01",
      end: "2024-06-01",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20">
          <HiBriefcase size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
        <CardContent className="gap-5 flex flex-col relative pt-2">
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
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline justify-between">
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">
                      <time dateTime={exp.start}>
                        {formatRange(exp.start, exp.end)}
                      </time>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {exp.role}
                  </p>
                </div>
              </div>
              {idx < experiences.length - 1 && (
                <div className="absolute left-[15px] top-[40px] h-full w-[2px] bg-muted"></div>
              )}
            </div>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
