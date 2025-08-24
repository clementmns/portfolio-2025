import React from "react";
import { Button } from "@/components/ui/button";

interface MessageSuggestionProps {
  suggestion: string;
  onClick?: (suggestion: string) => void;
}

export const MessageSuggestion: React.FC<MessageSuggestionProps> = ({
  suggestion,
  onClick,
}) => (
  <Button
    className="w-fit"
    variant={"outline"}
    onClick={() => onClick?.(suggestion)}
    aria-label={suggestion}
  >
    {suggestion}
  </Button>
);
