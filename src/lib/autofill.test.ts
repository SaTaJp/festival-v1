import { describe, expect, it } from "vitest";
import { discoverRelatedPages, normalizeAutofillData, normalizeTime, summarizeHtml, validDate, validateExtraction } from "./autofill";

const source = "https://festival.example/";
describe("autofill page preparation", () => {
  it("keeps metadata, Event JSON-LD and relevant content beyond noisy markup", () => {
    const html = `<title>雪まつり</title><meta property="og:image" content="https://festival.example/a.jpg"><script type="application/ld+json">{"@type":"Event","startDate":"2027-02-04"}</script>${"<p>noise</p>".repeat(500)}<h2>開催日 2027年2月4日</h2>`;
    const page = summarizeHtml(html, source);
    expect(page.title).toBe("雪まつり"); expect(page.metadata).toContain("a.jpg"); expect(page.jsonLd).toContain("2027-02-04"); expect(page.content).toContain("2027年2月4日");
  });
  it("discovers only deduplicated same-origin relevant pages", () => {
    const html = `<a href="/schedule">開催日程</a><a href="/schedule">Schedule</a><a href="https://elsewhere.example/venue">Venue</a><a href="/news">News</a>`;
    expect(discoverRelatedPages(html, new URL(source)).map(url => url.toString())).toEqual(["https://festival.example/schedule"]);
  });
});
describe("autofill validation", () => {
  it("rejects impossible dates and unproven values while normalizing explicit time", () => {
    expect(validDate("2027-02-29")).toBeNull(); expect(normalizeTime("午後 1:30")).toBe("13:30");
    const result = validateExtraction({ nameJa: "祭", startDate: "2027-02-30", startTime: "9:00", evidence: { nameJa: { sourceUrl: source, text: "祭" }, startTime: { sourceUrl: "https://bad.example", text: "9" } } }, new Set([source]));
    expect(result.data.nameJa).toBe("祭"); expect(result.data.startDate).toBeUndefined(); expect(result.data.startTime).toBeUndefined(); expect(result.needsReview).toContain("startDate");
  });
  it("does not accept reversed event dates", () => {
    const result = validateExtraction({ startDate: "2027-02-11", endDate: "2027-02-04", evidence: { startDate: { sourceUrl: source }, endDate: { sourceUrl: source } } }, new Set([source]));
    expect(result.data.endDate).toBeUndefined(); expect(result.needsReview).toContain("endDate");
  });
  it("maps legacy Japanese location and description fields to Japanese form fields", () => {
    expect(normalizeAutofillData({ city: "札幌市", venue: "大通公園など", description: "札幌で開催される祭典です。" })).toMatchObject({ cityJa: "札幌市", venueJa: "大通公園など", descriptionJa: "札幌で開催される祭典です。" });
  });
  it("keeps proven English fields in their English slots and preserves explicit localized values", () => {
    expect(normalizeAutofillData({ city: "Sapporo", venue: "Odori Park", description: "A snow festival.", cityJa: "札幌市" })).toMatchObject({ city: "Sapporo", venue: "Odori Park", descriptionEn: "A snow festival.", cityJa: "札幌市" });
  });
});
