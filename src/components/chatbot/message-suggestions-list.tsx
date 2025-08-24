import React from "react";
import { MessageSuggestion } from "./message-suggestion";

interface MessageSuggestionsListProps {
  suggestions: string[];
  onSuggestionClick?: (suggestion: string) => void;
  listKey: string;
}

export const MessageSuggestionsList: React.FC<MessageSuggestionsListProps> = ({
  suggestions,
  onSuggestionClick,
  listKey,
}) => {
  if (!suggestions?.length) return null;
  return (
    <div className="flex flex-col items-end gap-2 mt-2" key={listKey}>
      {suggestions.map((s) => (
        <MessageSuggestion key={s} suggestion={s} onClick={onSuggestionClick} />
      ))}
    </div>
  );
};
