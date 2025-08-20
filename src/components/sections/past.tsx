import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HiBriefcase } from "react-icons/hi2";
import Image from "next/image";
import { getLocale } from "next-intl/server";

type Experience = {
  company: string;
  role: string;
  logo: string;
  start: string;
  end?: string | null;
};

const experiences: Experience[] = [
  {
    company: "R3mScore",
    role: "FullStack Developer (Apprenticeship)",
    logo: "/companies/r3mscore.jpg",
    start: "2024-09-01",
  },
  {
    company: "R3mScore",
    role: "FullStack Developer (Internship)",
    logo: "/companies/r3mscore.jpg",
    start: "2024-03-01",
    end: "2024-06-01",
  },
];

async function formatRange(start: string, end?: string | null) {
  try {
    const locale = await getLocale();
    const fmt = new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
    });
    const startDate = new Date(start);
    const startLabel = fmt.format(startDate);
    if (!end) return `${startLabel} – Present`;
    const endDate = new Date(end);
    const endLabel = fmt.format(endDate);
    return startLabel === endLabel ? startLabel : `${startLabel} – ${endLabel}`;
  } catch {
    return `${start} – ${end || "Present"}`;
  }
}

export default function PastCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-50 dark:bg-violet-900">
          <HiBriefcase
            size={16}
            className="text-violet-500 dark:text-violet-400"
          />
        </div>
        <CardTitle>Past</CardTitle>
        <CardContent className="gap-5 flex flex-col relative pt-2">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company + exp.role + idx}
              className="flex items-start gap-3 w-full relative"
            >
              <div className="relative z-10 flex-shrink-0 bg-white border w-fit p-2 rounded-sm shadow-xs">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={30}
                  height={30}
                  className="rounded-[2px]"
                />
              </div>
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
