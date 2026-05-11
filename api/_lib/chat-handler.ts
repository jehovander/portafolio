import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./system-prompt.js";

const MODEL = "llama-3.3-70b-versatile";
const BASE_URL = "https://api.groq.com/openai/v1";
const MAX_MESSAGES = 20;
const MAX_INPUT_CHARS = 1500;

export interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequestBody {
  messages?: IncomingMessage[];
  lang?: "es" | "en";
}

export interface ChatResult {
  status: number;
  body: { reply?: string; error?: string };
}

export async function handleChat(body: ChatRequestBody): Promise<ChatResult> {
  if (!process.env.GROK_API_KEY) {
    return {
      status: 500,
      body: { error: "Server is missing GROK_API_KEY env var" },
    };
  }

  const messages = body?.messages;
  const lang = body?.lang === "en" ? "en" : "es";

  if (!Array.isArray(messages) || messages.length === 0) {
    return {
      status: 400,
      body: { error: "messages must be a non-empty array" },
    };
  }

  const trimmed = messages.slice(-MAX_MESSAGES).filter(
    (m): m is IncomingMessage =>
      typeof m === "object" &&
      m !== null &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.length > 0 &&
      m.content.length <= MAX_INPUT_CHARS,
  );

  if (trimmed.length === 0) {
    return { status: 400, body: { error: "no valid messages" } };
  }

  // Don't inject a "user prefers ${uiLang}" instruction — that was overriding
  // the system prompt's multilingual rule and forcing Spanish replies to
  // Portuguese questions. The prompt itself handles language detection now.
  void lang;

  const client = new OpenAI({
    apiKey: process.env.GROK_API_KEY,
    baseURL: BASE_URL,
  });

  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...trimmed,
      ],
      // Lower temperature → more deterministic language detection.
      // Higher temps let the model "rationalize" replying in a different
      // language than the user wrote in, which is exactly what we're fixing.
      temperature: 0.4,
      max_tokens: 600,
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return { status: 502, body: { error: "Empty reply from model" } };
    }
    return { status: 200, body: { reply } };
  } catch (err) {
    console.error("[chat-handler] error:", err);
    const message =
      err instanceof Error ? err.message : "Unknown error contacting model";
    return { status: 500, body: { error: message } };
  }
}
