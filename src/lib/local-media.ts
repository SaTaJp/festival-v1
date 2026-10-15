"use client";

const DB = "matsuri-media";
const STORE = "images";
const PREFIX = "idb-image:";

export const isLocalMedia = (value?: string) => Boolean(value?.startsWith(PREFIX));

const database = () => new Promise<IDBDatabase>((resolve, reject) => {
  const request = indexedDB.open(DB, 1);
  request.onupgradeneeded = () => request.result.createObjectStore(STORE);
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

export async function saveLocalImage(file: Blob) {
  const id = `${PREFIX}${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
  const db = await database();
  await new Promise<void>((resolve, reject) => {
    const request = db.transaction(STORE, "readwrite").objectStore(STORE).put(file, id);
    request.onsuccess = () => resolve(); request.onerror = () => reject(request.error);
  });
  db.close(); return id;
}

export async function loadLocalImage(id: string) {
  if (!isLocalMedia(id)) return undefined;
  const db = await database();
  const value = await new Promise<Blob | undefined>((resolve, reject) => {
    const request = db.transaction(STORE).objectStore(STORE).get(id);
    request.onsuccess = () => resolve(request.result as Blob | undefined); request.onerror = () => reject(request.error);
  });
  db.close(); return value;
}
