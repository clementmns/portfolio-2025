"use client";
import { ReactNode } from "react";

/**
 * SeoHidden renders content so it is present in the DOM for crawlers and screen readers
 * but removed from visual layout flow (zero impact on sizing / spacing).
 * Compared to tailwind's sr-only it also removes the 1px footprint entirely via absolute positioning.
 */
export function SeoHidden({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        margin: 0,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {children}
    </div>
  );
}
