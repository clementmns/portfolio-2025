import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiAcademicCap } from "react-icons/hi";
import { formatRange } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LogoLink } from "@/components/ui/logo-link";

type Training = {
  school: string;
  program: string;
  logo: string;
  link: string;
  start: string;
  end?: string | null;
};

export default function TrainingsCard() {
  const t = useTranslations("Trainings");

  const trainings: Training[] = [
    {
      school: t("1.school"),
      program: t("1.program"),
      link: "https://www.cesi.fr/formation/ingenieur-e-informatique-cursus-en-3-ans-par-lapprentissage-2513617/",
      logo: "/schools/cesi.png",
      start: "2025-10-06",
      end: "2028-07-31",
    },
    {
      school: t("2.school"),
      program: t("2.program"),
      link: "https://formation.univ-rouen.fr/fr/catalogue-de-l-offre-de-formation/but-BUT/but-metiers-du-multimedia-et-de-l-internet-L4S5PA8M.html",
      logo: "/schools/univ-rouen.png",
      start: "2022-09-01",
      end: "2025-07-31",
    },
  ];

  return (
    <Card>
      <CardHeader className="justify-start flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20">
          <HiAcademicCap size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="gap-5 flex flex-col relative pt-2 px-4">
        {trainings.map((tr, idx) => (
          <div
            key={tr.school + tr.program + idx}
            className="flex items-start gap-3 w-full relative"
          >
            <LogoLink
              href={tr.link}
              logoSrc={tr.logo}
              logoAlt={tr.school}
              title={`View ${tr.school} logo`}
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline justify-between">
                  <p className="font-semibold">{tr.school}</p>
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={tr.start}>
                      {formatRange(tr.start, tr.end, "year")}
                    </time>
                  </p>
                </div>
                <p className="text-sm leading-snug">{tr.program}</p>
              </div>
            </div>
            {idx < trainings.length - 1 && (
              <div className="absolute left-[15px] top-[40px] h-full w-[2px] bg-muted"></div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
