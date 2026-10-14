module.exports = [
"[project]/Desktop/Oct14/src/lib/festivals.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Oct14/src/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Oct14/src/components/event-detail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventDetail",
    ()=>EventDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$festivals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/festivals.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function EventDetail({ id, slug }) {
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$festivals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedFestivals"].find((x)=>x.id === id && x.slug === slug));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!f) {
            try {
                setF(JSON.parse(localStorage.getItem("matsuri-submissions") || "[]").find((x)=>x.id === id && x.slug === slug));
            } catch  {}
        }
    }, [
        f,
        id,
        slug
    ]);
    if (!f) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "wrap section empty",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Festival not found"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                lineNumber: 2,
                columnNumber: 374
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "This festival may have ended or is no longer available."
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                lineNumber: 2,
                columnNumber: 401
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "button",
                children: "Back to Festivals"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                lineNumber: 2,
                columnNumber: 463
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
        lineNumber: 2,
        columnNumber: 337
    }, this);
    const fields = [];
    const details = [
        [
            "Start date",
            f.startDate
        ],
        [
            "End date",
            f.endDate
        ],
        [
            "Start time",
            f.startTime
        ],
        [
            "End time",
            f.endTime
        ],
        [
            "Prefecture",
            f.prefecture
        ],
        [
            "City",
            f.city
        ],
        [
            "Venue",
            f.venue
        ],
        [
            "Address",
            f.address
        ],
        [
            "Price",
            f.price
        ],
        [
            "Payment",
            f.paymentMethods?.join(", ")
        ],
        [
            "Reservation",
            f.reservationRequired ? "Required" : "Not required"
        ],
        [
            "Rain policy",
            f.rainPolicy
        ],
        [
            "Notes",
            f.notes
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap section",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1051
                        }, this),
                        " / ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/category/${f.category}`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryLabel"])(f.category)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1080
                        }, this),
                        " / ",
                        f.nameEn
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                    lineNumber: 2,
                    columnNumber: 1030
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "detail-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: f.imageUrl || "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
                            alt: "Festival scene"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryLabel"])(f.category)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1345
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: f.nameEn
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1403
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: f.nameJa
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1422
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        f.startDate,
                                        f.endDate ? ` – ${f.endDate}` : "",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1505
                                        }, this),
                                        f.city,
                                        ", ",
                                        f.prefecture
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1439
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tags",
                                    children: f.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tag",
                                            children: a
                                        }, a, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1581
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1538
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1340
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                    lineNumber: 2,
                    columnNumber: 1170
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "What can you do at this festival?"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1670
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "These activities are designed for visitors who want to join in, not just watch."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1712
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "categories",
                            children: f.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "category",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Participate"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1899
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: a
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1923
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "muted",
                                            children: "A welcoming hands-on festival experience."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1935
                                        }, this)
                                    ]
                                }, a, true, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1865
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1816
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                    lineNumber: 2,
                    columnNumber: 1641
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Festival information"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 2034
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: f.description
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 2063
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "info",
                            children: details.filter((x)=>Boolean(x[1])).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: k
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 2190
                                        }, this),
                                        v
                                    ]
                                }, k, true, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 2177
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 2085
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tags",
                            style: {
                                marginTop: 20
                            },
                            children: [
                                f.officialWebsite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button",
                                    href: f.officialWebsite,
                                    target: "_blank",
                                    children: "Official Website"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 2292
                                }, this),
                                (f.reservationUrl || f.ticketUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button alt",
                                    href: f.reservationUrl || f.ticketUrl,
                                    target: "_blank",
                                    children: "Reservation / Tickets"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 2410
                                }, this),
                                f.latitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button alt",
                                    href: `https://maps.google.com/?q=${f.latitude},${f.longitude}`,
                                    target: "_blank",
                                    children: "View on Map"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 2528
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 2227
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                    lineNumber: 2,
                    columnNumber: 2025
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
            lineNumber: 2,
            columnNumber: 1000
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
        lineNumber: 2,
        columnNumber: 994
    }, this);
}
}),
"[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Desktop_Oct14_7f510f0d._.js.map