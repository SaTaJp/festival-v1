export const AUTOFILL_FIELDS = ["nameJa", "nameEn", "startDate", "endDate", "startTime", "endTime", "prefecture", "city", "cityJa", "venue", "venueJa", "address", "description", "descriptionJa", "descriptionEn", "imageUrl"] as const;
export type AutofillField = typeof AUTOFILL_FIELDS[number];
export type Evidence = { value: string; sourceUrl: string; evidence: string; year?: number; status: "extracted" | "needs_review" };
export type AutofillData = Partial<Record<AutofillField, string | null>> & { activities?: unknown[] };
export type PageSummary = { url: string; title: string; metadata: string; jsonLd: string; content: string };

/** Japanese script is an evidence-free but conservative language signal for legacy fields.
 * Ambiguous Latin/romanized values deliberately remain in their legacy (English) slot. */
const isJapanese = (value: string) => /[\u3040-\u30ff\u3400-\u9fff]/.test(value);
export function normalizeAutofillData<T extends Record<string, unknown>>(raw: T): T {
 const data = { ...raw } as Record<string, unknown>;
 const moveLegacy = (legacy: string, ja: string, en: string) => {
  const value = typeof data[legacy] === "string" ? data[legacy].trim() : "";
  if (!value) return;
  const destination = isJapanese(value) ? ja : en;
  if (typeof data[destination] !== "string" || !(data[destination] as string).trim()) data[destination] = value;
  if (destination !== legacy) delete data[legacy];
 };
 moveLegacy("description", "descriptionJa", "descriptionEn");
 moveLegacy("city", "cityJa", "city");
 moveLegacy("venue", "venueJa", "venue");
 return data as T;
}

const decode = (value: string) => value.replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/g, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/\s+/g, " ").trim();
const strip = (html: string) => decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>|<[^>]+>/gi, " "));
const attribute = (tag: string, name: string) => tag.match(new RegExp(`${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "i"))?.[2] || "";

export function summarizeHtml(html: string, url: string): PageSummary {
  const title = strip(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
  const metadata = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => { const tag = match[0], key = attribute(tag, "property") || attribute(tag, "name"), value = attribute(tag, "content"); return /^(description|og:(title|description|image)|twitter:(title|description|image))$/i.test(key) && value ? `${key}: ${decode(value)}` : ""; }).filter(Boolean).join("\n");
  const jsonLd = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].flatMap(match => { try { const value = JSON.parse(match[1]); return (Array.isArray(value) ? value : [value]).filter(item => item && (item["@type"] === "Event" || (Array.isArray(item["@type"]) && item["@type"].includes("Event")) || item["@graph"])); } catch { return []; } }).map(value => JSON.stringify(value)).join("\n").slice(0, 12000);
  const blocks = [...html.matchAll(/<(h[1-3]|p|li|td|th|article|section|main)[^>]*>([\s\S]*?)<\/\1>/gi)].map(match => strip(match[2])).filter(value => value.length > 2);
  const relevant = blocks.filter(value => /20\d{2}|開催|日程|会場|アクセス|住所|概要|時間|date|schedule|venue|access|location/i.test(value));
  return { url, title, metadata, jsonLd, content: [...new Set([...relevant, ...blocks])].join("\n").slice(0, 22000) };
}

export function discoverRelatedPages(html: string, source: URL): URL[] { const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].flatMap(match => { const href = attribute(match[1], "href"); if (!href) return []; try { const url = new URL(href, source); if (url.origin !== source.origin || !/^https?:$/.test(url.protocol)) return []; url.hash = ""; const label = `${strip(match[2])} ${url.pathname}`; const score = (label.match(/開催概要|開催日|日程|会場|アクセス|参加方法|よくある質問|faq|overview|schedule|dates|venue|access|location|participation/gi) || []).length; return score ? [{ url, score }] : []; } catch { return []; } }); const seen = new Set<string>(); return links.sort((a, b) => b.score - a.score).map(link => link.url).filter(url => !seen.has(url.toString()) && !!seen.add(url.toString())).slice(0, 3); }
export function normalizeTime(value: unknown): string | null { if (typeof value !== "string") return null; const match = value.trim().match(/^(?:午前|午後)?\s*(\d{1,2})[:：時](\d{2})?$/); if (!match) return null; let hour = Number(match[1]); if (value.includes("午後") && hour < 12) hour += 12; return hour < 24 && Number(match[2] || 0) < 60 ? `${String(hour).padStart(2, "0")}:${match[2] || "00"}` : null; }
export function validDate(value: unknown): string | null { if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null; const [year, month, day] = value.split("-").map(Number), date = new Date(Date.UTC(year, month - 1, day)); return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day ? value : null; }
export function validateExtraction(input: unknown, sources: Set<string>) { const raw = (input && typeof input === "object" ? input : {}) as Record<string, unknown>, data: AutofillData = {}, evidence: Record<string, Evidence> = {}, needsReview: string[] = []; for (const key of AUTOFILL_FIELDS) { let value = raw[key]; if (key === "startDate" || key === "endDate") value = validDate(value); if (key === "startTime" || key === "endTime") value = normalizeTime(value); const claim = raw.evidence && typeof raw.evidence === "object" ? (raw.evidence as Record<string, Record<string, unknown>>)[key] : undefined, sourceUrl = typeof claim?.sourceUrl === "string" && sources.has(claim.sourceUrl) ? claim.sourceUrl : ""; if (typeof value !== "string" || !value.trim() || !sourceUrl) { needsReview.push(key); continue; } data[key] = value.trim(); evidence[key] = { value: value.trim(), sourceUrl, evidence: typeof claim?.text === "string" ? claim.text.slice(0, 280) : "", year: validDate(value)?.slice(0, 4) ? Number(validDate(value)!.slice(0, 4)) : undefined, status: "extracted" }; } if (data.startDate && data.endDate && data.startDate > data.endDate) { delete data.endDate; delete evidence.endDate; needsReview.push("endDate"); } if (Array.isArray(raw.activities)) data.activities = raw.activities; const normalized = normalizeAutofillData(data as Record<string, unknown>) as AutofillData; for (const [legacy, localized] of [["description", isJapanese(String(data.description || "")) ? "descriptionJa" : "descriptionEn"], ["city", isJapanese(String(data.city || "")) ? "cityJa" : "city"], ["venue", isJapanese(String(data.venue || "")) ? "venueJa" : "venue"]] as const) if (data[legacy as AutofillField] && normalized[localized as AutofillField] === data[legacy as AutofillField] && !evidence[localized]) evidence[localized] = { ...evidence[legacy] }; return { data: normalized, evidence, needsReview: [...new Set(needsReview)] }; }
