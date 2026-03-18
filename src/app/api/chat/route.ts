import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/chat/rate-limit";
import { get as cacheGet, set as cacheSet } from "@/lib/chat/cache";
import { buildSystemPrompt } from "@/lib/chat/system-prompt";
import { retrieveRelevantChunks, buildContext } from "@/lib/chat/knowledge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
  locale: "nl" | "en";
}

const COMING_SOON = {
  nl: "Onze chat-assistent is binnenkort beschikbaar. Neem in de tussentijd contact met ons op via info@darhypotheken.nl of 020-210 1656.",
  en: "Our chat assistant is coming soon. In the meantime, please contact us at info@darhypotheken.nl or 020-210 1656.",
} as const;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;

  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequestBody = await request.json();
    const { messages, locale = "nl" } = body;

    // Validate locale
    const safeLocale = locale === "en" ? "en" : "nl";

    // Rate limit check
    const ip = getClientIp(request);
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error:
            safeLocale === "nl"
              ? "Te veel verzoeken. Probeer het later opnieuw."
              : "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfter ?? 60),
          },
        }
      );
    }

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      );
    }

    if (messages.length > 20) {
      return NextResponse.json(
        {
          error:
            safeLocale === "nl"
              ? "Gesprek is te lang. Start een nieuw gesprek."
              : "Conversation is too long. Please start a new conversation.",
        },
        { status: 400 }
      );
    }

    // Check cache for single-turn (first message only)
    const isFirstMessage = messages.length === 1;
    if (isFirstMessage) {
      const cached = cacheGet(messages[0].content);
      if (cached) {
        return NextResponse.json({ message: cached, available: true });
      }
    }

    // Check API key
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        message: COMING_SOON[safeLocale],
        available: false,
      });
    }

    // Retrieve relevant knowledge
    const lastUserMessage =
      messages.filter((m) => m.role === "user").pop()?.content ?? "";
    const chunks = retrieveRelevantChunks(lastUserMessage, safeLocale);
    const context = buildContext(chunks);

    // Build system prompt
    const systemPrompt = buildSystemPrompt(safeLocale, context);

    // Call Anthropic API
    const anthropicResponse = await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 500,
          system: systemPrompt,
          messages: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      }
    );

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error("Anthropic API error:", anthropicResponse.status, errorText);
      return NextResponse.json(
        {
          error:
            safeLocale === "nl"
              ? "Er is een fout opgetreden. Probeer het later opnieuw."
              : "An error occurred. Please try again later.",
        },
        { status: 500 }
      );
    }

    const data = await anthropicResponse.json();
    const assistantContent =
      data.content?.[0]?.text ??
      (safeLocale === "nl"
        ? "Sorry, ik kon geen antwoord genereren."
        : "Sorry, I could not generate a response.");

    // Cache first-message responses
    if (isFirstMessage) {
      cacheSet(messages[0].content, assistantContent);
    }

    return NextResponse.json({ message: assistantContent, available: true });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
