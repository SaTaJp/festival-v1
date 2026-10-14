module.exports = [
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
"[project]/Desktop/Oct14/src/components/submission-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmissionForm",
    ()=>SubmissionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/src/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Oct14/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SubmissionForm() {
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
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
    if (saved) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notice",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Festival submitted"
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 1824
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 1851
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "form",
        onSubmit: submit,
        children: [
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                children: message
            }, void 0, false, {
                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                lineNumber: 2,
                columnNumber: 2026
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "FESTIVAL NAME JAPANESE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "FESTIVAL NAME ENGLISH",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "CATEGORY",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                required: true,
                                name: "category",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Choose category"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2347
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryLabel"])(c)
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "IMAGE URL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "START DATE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "END DATE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PREFECTURE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "CITY",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    "DESCRIPTION",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "checklist",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activities"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "VENUE NAME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "ADDRESS",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "START TIME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "END TIME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PARTICIPATION TYPE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "participation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Open to everyone"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3736
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Reservation required"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3769
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "RESERVATION REQUIRED",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "reservation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "no",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3937
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PRICE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "PAYMENT METHOD",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "payment",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4164
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Cash"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4185
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Credit Card"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4206
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "QR / Cashless"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4234
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "OFFICIAL WEBSITE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "RESERVATION URL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "ORGANIZER NAME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            "CONTACT EMAIL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    "RAIN POLICY",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "rain",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Held rain or shine"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4743
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Cancelled in rain"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4778
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Venue change"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4812
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Check official website"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Oct14/src/components/submission-form.tsx",
                                lineNumber: 2,
                                columnNumber: 4841
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    "NOTES",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Oct14$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Oct14/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Desktop_Oct14_5f5f53ac._.js.map