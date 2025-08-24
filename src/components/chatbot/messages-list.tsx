import React from "react";
import { ChatStatus, UIMessage } from "ai";
import { MessageBubble } from "./message-bubble";
import { MessageSuggestionsList } from "./message-suggestions-list";
import { useTranslations } from "next-intl";

interface MessagesListProps {
  messages: UIMessage[];
  status: ChatStatus;
}

function extractJsonFromText(s: string) {
  if (!s) throw new Error("empty");
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const raw = fence ? fence[1] : s;
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) throw new Error("no object");
  const candidate = raw.slice(start, end + 1);
  return JSON.parse(candidate);
}

export function MessagesList({
  messages,
  status,
  onSuggestionClick,
}: MessagesListProps & { onSuggestionClick?: (suggestion: string) => void }) {
  const t = useTranslations("Chatbot");
  return (
    <div className="flex flex-col gap-2 p-4">
      <MessageBubble key={"system"} message={t("hello")} sender={"assistant"} />
      {messages.length === 0 && (
        <MessageSuggestionsList
          listKey="suggestions"
          suggestions={[t("suggestion1"), t("suggestion2"), t("suggestion3")]}
          onSuggestionClick={onSuggestionClick}
        />
      )}
      {messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((message, msgIdx, arr) =>
          message.parts.map((part, i) => {
            if (part.type !== "text") return null;

            if (message.role === "user") {
              return (
                <MessageBubble
                  key={`${message.id}-${i}`}
                  message={part.text}
                  sender={message.role}
                />
              );
            }

            try {
              const parsed = extractJsonFromText(part.text);
              const isLatestMessage = msgIdx === arr.length - 1;
              return (
                <div key={`fragment-${message.id}-${i}`}>
                  {parsed.answer && (
                    <MessageBubble
                      key={`${message.id}-${i}`}
                      message={parsed.answer}
                      sender={message.role}
                    />
                  )}
                  {isLatestMessage && (
                    <MessageSuggestionsList
                      key={`${message.id}-${i}-suggestions`}
                      listKey={`${message.id}-${i}-suggestions`}
                      suggestions={parsed.suggestions}
                      onSuggestionClick={onSuggestionClick}
                    />
                  )}
                </div>
              );
            } catch {
              return (
                <MessageBubble
                  key={"waiting"}
                  message={""}
                  sender={"assistant"}
                  isWaiting
                />
              );
            }
          })
        )}

      {status === "submitted" && (
        <MessageBubble
          key={"waiting"}
          message={""}
          sender={"assistant"}
          isWaiting
        />
      )}
    </div>
  );
}
