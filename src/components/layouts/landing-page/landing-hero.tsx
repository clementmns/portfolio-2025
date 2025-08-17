"use client";

import Link from "next/link";
import GMT from "../header/header-gmt";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { EmailButton } from "../email-button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Rocket, Layers, Sparkles, ExternalLinkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DynamicAge } from "@/components/hooks/use-age";

type HighlightKey =
  | "highlightJavaReact"
  | "highlightProblemSolving"
  | "highlightArchitecture";

export default function LandingHero() {
  const t = useTranslations("LandingHero");

  const name = t("heroName");
  const title = t("heroTitle");
  const nameIndex = title.indexOf(name);
  const before = nameIndex >= 0 ? title.slice(0, nameIndex) : title;
  const after = nameIndex >= 0 ? title.slice(nameIndex + name.length) : "";

  const birthDate = new Date(2005, 1, 23, 14); // 23 Feb 2005 14:00 local time

  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden
        className="pointer-events-none -top-60 absolute inset-0 h-[80%] w-full rounded-full bg-primary/20 blur-3xl opacity-30 -z-1000"
      />
      <DotPattern
        aria-hidden
        className=" [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={1}
        glow={true}
      />

      <div className="relative z-10 py-0 sm:py-16 md:py-24 w-full mt-14 md:mt-0">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="inline-flex w-fit sm:w-auto items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-background">
            <span className="size-1.5 rounded-full bg-orange-500" />
            <span>
              {t("currentlyWorkingAt")}{" "}
              <Link
                href="https://r3mscore.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="R3mScore"
                className="font-semibold underline hover:text-primary inline-flex items-center gap-1"
              >
                R3mScore
                <ExternalLinkIcon strokeWidth={2.5} className="size-3" />
              </Link>
            </span>
          </div>
        </div>

        <h1
          id="hero-title"
          className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center sm:text-left"
        >
          <span>{before}</span>
          {nameIndex >= 0 ? (
            <span className="relative inline-flex items-center group">
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-3 -translate-x-1/2 opacity-0 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 hidden md:block"
              >
                <span className="block rounded-xl border border-foreground/10 bg-background/90 p-2 backdrop-blur shadow-2xl ring-1 ring-foreground/10">
                  <span className="relative block size-40 overflow-hidden rounded-lg">
                    <Image
                      src="/me.webp"
                      alt=""
                      fill
                      sizes="160px"
                      priority
                      className="object-cover object-[center_25%] md:object-center"
                    />
                  </span>
                  <span className="mt-2 w-full flex justify-center">
                    <span
                      className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 bg-background/70 font-mono text-xs"
                      title="Live updating age"
                    >
                      <DynamicAge
                        birthDate={birthDate}
                        decimals={10}
                        className="font-mono text-primary/90"
                      />
                      <span className="text-muted-foreground/70 uppercase tracking-wide">
                        {t("yrs")}
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="underline underline-offset-4 cursor-pointer">
                {name}
              </span>
            </span>
          ) : null}
          <span>{after}</span>
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground justify-center sm:justify-start">
          <GMT />
        </div>

        <div className="mt-6 md:hidden flex flex-col items-center gap-2">
          <div className="relative w-full">
            <div className="relative rounded-full p-[3px]">
              <div className="relative w-full overflow-hidden rounded-lg h-[25vh]">
                <Image
                  src="/me.webp"
                  alt={`${name} portrait`}
                  fill
                  priority
                  className="object-cover object-[center_30%] md:object-center"
                />
              </div>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-background/70 backdrop-blur font-mono text-xs"
            aria-label="Live age in years"
            title="Live updating age"
          >
            <DynamicAge
              birthDate={birthDate}
              decimals={10}
              className="font-mono text-primary/90"
            />
            <span className="text-muted-foreground/70 uppercase tracking-wide">
              {t("yrs")}
            </span>
          </span>
        </div>

        <p className="mt-6 text-pretty text-lg leading-7 text-muted-foreground max-w-[70ch] mx-auto sm:mx-0 text-justify sm:text-left">
          {t("heroDescription")}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 justify-center sm:justify-start text-xs text-muted-foreground">
          <span className="inline-flex items-center text-center rounded-full border px-2.5 py-1 bg-background">
            {t("heroStack")}
          </span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 justify-center sm:justify-start">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#projects" aria-label={t("viewProjects")}>
              {t("viewProjects")}
            </Link>
          </Button>
          <EmailButton text={t("copyEmail")} variant="outline" size="lg" />{" "}
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-5xl mx-auto sm:mx-0">
          {[
            { key: "highlightJavaReact", Icon: Sparkles },
            { key: "highlightProblemSolving", Icon: Rocket },
            { key: "highlightArchitecture", Icon: Layers },
          ].map(({ key, Icon }) => (
            <li key={key} className="h-full">
              <Card
                className="group justify-center h-full p-4 rounded-2xl bg-background/60 text-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                tabIndex={0}
                aria-label={t(key as HighlightKey)}
              >
                <div className="flex items-center gap-3 justify-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0 group-hover:bg-primary/15 group-focus-visible:bg-primary/15 transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <p className="leading-snug text-muted-foreground/90 flex-1">
                    {t(key as HighlightKey)}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
