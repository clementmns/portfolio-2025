import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HiTrophy } from "react-icons/hi2";
import { formatRange } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LogoLink } from "../ui/logo-link";

type Certification = {
  title: string;
  desc: string;
  logo: string;
  link: string;
  start: string;
  end?: string | null;
};

export default function Certifications() {
  const t = useTranslations("Certifications");

  const certifications: Certification[] = [
    {
      title: "OpQuast",
      desc: t("opquast"),
      logo: "/certifications/opquast.png",
      link: "https://www.opquast.com/",
      start: "2025-03-04",
      end: "2028-03-04",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 dark:bg-primary/20">
          <HiTrophy size={16} className="text-primary" />
        </div>
        <CardTitle>{t("title")}</CardTitle>
        <CardContent className="gap-5 flex flex-col relative pt-2">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title + cert.desc + idx}
              className="flex items-start gap-3 w-full relative"
            >
              <LogoLink
                href={cert.link}
                logoSrc={cert.logo}
                logoAlt={cert.title}
                title={`View ${cert.title} certification`}
              />
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline justify-between">
                    <p className="font-semibold">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">
                      <time dateTime={cert.start}>
                        {formatRange(cert.start, cert.end)}
                      </time>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {cert.desc}
                  </p>
                </div>
              </div>
              {idx < certifications.length - 1 && (
                <div className="absolute left-[15px] top-[40px] h-full w-[2px] bg-muted"></div>
              )}
            </div>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
