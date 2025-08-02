"use client";

import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { FooterEmailButton } from "./footer-email-button";
import { FooterSocials } from "./footer-socials";
import { FooterCopyright } from "./footer-copyright";

export default function Footer() {
  const handleGithubRedirect = useCallback(() => {
    window.open(
      "https://github.com/clementmns",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleLinkedinRedirect = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/clement-omnes/",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const t = useTranslations("Footer");

  return (
    <footer className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="flex flex-col space-y-8">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter sm:tracking-tight w-full sm:w-1/2">
          {t("title")}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <FooterEmailButton />
          <FooterSocials
            onGithub={handleGithubRedirect}
            onLinkedin={handleLinkedinRedirect}
          />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
