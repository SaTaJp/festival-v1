module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Oct14/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Oct14/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Oct14/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Oct14/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Oct14/src/lib/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activities",
    ()=>activities,
    "categories",
    ()=>categories,
    "categoryLabel",
    ()=>categoryLabel
]);
const categories = [
    "culture",
    "food-drink",
    "traditional",
    "music",
    "seasonal",
    "fireworks",
    "local-community",
    "family"
];
const activities = [
    "Food Stalls",
    "Festival Games",
    "Bon Odori",
    "Mikoshi",
    "Workshop",
    "Taiko",
    "Traditional Performance",
    "Local Interaction",
    "Festival Preparation",
    "Other"
];
const categoryLabel = (c)=>({
        culture: "Culture",
        "food-drink": "Food & Drink",
        traditional: "Traditional",
        music: "Music",
        seasonal: "Seasonal",
        fireworks: "Fireworks",
        "local-community": "Local Community",
        family: "Family"
    })[c];
}),
"[project]/Desktop/Oct14/src/lib/festivals.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedFestivals",
    ()=>seedFestivals
]);
const places = [
    [
        "Hokkaido",
        "Sapporo",
        43.06,
        141.35
    ],
    [
        "Aomori",
        "Aomori",
        40.82,
        140.74
    ],
    [
        "Miyagi",
        "Sendai",
        38.27,
        140.87
    ],
    [
        "Tokyo",
        "Taito",
        35.71,
        139.79
    ],
    [
        "Kanagawa",
        "Yokohama",
        35.44,
        139.64
    ],
    [
        "Nagano",
        "Nagano",
        36.65,
        138.19
    ],
    [
        "Kyoto",
        "Kyoto",
        35.01,
        135.77
    ],
    [
        "Osaka",
        "Osaka",
        34.69,
        135.5
    ],
    [
        "Hiroshima",
        "Hiroshima",
        34.39,
        132.46
    ],
    [
        "Fukuoka",
        "Fukuoka",
        33.59,
        130.4
    ],
    [
        "Okinawa",
        "Naha",
        26.21,
        127.68
    ],
    [
        "Niigata",
        "Nagaoka",
        37.45,
        138.85
    ],
    [
        "Kagawa",
        "Takamatsu",
        34.34,
        134.04
    ],
    [
        "Kumamoto",
        "Kumamoto",
        32.8,
        130.71
    ],
    [
        "Ishikawa",
        "Kanazawa",
        36.56,
        136.66
    ],
    [
        "Shizuoka",
        "Hamamatsu",
        34.71,
        137.73
    ],
    [
        "Nara",
        "Nara",
        34.69,
        135.83
    ],
    [
        "Kagoshima",
        "Kagoshima",
        31.6,
        130.56
    ],
    [
        "Gifu",
        "Takayama",
        36.15,
        137.25
    ],
    [
        "Yamanashi",
        "Fuefuki",
        35.65,
        138.64
    ],
    [
        "Saitama",
        "Kawagoe",
        35.93,
        139.49
    ],
    [
        "Ehime",
        "Matsuyama",
        33.84,
        132.77
    ],
    [
        "Iwate",
        "Morioka",
        39.7,
        141.15
    ],
    [
        "Nagasaki",
        "Nagasaki",
        32.75,
        129.88
    ]
];
const names = [
    "Snow Lantern Walk",
    "Harbor Night Market",
    "Green City Dance",
    "Summer Streets Festival",
    "Bay Culture Day",
    "Mountain Craft Fair",
    "River Lantern Evening",
    "Osaka Community Matsuri",
    "Peace Park Food Fair",
    "Canal Music Weekend",
    "Island Drum Gathering",
    "Fireworks on the River",
    "Setouchi Folk Day",
    "Castle Town Festival",
    "Tea & Craft Weekend",
    "Hamamatsu Sound Fair",
    "Nara Lantern Walk",
    "Volcano Harvest Day",
    "Takayama Neighbourhood Fair",
    "Peach Blossom Festival",
    "Kawagoe Lantern Market",
    "Matsuyama Dance Circle",
    "Morioka Handwork Fair",
    "Nagasaki Port Festival"
];
const cats = [
    "seasonal",
    "food-drink",
    "culture",
    "traditional",
    "music",
    "culture",
    "seasonal",
    "local-community",
    "food-drink",
    "music",
    "traditional",
    "fireworks",
    "family",
    "traditional",
    "culture",
    "music",
    "seasonal",
    "local-community",
    "family",
    "seasonal",
    "food-drink",
    "culture",
    "culture",
    "music"
];
const image = "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80";
const seedFestivals = places.map((p, i)=>({
        id: `seed-${i + 1}`,
        slug: names[i].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""),
        nameJa: `${p[1]} まつり`,
        nameEn: names[i],
        category: cats[i],
        startDate: i < 5 ? `2025-${String(i + 5).padStart(2, "0")}-14` : `2027-${String(i % 10 + 3).padStart(2, "0")}-${String(i % 18 + 8).padStart(2, "0")}`,
        endDate: i < 5 ? `2025-${String(i + 5).padStart(2, "0")}-15` : `2027-${String(i % 10 + 3).padStart(2, "0")}-${String(i % 18 + 9).padStart(2, "0")}`,
        startTime: "11:00",
        endTime: "20:00",
        prefecture: p[0],
        city: p[1],
        venue: `${p[1]} Community Square`,
        address: `${p[1]}, ${p[0]}, Japan`,
        latitude: p[2],
        longitude: p[3],
        description: `Prototype festival data for ${p[1]}. Meet local people, enjoy seasonal food, and take part in welcoming hands-on activities.`,
        imageUrl: image,
        activities: i % 3 === 0 ? [
            "Food Stalls",
            "Bon Odori",
            "Local Interaction"
        ] : i % 3 === 1 ? [
            "Workshop",
            "Taiko",
            "Traditional Performance"
        ] : [
            "Festival Games",
            "Food Stalls",
            "Mikoshi"
        ],
        participationType: "Open to everyone",
        reservationRequired: false,
        price: "Free entry; some activities may have a fee",
        paymentMethods: [
            "Cash",
            "QR / Cashless"
        ],
        officialWebsite: "https://example.com",
        contactEmail: "hello@example.com",
        rainPolicy: "Check official website"
    }));
}),
"[project]/Desktop/Oct14/src/components/festival-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FestivalCard",
    ()=>FestivalCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/types.ts [app-rsc] (ecmascript)");
