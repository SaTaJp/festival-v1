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
});
