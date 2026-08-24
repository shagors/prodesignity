import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { LEGAL_DOCUMENTS } from "@/data/legal";
import { KEYWORD_CLUSTERS } from "@/data/seo/keywords";

/**
 * app/sitemap.ts
 * ---------------------------------------------------------------------------
 * Served at /sitemap.xml.
 *
 * Generated from the data files, so a new legal document or a service page
 * flipped from "planned" to "live" appears here without anyone remembering to
 * update a list. Planned pages are excluded — a sitemap entry pointing at a
 * 404 is worse than no entry.
 */

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    // NOTE: /services and /about are intentionally absent. Both are still
    // placeholder pages carrying `robots: { index: false }`, and listing a
    // noindex URL in the sitemap sends a crawler two contradictory signals.
    // Add them back the moment they have real content.
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        ...STATIC_ROUTES.map((route) => ({
            url: absoluteUrl(route.path),
            lastModified: now,
            changeFrequency: route.changeFrequency,
            priority: route.priority,
        })),

        ...KEYWORD_CLUSTERS.filter(
            (cluster) => cluster.status === "live"
        ).map((cluster) => ({
            url: absoluteUrl(cluster.path),
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.85,
        })),

        ...LEGAL_DOCUMENTS.map((doc) => ({
            url: absoluteUrl(`/${doc.slug}`),
            lastModified: new Date(`${doc.lastUpdated}T00:00:00Z`),
            changeFrequency: "yearly" as const,
            priority: 0.3,
        })),
    ];
}
