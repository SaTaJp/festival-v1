import { NextResponse } from "next/server";

const prompt = "Reply only with OK";

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Gemini API is not configured." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/interactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({ model: "gemini-3.5-flash-lite", input: prompt }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Gemini request failed." },
        { status: 502 },
      );
    }

    const payload = (await response.json()) as {
      output_text?: string;
      outputs?: Array<{ type?: string; content?: Array<{ type?: string; text?: string }> }>;
    };
    const reply = payload.output_text?.trim() ?? payload.outputs?.flatMap(
      (output) => output.content ?? [],
    ).find((content) => content.type === "output_text")?.text?.trim();

    if (!reply) {
      return NextResponse.json(
        {
          ok: false,
          error: "Gemini returned an empty response.",
          status: (payload as { status?: string }).status,
          responseKeys: Object.keys(payload),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: reply === "OK", reply });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Gemini request could not be completed." },
      { status: 502 },
    );
  }
}
