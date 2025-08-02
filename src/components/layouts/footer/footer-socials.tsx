import { Button } from "../../ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export function FooterSocials({
  onGithub,
  onLinkedin,
}: {
  onGithub: () => void;
  onLinkedin: () => void;
}) {
  return (
    <div className="flex items-center justify-center sm:justify-end space-x-2">
      <Button
        className="group"
        variant="ghost"
        size="icon"
        onClick={onGithub}
        aria-label="GitHub"
      >
        <GithubIcon className="size-4 transition-transform duration-200 group-hover:rotate-12" />
      </Button>
      <Button
        className="group"
        variant="ghost"
        size="icon"
        onClick={onLinkedin}
        aria-label="LinkedIn"
      >
        <LinkedinIcon className="size-4 transition-transform duration-200 group-hover:rotate-12" />
      </Button>
    </div>
  );
}
