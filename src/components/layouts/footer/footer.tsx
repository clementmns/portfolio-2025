import { useTranslations } from "next-intl";
import { EmailButton } from "../email-button";
import { FooterSocials } from "./footer-socials";
import { FooterCopyright } from "./footer-copyright";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex flex-col space-y-8">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter sm:tracking-tight w-full sm:w-1/2">
          {t("title")}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <EmailButton text={"contact@clementomnes.dev"} />
          <FooterSocials />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
