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
    expect(sapporo?.activities).toHaveLength(4);
    expect(sapporo?.activities.map(activity => activity.nameEn)).toEqual(["Snow and Ice Sculpture Viewing", "Hokkaido Food Stalls", "Stage Performances", "Mini Snow Sculpture Workshop"]);
  });
  it("includes the fictional, advance-registration snow sculpture workshop without changing existing activities", () => {
    const sapporo = seedFestivals.find(festival => festival.id === "seed-sapporo-snow-festival");
    const workshop = sapporo?.activities.find(activity => activity.id === "sapporo-mini-snow-sculpture-workshop");
    expect(workshop).toMatchObject({ type: "Workshop", nameJa: "ミニ雪像づくりワークショップ", nameEn: "Mini Snow Sculpture Workshop", interactionType: "participate", participationType: "reservation", reservationRequired: true, reservationUrl: "https://example.com/demo/sapporo-snow-workshop", isDemoReservation: true, price: "JPY 1,500 (materials included)", startTime: "10:30", endTime: "12:00", locationJa: "大通公園・雪像制作体験エリア（デモ用の仮設定）", locationEn: "Odori Park, Snow Sculpture Workshop Area (fictional demo location)", imageUrl: "/media/festivals/sapporo-snow-festival-03.webp" });
    expect(workshop?.descriptionJa).toContain("デモ用の架空プログラム"); expect(workshop?.descriptionEn).toContain("Fictional Demo Activity"); expect(workshop?.conditionsJa).toContain("10歳以上"); expect(workshop?.conditionsEn).toContain("at least 10 years old");
    expect(sapporo?.activities.map(activity => activity.id)).toEqual(["sapporo-snow-sculpture-viewing", "sapporo-hokkaido-food-stalls", "sapporo-stage-performances", "sapporo-mini-snow-sculpture-workshop"]);
  });
  it("completes the existing Sapporo activities without changing their IDs or images", () => {
    const activities = seedFestivals.find(festival => festival.id === "seed-sapporo-snow-festival")!.activities;
    expect(activities.slice(0, 3)).toMatchObject([
      {id:"sapporo-snow-sculpture-viewing",interactionType:"view",participationType:"open",reservationRequired:false,startTime:"10:00",endTime:"21:00",locationEn:"Odori Park, Snow Sculpture Exhibition Area (demo setting)",imageUrl:"/media/festivals/sapporo-snow-festival-08.webp"},
      {id:"sapporo-hokkaido-food-stalls",interactionType:"participate",participationType:"open",reservationRequired:false,startTime:"11:00",endTime:"20:00",locationEn:"Odori Park, Food Stall Area (demo setting)",imageUrl:"/media/festivals/sapporo-snow-festival-02.webp"},
      {id:"sapporo-stage-performances",interactionType:"view",participationType:"open",reservationRequired:false,startTime:"17:30",endTime:"19:00",locationEn:"Odori Park, Outdoor Stage Area (demo setting)",imageUrl:"/media/festivals/sapporo-snow-festival-04.webp"}
    ]);
    activities.slice(0,3).forEach(activity => { expect(activity.reservationUrl).toBeUndefined(); expect(activity.descriptionJa).toContain("デモ用の架空設定"); expect(activity.descriptionEn).toContain("Fictional Demo Information"); expect(activity.conditionsJa).toBeTruthy(); expect(activity.conditionsEn).toBeTruthy(); });
  });
});
