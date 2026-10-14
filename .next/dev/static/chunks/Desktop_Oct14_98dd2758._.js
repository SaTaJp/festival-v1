(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Oct14/src/lib/festivals.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Oct14/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Oct14/src/components/event-detail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventDetail",
    ()=>EventDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$festivals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/festivals.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function EventDetail({ id, slug }) {
    _s();
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$festivals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedFestivals"].find({
        "EventDetail.useState": (x)=>x.id === id && x.slug === slug
    }["EventDetail.useState"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventDetail.useEffect": ()=>{
            if (!f) {
                try {
                    setF(JSON.parse(localStorage.getItem("matsuri-submissions") || "[]").find({
                        "EventDetail.useEffect": (x)=>x.id === id && x.slug === slug
                    }["EventDetail.useEffect"]));
                } catch  {}
            }
        }
    }["EventDetail.useEffect"], [
        f,
        id,
        slug
    ]);
    if (!f) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "wrap section empty",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Festival not found"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                lineNumber: 2,
                columnNumber: 374
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "This festival may have ended or is no longer available."
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                lineNumber: 2,
                columnNumber: 401
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap section",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1051
                        }, this),
                        " / ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/category/${f.category}`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLabel"])(f.category)
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "detail-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: f.imageUrl || "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
                            alt: "Festival scene"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLabel"])(f.category)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1345
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: f.nameEn
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1403
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: f.nameJa
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1422
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        f.startDate,
                                        f.endDate ? ` – ${f.endDate}` : "",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tags",
                                    children: f.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "What can you do at this festival?"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1670
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: "These activities are designed for visitors who want to join in, not just watch."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 1712
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "categories",
                            children: f.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "category",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Participate"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1899
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: a
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1923
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Festival information"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 2034
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: f.description
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                            lineNumber: 2,
                            columnNumber: 2063
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "info",
                            children: details.filter((x)=>Boolean(x[1])).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tags",
                            style: {
                                marginTop: 20
                            },
                            children: [
                                f.officialWebsite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button",
                                    href: f.officialWebsite,
                                    target: "_blank",
                                    children: "Official Website"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 2292
                                }, this),
                                (f.reservationUrl || f.ticketUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button alt",
                                    href: f.reservationUrl || f.ticketUrl,
                                    target: "_blank",
                                    children: "Reservation / Tickets"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Oct14/src/components/event-detail.tsx",
                                    lineNumber: 2,
                                    columnNumber: 2410
                                }, this),
                                f.latitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
_s(EventDetail, "br+cPD+duXhgbPobRCInokRB/xk=");
_c = EventDetail;
var _c;
__turbopack_context__.k.register(_c, "EventDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_Oct14_98dd2758._.js.map