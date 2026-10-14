import { Suspense } from "react";
import { PastArchive } from "@/components/past-archive";
export default function Page(){return <Suspense fallback={<main className="wrap section">Loading festivals…</main>}><PastArchive/></Suspense>}
