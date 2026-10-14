import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

let pathname = "/";
vi.mock("next/navigation", () => ({ usePathname: () => pathname }));
import { LanguageProvider, LanguageSwitcher, activityLabel } from "./i18n";
import { FestivalCard } from "./festival-card";
import { seedFestivals } from "@/lib/festivals";

function subject() { return <LanguageProvider><LanguageSwitcher/><FestivalCard festival={seedFestivals[0]}/></LanguageProvider>; }
describe("language preferences and localized festival content", () => {
  beforeEach(() => { localStorage.clear(); pathname = "/"; });
  it("uses English for visitors, toggles Japanese, and preserves the selected language", () => {
    render(subject());
    expect(screen.getByText("View details")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "JP" }));
    expect(screen.getByText("詳細を見る")).toBeInTheDocument();
    expect(localStorage.getItem("fc-visitor-lang")).toBe("ja");
  });
  it("restores visitor language and defaults organizers to Japanese", () => {
    localStorage.setItem("fc-visitor-lang", "ja"); const first = render(subject()); expect(screen.getByText("詳細を見る")).toBeInTheDocument(); first.unmount();
    localStorage.clear(); pathname = "/upload"; render(subject()); expect(screen.getByRole("button", { name: "JP" })).toHaveAttribute("aria-pressed", "true");
  });
  it("translates activity labels and falls back to the available festival name", () => {
    expect(activityLabel("ja", "Bon Odori")).toBe("盆踊り");
    expect(activityLabel("en", "Bon Odori")).toBe("Bon Odori");
    const onlyJapanese = { ...seedFestivals[0], nameEn: "" }; render(<LanguageProvider><FestivalCard festival={onlyJapanese}/></LanguageProvider>); expect(screen.getByRole("heading", { name: onlyJapanese.nameJa })).toBeInTheDocument();
  });
});
