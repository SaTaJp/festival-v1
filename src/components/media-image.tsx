"use client";
import { useEffect, useState } from "react";
import { isLocalMedia, loadLocalImage } from "@/lib/local-media";

export function MediaImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { src?: string }) {
  const [resolved, setResolved] = useState(src || "");
  useEffect(() => { let objectUrl = ""; if (!src || !isLocalMedia(src)) { setResolved(src || ""); return; } loadLocalImage(src).then(blob => { objectUrl = blob ? URL.createObjectURL(blob) : ""; setResolved(objectUrl); }); return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); }; }, [src]);
  return <img src={resolved} alt={alt} {...props} />;
}
