import clsx from "clsx";
import { UIMessage } from "ai";
import MarkdownRenderer from "../ui/markdown-renderer";

interface MessageBubbleProps {
  message: string;
  sender: UIMessage["role"];
  isWaiting?: boolean;
}

export function MessageBubble({
  message,
  sender,
  isWaiting,
}: MessageBubbleProps) {
  if (isWaiting) {
    return (
      <div className="flex space-x-1 justify-left">
        <div className="bg-muted text-foreground rounded-lg p-3 max-w-xs break-words">
          ...
        </div>
      </div>
    );
  }
  return (
    <div
      className={clsx(
        "flex space-x-1",
        sender === "assistant" ? "justify-left" : "justify-end"
      )}
    >
      <div
        className={clsx(
          "rounded-lg p-3 max-w-xs break-words",
          sender === "assistant"
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <MarkdownRenderer>{message}</MarkdownRenderer>
      </div>
    </div>
  );
}
