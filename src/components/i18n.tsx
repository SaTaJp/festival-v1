"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { FestivalCategory } from "@/lib/types";
export type Lang = "en" | "ja";
const C = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({ lang: "en", setLang: () => {} });
export const t = (lang: Lang, en: string, ja: string) => lang === "ja" ? ja : en;
export function LanguageProvider({ children }: { children: React.ReactNode }) { const path = usePathname(); const organizer = path === "/upload"; const key = organizer ? "fc-organizer-lang" : "fc-visitor-lang"; const initial: Lang = organizer ? "ja" : "en"; const [lang, set] = useState<Lang>(initial); useEffect(() => { const saved = localStorage.getItem(key); if (saved === "en" || saved === "ja") set(saved); else set(initial); }, [initial, key]); const setLang = (next: Lang) => { set(next); localStorage.setItem(key, next); }; return <C.Provider value={{ lang, setLang }}>{children}</C.Provider>; }
export const useLanguage = () => useContext(C);
export function LanguageSwitcher() { const { lang, setLang } = useLanguage(); return <div className="language-switcher" aria-label="Language"><button className="button alt" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button><button className="button alt" aria-pressed={lang === "ja"} onClick={() => setLang("ja")}>JP</button></div>; }
const activityNames: Record<string, string> = { "Bon Odori": "盆踊り", Mikoshi: "神輿", "Food Stalls": "屋台", "Festival Games": "縁日ゲーム", Workshop: "ワークショップ", Taiko: "太鼓", "Traditional Performance": "伝統芸能", "Local Interaction": "地域交流", "Festival Preparation": "祭り準備", Other: "その他" };
const categoryNames: Record<FestivalCategory, string> = { culture: "文化", "food-drink": "食・飲み物", traditional: "伝統", music: "音楽", seasonal: "季節", fireworks: "花火", "local-community": "地域交流", family: "家族向け" };
export const activityLabel = (lang: Lang, value: string) => lang === "ja" ? (activityNames[value] || value) : value;
export const localizedCategoryLabel = (lang: Lang, value: FestivalCategory, fallback: string) => lang === "ja" ? categoryNames[value] : fallback;
