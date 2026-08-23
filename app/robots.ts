import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

/**
 * app/robots.ts
 * ---------------------------------------------------------------------------
 * Served at /robots.txt.
 *
 * The single most common reason a site is invisible to AI assistants is that
 * its robots.txt blocks their crawlers — often by accident, via a template or
 * a security plugin. Listing them explicitly makes the decision visible and
 * reviewable rather than accidental.
 *
 * Two families matter and they behave differently:
 *
 *   TRAINING / INDEXING crawlers (GPTBot, ClaudeBot, Google-Extended,
 *   Applebot-Extended, CCBot, PerplexityBot) build the corpus a model or its
 *   retrieval index draws on. Allowing them is how you become part of the
 *   default answer.
 *
 *   LIVE FETCHERS (ChatGPT-User, Claude-User, Perplexity-User, OAI-SearchBot)
 *   fetch a page in real time because a user asked a question right now. Block
 *   these and you are absent from the answer even when a user names you.
 *
 * Allowing them is a business decision, not a technical default. If you ever
 * decide your portfolio renders should not train image models, move the
 * relevant bot into the disallow group below — the trade-off is real either
 * way, and this file is where you make it deliberately.
 */

const AI_CRAWLERS = [
    // OpenAI
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    // Anthropic
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "anthropic-ai",
    // Google (Gemini / AI Overviews training opt-in)
    "Google-Extended",
    // Perplexity
    "PerplexityBot",
    "Perplexity-User",
    // Apple Intelligence
    "Applebot",
    "Applebot-Extended",
    // Meta AI
    "meta-externalagent",
    "FacebookBot",
    // Others worth being present in
    "Amazonbot",
    "DuckAssistBot",
    "CCBot",
    "cohere-ai",
    "YouBot",
    "Diffbot",
    "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin"],
            },
            {
                userAgent: AI_CRAWLERS,
                allow: "/",
                disallow: ["/api/"],
            },
            // Aggressive scrapers with no retrieval upside. Adjust freely.
            {
                userAgent: ["Bytespider", "ImagesiftBot", "Scrapy"],
                disallow: "/",
            },
        ],
        sitemap: absoluteUrl("/sitemap.xml"),
        host: siteConfig.url,
    };
}
