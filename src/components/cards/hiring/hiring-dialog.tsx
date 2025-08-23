"use client";

import { HiPlus, HiRocketLaunch, HiHeart } from "react-icons/hi2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function HiringDialog() {
  const t = useTranslations("Hiring");
  const tg = useTranslations("Generic");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-6 leading-relaxed">
          <div className="space-y-3">
            <p className="text-muted-foreground">{t("paragraph1")}</p>
            <p className="text-muted-foreground">{t("paragraph2")}</p>
            <p className="text-muted-foreground">{t("paragraph3")}</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
            <h4 className="font-medium text-lg text-foreground mb-2 flex items-center gap-2">
              <HiHeart className="w-4 h-4 text-red-500" />
              {t("whyDifferentTitle")}
            </h4>
            <p>{t("whyDifferent")}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-lg text-foreground flex items-center gap-2">
              <HiRocketLaunch className="w-4 h-4 text-blue-500" />
              {t("preferencesTitle")}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">↳</span>
                <span>{t("preference1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">↳</span>
                <span>{t("preference2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">↳</span>
                <span>{t("preference3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="w-full">
            <HiPlus className="w-4 h-4 mr-2" />
            {tg("buttonShowMore")}
          </Button>
        </DialogTrigger>
        <DialogContent className="!max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t("dialogTitle")}</DialogTitle>
          </DialogHeader>
          {content()}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="w-full">
          <HiPlus className="w-4 h-4 mr-2" />
          {tg("buttonShowMore")}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DialogTitle>{t("dialogTitle")}</DialogTitle>
        </DrawerHeader>
        <div className="overflow-y-auto px-4">{content()}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">{tg("buttonClose")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
