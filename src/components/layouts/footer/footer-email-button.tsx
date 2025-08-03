import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function FooterEmailButton() {
  const t = useTranslations("Footer");
  const [copied, setCopied] = useState(false);

  const handleEmailClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(t("email"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      window.location.href = `mailto:${t("email")}`;
    }
  }, [t]);

  return (
    <Button
      onClick={handleEmailClick}
      className={[
        "group w-full sm:w-auto transition-transform duration-150",
        copied ? "scale-95" : "scale-100",
      ].join(" ")}
      aria-label={t("email")}
    >
      {t("email")}
      <span className="ml-2 relative size-4 inline-block align-middle">
        <CopyIcon
          className={[
            "absolute size-4 transition-all duration-300 ease-in-out",
            copied
              ? "opacity-0 scale-75 rotate-90 translate-y-2"
              : "opacity-100 scale-100 rotate-0 translate-y-0",
          ].join(" ")}
          aria-hidden={copied}
        />
        <CheckIcon
          className={[
            "absolute size-4 transition-all duration-300 ease-in-out",
            copied
              ? "opacity-100 scale-100 rotate-0 translate-y-0"
              : "opacity-0 scale-75 -rotate-90 -translate-y-2",
          ].join(" ")}
          aria-hidden={!copied}
        />
      </span>
    </Button>
  );
}