;
;
;
function FestivalCard({ festival, ended = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: festival.imageUrl || "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
                alt: "Festival scene"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                lineNumber: 2,
                columnNumber: 122
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: [
                            ended ? "Ended · " : "",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryLabel"])(festival.category)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                        lineNumber: 2,
                        columnNumber: 297
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted",
                        children: [
                            festival.startDate,
                            festival.endDate ? ` – ${festival.endDate}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                        lineNumber: 2,
                        columnNumber: 383
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: festival.nameEn
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                        lineNumber: 2,
                        columnNumber: 478
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted",
                        children: [
                            festival.city,
                            ", ",
                            festival.prefecture
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                        lineNumber: 2,
                        columnNumber: 504
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tags",
                        children: festival.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tag",
                                children: a
                            }, a, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                                lineNumber: 2,
                                columnNumber: 621
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                        lineNumber: 2,
                        columnNumber: 571
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "button alt",
                        href: `/event/${festival.id}/${festival.slug}`,
                        children: "View details"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                        lineNumber: 2,
                        columnNumber: 669
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
                lineNumber: 2,
                columnNumber: 270
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Oct14/src/components/festival-card.tsx",
        lineNumber: 2,
        columnNumber: 96
    }, this);
}
}),
"[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$festivals$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/festivals.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$components$2f$festival$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/components/festival-card.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function Page({ params }) {
    const { slug } = await params;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].includes(slug)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$festivals$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFestivals"].filter((x)=>x.category === slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "wrap section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "muted",
                children: "← All festivals"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx",
                lineNumber: 1,
                columnNumber: 500
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryLabel"])(slug),
                    " festivals"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx",
                lineNumber: 1,
                columnNumber: 555
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "Experiences you can join, taste, make, and share."
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx",
                lineNumber: 1,
                columnNumber: 624
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid",
                children: items.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$components$2f$festival$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FestivalCard"], {
                        festival: x
                    }, x.id, false, {
                        fileName: "[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx",
                        lineNumber: 1,
                        columnNumber: 734
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx",
                lineNumber: 1,
                columnNumber: 698
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx",
        lineNumber: 1,
        columnNumber: 469
    }, this);
}
}),
"[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Oct14/src/app/category/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ee54b96._.js.map