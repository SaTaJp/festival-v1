"use client";
import type { SortOrder } from "@/lib/utils";
import { t,useLanguage } from "./i18n";
export function SortSelect({value,onChange,loading}:{value:SortOrder;onChange:(value:SortOrder)=>void;loading?:boolean}){const{lang}=useLanguage();return <label className="sort"><span>{t(lang,"Sort festivals","並び替え")}</span><select aria-label={t(lang,"Sort festivals","並び替え")} value={value} disabled={loading} onChange={e=>onChange(e.target.value as SortOrder)}><option value="earliest">{t(lang,"Date: Earliest First","開催日が早い順")}</option><option value="latest">{t(lang,"Date: Latest First","開催日が遅い順")}</option><option value="nearest">{t(lang,"Distance: Nearest First","現在地から近い順")}</option></select></label>}
