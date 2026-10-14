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
});
