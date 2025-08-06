import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { Font } from "@/types/fonts";
import { fontClassMap } from "../../lib/fonts";

export function FontSelect() {
  const t = useTranslations("Header");
  const bodyClass =
    typeof window !== "undefined" ? document.body.className : "";
  let font: Font = "spaceGrotesk";
  if (bodyClass.includes(fontClassMap["geist"])) {
    font = "geist";
  } else if (bodyClass.includes(fontClassMap["openDyslexic"])) {
    font = "openDyslexic";
  } else if (bodyClass.includes(fontClassMap["noto"])) {
    font = "noto";
  }

  return (
    <Select defaultValue={font} name="font">
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("formFontPlaceholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="spaceGrotesk"
          className={`${fontClassMap["spaceGrotesk"]} antialiased`}
        >
          {t("formFontOptionSpaceGrotesk")}
        </SelectItem>
        <SelectItem
          value="geist"
          className={`${fontClassMap["geist"]} antialiased`}
        >
          {t("formFontOptionGeist")}
        </SelectItem>
        <SelectItem
          value="noto"
          className={`${fontClassMap["noto"]} antialiased`}
        >
          {t("formFontOptionNoto")}
        </SelectItem>
        <SelectItem
          value="openDyslexic"
          className={`${fontClassMap["openDyslexic"]} antialiased`}
        >
          {t("formFontOptionOpenDyslexic")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
