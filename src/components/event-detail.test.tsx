import { describe, expect, it } from "vitest";
import { galleryUrls } from "./event-detail";
import { seedFestivals } from "@/lib/festivals";

describe("festival gallery data", () => {
  it("keeps the hero image first and removes duplicate gallery URLs", () => {
    const festival = { ...seedFestivals[0], galleryImageUrls: [seedFestivals[0].imageUrl!, "https://example.com/two.webp"] };
    expect(galleryUrls(festival)).toEqual([seedFestivals[0].imageUrl, "https://example.com/two.webp"]);
  });
  it("limits valid gallery data to eight images", () => {
    const urls = Array.from({ length: 10 }, (_, i) => `https://example.com/${i}.webp`);
    expect(galleryUrls({ ...seedFestivals[0], imageUrl: urls[0], galleryImageUrls: urls.slice(1) })).toHaveLength(8);
  });
  it("uses all eight Sapporo Snow Festival images without repeating its hero", () => {
    const sapporo = seedFestivals.find(festival => festival.slug === "sapporo-snow-festival");
    expect(sapporo?.imageUrl).toBe("/media/festivals/sapporo-snow-festival-01.webp");
    expect(galleryUrls(sapporo!)).toEqual(Array.from({ length: 8 }, (_, index) => `/media/festivals/sapporo-snow-festival-${String(index + 1).padStart(2, "0")}.webp`));
  });
});
