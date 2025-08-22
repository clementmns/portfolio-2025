import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HiTrophy } from "react-icons/hi2";
import Image from "next/image";
import { formatRange } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Certification = {
  title: string;
  desc: string;
  logo: string;
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
      start: "2024-09-01",
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
              <div className="relative z-10 flex-shrink-0 bg-white border w-fit p-2 rounded-sm shadow-xs">
                <Image
                  src={cert.logo}
                  alt={cert.title}
                  width={30}
                  height={30}
                  className="rounded-[2px]"
                />
              </div>
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
