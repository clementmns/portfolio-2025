import { mistral } from "@ai-sdk/mistral";
import { streamText, UIMessage, convertToModelMessages, stepCountIs } from "ai";
import fs from "fs/promises";
import path from "path";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, locale }: { messages: UIMessage[]; locale: Locale } =
    await req.json();

  const t = await getTranslations({ locale, namespace: "Chatbot" });
  const profilePath = path.join(
    process.cwd(),
    "src/i18n/messages",
    `${locale}.json`
  );
  let profileData = "";
  try {
    const file = await fs.readFile(profilePath, "utf-8");
    profileData = file;
  } catch {
    profileData = "";
  }

  const systemPrompt = `
    You are Clément Omnès' portfolio assistant. Your constraints:
    - Always be helpful, polite, and CONCISE.
    - Structure your answers clearly and logically, use markdown to emphasize important points.
    - Break lines for readability.
    - Use the user's language and don't switch to another language: ${locale}
    - Adapt your responses to the user's level of expertise.
    - Don't repeat yourself.
    - Only answer questions about Clément Omnès, his skills, experience, projects, and professional background.
    - Never provide personal opinions, medical, legal, or financial advice.
    - If you don't know the answer, say so honestly.
    - Use the following profile info to answer questions:
    ${profileData}
    - You need to add suggestions for the user to ask next with one emoji.
    - Suggestions musn't have been used before or answered already.
    - For suggestions ONLY, you must respond ONLY with a valid JSON object, no Markdown, no backticks, no text before/after. Use double quotes. No trailing commas.
    Schema:
    {
      "answer": "<concise answer in ${locale}>",
      "suggestions": ["…", "…"]
    }
  `;

  const aiMessages = [
    {
      role: "system" as const,
      parts: [
        {
          type: "text",
          text: systemPrompt,
        },
      ],
    } as Omit<UIMessage, "id">,
    {
      role: "assistant" as const,
      parts: [
        {
          type: "text",
          text: t("hello"),
        },
      ],
    } as Omit<UIMessage, "id">,
    ...messages,
  ];

  const result = streamText({
    model: mistral("mistral-small-latest"),
    messages: convertToModelMessages(aiMessages),
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
