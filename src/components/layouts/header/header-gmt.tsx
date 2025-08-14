"use client";

import { useLocale } from "next-intl";
import type { Locale } from "@/types/locales";
import { fallbackLocale } from "@/types/locales";
import { useEffect, useState } from "react";

export default function GMT() {
  const locale = (useLocale() as Locale) || fallbackLocale;
  const [now, setNow] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);
  const timeZone = "Europe/Paris";

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <p className="text-sm font-medium whitespace-nowrap font-mono">&nbsp;</p>
    );
  }

  const time = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
  });

  const offset =
    new Date()
      .toLocaleTimeString("en-US", {
        timeZone,
        timeZoneName: "shortOffset",
      })
      .match(/GMT([+-]\d+)/)?.[1] || "0";
  const displayedTimeZoneName = `GMT${offset}`;

  return (
    <p className="text-sm font-medium whitespace-nowrap font-mono">{`${displayedTimeZoneName} / ${time}`}</p>
  );
}
