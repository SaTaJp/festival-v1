"use client";
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { saveLocalImage } from "@/lib/local-media";
import { MediaImage } from "./media-image";

const validUrl = (value: string) => { try { return value.startsWith("/media/") || ["http:", "https:"].includes(new URL(value).protocol); } catch { return false; } };
const MAX = 8, LIMIT = 8 * 1024 * 1024;

export function ImageGalleryInput({ value, onChange, label = "Festival image gallery", max = MAX, compact = false }: { value: string[]; onChange: (urls: string[]) => void; label?: string; max?: number; compact?: boolean }) {
  const input = useRef<HTMLInputElement>(null); const [message, setMessage] = useState(""); const [url, setUrl] = useState(""); const [dragging, setDragging] = useState(false);
  const addFiles = async (files: FileList | File[]) => {
    const room = max - value.length; const all = Array.from(files); const accepted = all.filter(file => /image\/(jpeg|png|webp)/.test(file.type) && file.size <= LIMIT).slice(0, room);
    if (accepted.length !== all.length) setMessage(room <= 0 ? `最大${max}枚まで追加できます。` : "JPEG、PNG、WebP（各8MB以下）のみ追加しました。");
    if (!accepted.length) return; const ids = await Promise.all(accepted.map(saveLocalImage)); onChange([...value, ...ids]);
  };
  const onFiles = (event: ChangeEvent<HTMLInputElement>) => { if (event.target.files) void addFiles(event.target.files); event.target.value = ""; };
  const drop = (event: DragEvent<HTMLDivElement>) => { event.preventDefault(); setDragging(false); if (event.dataTransfer.files.length) void addFiles(event.dataTransfer.files); };
  const addUrl = () => { const next = url.trim(); if (!validUrl(next)) { setMessage("有効な画像URLを入力してください。"); return; } if (value.length >= max) { setMessage(`最大${max}枚まで追加できます。`); return; } onChange([...value, next]); setUrl(""); };
  return <div className={`image-gallery-input${compact ? " compact-gallery" : ""}`}><div className="gallery-head"><strong>{label}</strong><span>{value.length} / {max}枚</span></div><div className="upload-thumbnails">{value.map((src, index) => <figure key={`${src}-${index}`}><MediaImage src={src} alt={`Uploaded image ${index + 1}`} /><figcaption>{index === 0 && !compact ? <b>Hero image</b> : !compact ? <button type="button" onClick={() => onChange([src, ...value.filter((_, i) => i !== index)])}>メイン画像に設定</button> : null}<button type="button" aria-label={`Remove image ${index + 1}`} onClick={() => onChange(value.filter((_, i) => i !== index))}>×</button></figcaption></figure>)}</div>{value.length < max && <div className={`dropzone ${dragging ? "is-dragging" : ""}`} onDragOver={event => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={drop}><span aria-hidden="true">＋</span><strong>{compact ? "アクティビティ画像を追加" : "ここに画像をドラッグ＆ドロップ"}</strong><small>または</small><button type="button" className="button alt" onClick={() => input.current?.click()}>画像を追加</button><input ref={input} type="file" accept="image/jpeg,image/png,image/webp" multiple={!compact} onChange={onFiles} /></div>}<details><summary>画像URLから追加</summary><div className="url-add"><input aria-label="Image URL" value={url} onChange={event => setUrl(event.target.value)} placeholder="https://..." /><button type="button" className="button alt" onClick={addUrl}>追加</button></div></details>{message && <p className="gallery-message" role="status">{message}</p>}</div>;
}
