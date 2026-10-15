import { describe, expect, it } from "vitest";
import { seedFestivals } from "./festivals";
import { filterFestivals } from "./utils";

describe("localized seed festival data", () => {
  it("uses corresponding natural Japanese and English festival names", () => {
    const mountain = seedFestivals.find(festival => festival.nameEn === "Mountain Craft Fair");
    const river = seedFestivals.find(festival => festival.nameEn === "River Lantern Evening");
    expect(mountain?.nameJa).toBe("信州クラフトフェア");
    expect(river?.nameJa).toBe("川辺の灯籠の夕べ");
  });
  it("includes Japanese sample descriptions and location values without changing activity search", () => {
    const kyoto = seedFestivals.find(festival => festival.prefecture === "Kyoto");
    expect(kyoto?.prefectureJa).toBe("京都府");
    expect(kyoto?.descriptionJa).toBeTruthy();
    expect(kyoto?.activities[0].descriptionJa).toBeTruthy();
    expect(filterFestivals(seedFestivals, { activities: "food-stalls,bon-odori" }).length).toBeGreaterThan(0);
  });
  it("adds a unique Sapporo Snow Festival seed with an eight-image gallery", () => {
    const sapporo = seedFestivals.find(festival => festival.id === "seed-sapporo-snow-festival");
    expect(sapporo).toMatchObject({
      slug: "sapporo-snow-festival",
      nameJa: "さっぽろ雪まつり",
      nameEn: "Sapporo Snow Festival",
      imageUrl: "/media/festivals/sapporo-snow-festival-01.webp",
      galleryImageUrls: [
        "/media/festivals/sapporo-snow-festival-02.webp",
        "/media/festivals/sapporo-snow-festival-03.webp",
        "/media/festivals/sapporo-snow-festival-04.webp",
        "/media/festivals/sapporo-snow-festival-05.webp",
        "/media/festivals/sapporo-snow-festival-06.webp",
        "/media/festivals/sapporo-snow-festival-07.webp",
        "/media/festivals/sapporo-snow-festival-08.webp"
      ]
    });
    expect(new Set(seedFestivals.map(festival => festival.id)).size).toBe(seedFestivals.length);
    expect(new Set(seedFestivals.map(festival => festival.slug)).size).toBe(seedFestivals.length);
    expect(sapporo?.galleryImageUrls).not.toContain(sapporo?.imageUrl);
    expect([sapporo?.imageUrl, ...(sapporo?.galleryImageUrls || [])]).toHaveLength(8);
    expect(sapporo?.activities).toHaveLength(3);
    expect(sapporo?.activities.map(activity => activity.nameEn)).toEqual(["Snow and Ice Sculpture Viewing", "Hokkaido Food Stalls", "Stage Performances"]);
  });
});
