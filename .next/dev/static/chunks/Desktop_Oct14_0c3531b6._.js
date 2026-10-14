(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Desktop/Oct14/src/components/submission-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmissionForm",
    ()=>SubmissionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SubmissionForm() {
    _s();
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    function submit(e) {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        if (!chosen.length) {
            setMessage("Choose at least one activity.");
            return;
        }
        const name = String(d.get("nameEn"));
        const f = {
            id: `local-${Date.now()}`,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
            nameEn: name,
            nameJa: String(d.get("nameJa")),
            category: String(d.get("category")),
            startDate: String(d.get("startDate")),
            endDate: String(d.get("endDate")) || undefined,
            startTime: String(d.get("startTime")) || undefined,
            endTime: String(d.get("endTime")) || undefined,
            prefecture: String(d.get("prefecture")),
            city: String(d.get("city")),
            venue: String(d.get("venue")) || undefined,
            address: String(d.get("address")) || undefined,
            description: String(d.get("description")),
            imageUrl: String(d.get("imageUrl")) || undefined,
            activities: chosen,
            participationType: String(d.get("participation")),
            reservationRequired: d.get("reservation") === "yes",
            reservationUrl: String(d.get("reservationUrl")) || undefined,
            price: String(d.get("price")) || undefined,
            paymentMethods: [
                String(d.get("payment"))
            ],
            officialWebsite: String(d.get("website")) || undefined,
            organizerName: String(d.get("organizer")) || undefined,
            contactEmail: String(d.get("email")) || undefined,
            ticketUrl: String(d.get("ticket")) || undefined,
            rainPolicy: String(d.get("rain")) || undefined,
            notes: String(d.get("notes")) || undefined
        };
        const old = JSON.parse(localStorage.getItem("matsuri-submissions") || "[]");
        localStorage.setItem("matsuri-submissions", JSON.stringify([
            f,
            ...old
        ]));
        setSaved(f);
        setMessage("Your festival has been saved in this browser.");
    }
    if (saved) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notice",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Festival submitted"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 1824
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 1851
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "button",
                href: `/event/${saved.id}/${saved.slug}`,
                children: "View festival detail"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 1867
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
        lineNumber: 2,
        columnNumber: 1800
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form",
        onSubmit: submit,
        children: [
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                children: message
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2026
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "FESTIVAL NAME JAPANESE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "nameJa"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2083
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "FESTIVAL NAME ENGLISH",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "nameEn"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2169
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2062
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "CATEGORY",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                required: true,
                                name: "category",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Choose category"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2347
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLabel"])(c)
                                        }, c, false, {
                                            fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                            lineNumber: 2,
                                            columnNumber: 2407
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2314
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "IMAGE URL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "imageUrl",
                                type: "url",
                                placeholder: "https://..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2513
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2479
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2260
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "START DATE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "startDate",
                                type: "date"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2644
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2609
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "END DATE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "endDate",
                                type: "date"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2731
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2698
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2588
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PREFECTURE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "prefecture"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2836
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2801
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "CITY",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "city"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 2908
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2879
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2780
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    "DESCRIPTION",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        name: "description",
                        rows: 5
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 2987
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2951
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "What visitors can do / Activities"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                            lineNumber: 2,
                            columnNumber: 3061
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3053
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "checklist",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activities"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        onChange: (e)=>setChosen(e.target.checked ? [
                                                ...chosen,
                                                a
                                            ] : chosen.filter((x)=>x !== a))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3171
                                    }, this),
                                    " ",
                                    a
                                ]
                            }, a, true, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3156
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 3043
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "VENUE NAME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "venue"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3362
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3327
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "ADDRESS",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "address"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3423
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3391
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 3306
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "START TIME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "startTime",
                                type: "time"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3516
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3481
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "END TIME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "endTime",
                                type: "time"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3594
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3561
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 3460
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PARTICIPATION TYPE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "participation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Open to everyone"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3736
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Reservation required"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3769
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Conditional participation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3806
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3707
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3664
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "RESERVATION REQUIRED",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "reservation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "no",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3937
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "yes",
                                        children: "Yes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3967
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 3910
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 3865
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 3643
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PRICE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "price"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4073
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4043
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PAYMENT METHOD",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "payment",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4164
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Cash"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4185
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Credit Card"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4206
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "QR / Cashless"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4234
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4264
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4141
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 4022
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "OFFICIAL WEBSITE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "website",
                                type: "url"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4371
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "RESERVATION URL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "reservationUrl",
                                type: "url"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4453
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4413
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 4309
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "ORGANIZER NAME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "organizer"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4568
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4529
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "CONTACT EMAIL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4639
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4601
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 4508
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    "RAIN POLICY",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "rain",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Held rain or shine"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4743
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Cancelled in rain"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4778
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Venue change"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4812
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Check official website"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4841
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4880
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4723
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 4687
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    "NOTES",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "notes",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                        lineNumber: 2,
                        columnNumber: 4949
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 4919
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "button",
                children: "Submit festival"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 4990
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
        lineNumber: 2,
        columnNumber: 1975
    }, this);
}
_s(SubmissionForm, "+SmadGsmU0UCtMwV0lPnKVPr+zA=");
_c = SubmissionForm;
var _c;
__turbopack_context__.k.register(_c, "SubmissionForm");
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

//# sourceMappingURL=Desktop_Oct14_0c3531b6._.js.map