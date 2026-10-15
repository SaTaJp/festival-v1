"use client";
import { SubmissionForm } from "@/components/submission-form";
import { t, useLanguage } from "@/components/i18n";
export default function Page(){const {lang}=useLanguage();return <main className="registration-page"><section className="registration-banner"><div className="wrap"><p>{t(lang,"FOR ORGANIZERS","主催者の方へ")}</p><h1>{t(lang,"List your festival","お祭りを登録")}</h1><span>{t(lang,"Share a welcoming festival experience with international visitors.","日本に暮らす人、そして世界中の人々にあなたのお祭りの魅力を届けましょう。")}</span><div className="banner-lanterns" aria-hidden="true">🏮　🏮　🏮</div></div></section><div className="wrap registration-content"><SubmissionForm/></div></main>}
