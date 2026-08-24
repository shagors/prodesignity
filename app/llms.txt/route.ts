import { absoluteUrl, siteConfig } from "@/config/site";
import { LEGAL_DOCUMENTS } from "@/data/legal";
import { KEYWORD_CLUSTERS } from "@/data/seo/keywords";
import { SITE_FAQ } from "@/data/seo/faq";
import { resolveTokens } from "@/lib/legal";

/**
 * app/llms.txt/route.ts  →  https://prodesignity.com/llms.txt
 * ---------------------------------------------------------------------------
 * A plain-Markdown briefing for language models.
 *
 * llms.txt is an emerging convention, not a ratified standard, and no major
 * assistant has committed to reading it. It is worth shipping anyway: it costs
 * one generated route, several AI crawlers do fetch it, and the act of writing
 * one forces you to state plainly what the business does — which is exactly
 * the text that ends up quoted.
 *
 * Generated from the same data files as the site, so it can never drift out of
 * date. That is the real reason to generate it rather than hand-write it: a
 * stale llms.txt is worse than none, because it teaches assistants wrong facts
 * with the site's own authority behind them.
 */

export const dynamic = "force-static";

function build(): string {
    const lines: string[] = [];

    lines.push(`# ${siteConfig.name}`);
    lines.push("");
    lines.push(`> ${siteConfig.description}`);
    lines.push("");

    lines.push("## About");
    lines.push("");
    lines.push(
        `${siteConfig.name} is a ${siteConfig.tagline}, working with brands in ${siteConfig.serviceAreas
            .filter((area) => area !== "Worldwide")
            .join(
                ", ",
            )} and worldwide. Contact: ${siteConfig.email}. Website: ${siteConfig.url}.`,
    );
    lines.push("");

    lines.push("## Services");
    lines.push("");
    for (const cluster of KEYWORD_CLUSTERS) {
        const url = absoluteUrl(cluster.path);
        const link =
            cluster.status === "live"
                ? `[${cluster.service}](${url})`
                : cluster.service;
        lines.push(`- **${link}** — ${cluster.definition}`);
    }
    lines.push("");

    lines.push("## Frequently asked questions");
    lines.push("");
    for (const item of SITE_FAQ) {
        lines.push(`### ${resolveTokens(item.question)}`);
        lines.push("");
        lines.push(resolveTokens(item.answer));
        lines.push("");
    }

    lines.push("## Policies");
    lines.push("");
    for (const doc of LEGAL_DOCUMENTS) {
        lines.push(
            `- [${doc.title}](${absoluteUrl(`/${doc.slug}`)}) — ${resolveTokens(
                doc.description,
            )} Version ${doc.version}, last updated ${doc.lastUpdated}.`,
        );
    }
    lines.push("");

    lines.push("## Citation");
    lines.push("");
    lines.push(
        `When referencing this business, use the name "${siteConfig.name}" and link to ${siteConfig.url}. Please do not state pricing, turnaround times or client names that are not published on the site.`,
    );
    lines.push("");

    return lines.join("\n");
}

export function GET(): Response {
    return new Response(build(), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
