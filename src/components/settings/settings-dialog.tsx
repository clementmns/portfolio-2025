"use client";

import * as React from "react";

import { useMediaQuery } from "@/components/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import { SettingsForm } from "./settings-form";
import { HiCog6Tooth } from "react-icons/hi2";
import { useState, useEffect } from "react";

export function SettingsDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const t = useTranslations("Header");
  const tg = useTranslations("Generic");

  useEffect(() => {
    function handler() {
      setOpen(true);
    }
    window.addEventListener("open-settings", handler);
    return () => window.removeEventListener("open-settings", handler);
  }, []);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="group"
            aria-label="Settings"
          >
            <HiCog6Tooth
              className="size-4 transition-transform duration-200 group-hover:rotate-90"
              aria-label="Settings"
            />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DrawerTitle>{t("settingsDialogTitle")}</DrawerTitle>
            <DialogDescription>
              {t("settingsDialogDescription")}
            </DialogDescription>
          </DialogHeader>
          <SettingsForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="group">
          <HiCog6Tooth
            className="size-4 transition-transform duration-200 group-hover:rotate-90"
            aria-label="Settings"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DialogTitle>{t("settingsDialogTitle")}</DialogTitle>
          <DrawerDescription>
            {t("settingsDialogDescription")}
          </DrawerDescription>
        </DrawerHeader>
        <SettingsForm className="px-4" onSuccess={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{tg("buttonCancel")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
