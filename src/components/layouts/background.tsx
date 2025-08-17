import React from "react";
import { DotPattern } from "../ui/dot-pattern";

export default function Background() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none -top-60 absolute inset-0 h-[80%] w-full rounded-full bg-primary/20 blur-3xl opacity-30 -z-1000"
      />
      <DotPattern
        aria-hidden
        className="-z-1000 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={1}
        glow={true}
      />
    </>
  );
}
