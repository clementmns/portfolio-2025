"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export function FooterSocials() {
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

  return (
    <div className="flex items-center justify-center sm:justify-end space-x-2">
      <Button
        className="group"
        variant="outline"
        size="icon"
        onClick={handleGithubRedirect}
        aria-label="GitHub"
      >
        <GithubIcon className="size-4 transition-transform duration-200 group-hover:rotate-12" />
      </Button>
      <Button
        className="group"
        variant="outline"
        size="icon"
        onClick={handleLinkedinRedirect}
        aria-label="LinkedIn"
      >
        <LinkedinIcon className="size-4 transition-transform duration-200 group-hover:rotate-12" />
      </Button>
    </div>
  );
}
