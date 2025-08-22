import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HiMapPin } from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi2";
import Link from "next/link";
import GMT from "../gmt";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section className="relative w-full" aria-labelledby="hero-title">
      <div className="flex flex-col gap-6 w-full sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col max-w-none sm:max-w-xl lg:max-w-2xl order-1 items-center sm:items-start">
          <Avatar className="size-42 sm:size-24 md:size-32 mb-3 sm:mb-4 rounded-xl">
            <AvatarImage
              src="/me.webp"
              className="object-cover"
              alt="Profile picture of @clementmns"
            />
            <AvatarFallback>CO</AvatarFallback>
          </Avatar>
          <h1
            id="hero-title"
            className="font-bold text-4xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            {t("heroTitle")}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
            I&apos;m a {t("location")}{" "}
            <span className="font-medium text-foreground">
              Full-stack developer and Software Engineering student{" "}
            </span>
            with experience working with various technologies. Been building
            software for over 3 years, and I currently work at{" "}
            <a
              href="https://r3mscore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline inline-flex items-center hover:text-primary transition-colors"
            >
              R3mScore
              <HiExternalLink className="size-3 ml-1" />
            </a>
          </p>
          <div className="mt-6">
            <dl className="flex flex-wrap gap-6 justify-center sm:justify-start">
              <div className="flex flex-col items-center sm:items-start gap-1 min-w-20">
                <dt className="text-[10px] tracking-wide font-medium text-muted-foreground uppercase">
                  {t("location")}
                </dt>
                <dd>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className="px-2 py-1 text-xs font-medium cursor-help group"
                        aria-label="Open map with location of Rouen"
                      >
                        <HiMapPin className="text-primary group-hover:rotate-12 transition-transform" />{" "}
                        {t("city")}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-[11px]">
                      <GMT />
                    </TooltipContent>
                  </Tooltip>
                </dd>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1 min-w-20">
                <dt className="text-[10px] tracking-wide font-medium text-muted-foreground uppercase">
                  {t("language")}
                </dt>
                <dd>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className="px-2 py-1 text-xs font-medium cursor-help group"
                        aria-label={
                          t("languagesListFull") || t("languagesList")
                        }
                      >
                        <IoLanguage className="text-primary group-hover:rotate-12 transition-transform" />{" "}
                        {t("languagesList")}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="text-sm font-medium whitespace-nowrap font-mono"
                    >
                      {t("languagesListFull") || t("languagesList")}
                    </TooltipContent>
                  </Tooltip>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-6 flex sm:justify-start justify-center gap-3">
            <div className="flex flex-wrap gap-2">
              <Button
                className="group"
                variant="default"
                size="default"
                asChild
                aria-label="Download vCard"
              >
                <Link href={`/vcard/${locale}-vcard.vcf`} download>
                  <HiIdentification className="mr-1.5 group-hover:rotate-12 transition-transform" />{" "}
                  {t("getInTouch")}
                </Link>
              </Button>
              <Button
                className="group"
                variant="outline"
                size="icon"
                asChild
                aria-label="GitHub profile"
              >
                <Link
                  href="https://github.com/clementmns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    strokeWidth={2.5}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </Link>
              </Button>
              <Button
                className="group"
                variant="outline"
                size="icon"
                asChild
                aria-label="LinkedIn profile"
              >
                <Link
                  href="https://www.linkedin.com/in/clement-omnes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    strokeWidth={2.5}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
