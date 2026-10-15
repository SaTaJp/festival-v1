import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
import { EventDetail, galleryUrls } from "./event-detail";
import { seedFestivals } from "@/lib/festivals";
import { LanguageProvider } from "./i18n";

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
  it("shows the fictional workshop details without making its demo reservation URL clickable", () => {
    render(<LanguageProvider><EventDetail id="seed-sapporo-snow-festival" slug="sapporo-snow-festival" /></LanguageProvider>);
    expect(screen.getByRole("heading", { name: "Mini Snow Sculpture Workshop" })).toBeInTheDocument();
    expect(screen.getAllByText("Participate")).toHaveLength(2);
    expect(screen.getByText("Reservation required")).toBeInTheDocument();
    expect(screen.getByText("JPY 1,500 (materials included)")).toBeInTheDocument();
    expect(screen.getByText("10:30 – 12:00")).toBeInTheDocument();
    expect(document.querySelector('a[href="https://example.com/demo/sapporo-snow-workshop"]')).toBeNull();
  });
  it("keeps long activity copy out of compact cards and opens it in a closable dialog", () => {
    render(<LanguageProvider><EventDetail id="seed-sapporo-snow-festival" slug="sapporo-snow-festival" /></LanguageProvider>);
    const workshop = screen.getByRole("heading", { name: "Mini Snow Sculpture Workshop" }).closest("article")!;
    expect(workshop.querySelector(".activity-summary")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button", { name: "View details" })[3]);
    expect(screen.getByRole("dialog")).toHaveTextContent("This is fictional demonstration content");
    expect(screen.getByRole("dialog")).toHaveTextContent("Participants must be at least 10 years old");
    expect(screen.getByRole("dialog")).toHaveTextContent("Advance registration");
    expect(screen.getByRole("dialog")).toHaveTextContent("Demo reservation destination");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("shows separate localized activity and interaction labels", () => {
    render(<LanguageProvider><EventDetail id="seed-sapporo-snow-festival" slug="sapporo-snow-festival" /></LanguageProvider>);
    const food = screen.getByRole("heading", { name: "Hokkaido Food Stalls" }).closest("article")!;
    expect(food.querySelector(".activity-category-label")).toHaveTextContent("Food Stalls");
    expect(food.querySelector(".activity-interaction-label")).toHaveTextContent("Participate");
  });
});
