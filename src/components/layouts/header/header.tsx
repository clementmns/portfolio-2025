"use client";

import { SettingsDialog } from "@/components/settings/settings-dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

export default function Header() {
  const t = useTranslations("Header");

  function openPalette() {
    window.dispatchEvent(new Event("open-command-palette"));
  }

  return (
    <header className="w-full fixed top-0 z-999">
      <div className="container mx-auto max-w-4xl px-4 py-2 flex items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={openPalette}
            className="hidden sm:inline-flex items-center gap-2"
          >
            <span>{t("commandPalette")}</span>
            <kbd className="pointer-events-none text-[10px] px-1.5 py-0.5 rounded border bg-muted font-mono leading-none tracking-wider">
              {navigator.platform.includes("Mac") ? "⌘K" : "Ctrl+K"}
            </kbd>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={openPalette}
            aria-label={t("commandPalette")}
            className="sm:hidden"
          >
            <Search className="size-4" />
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
}
