import type { Metadata } from "next";
import JsonLd from "@/app/_components/JsonLd";
import LegalDocumentView from "@/app/_components/legal/LegalDocumentView";
import { termsOfService } from "@/data/legal";
import { resolveTokens } from "@/lib/legal";
import { buildMetadata, legalPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: termsOfService.title,
    description: resolveTokens(termsOfService.description),
    path: `/${termsOfService.slug}`,
    publishedTime: termsOfService.effectiveDate,
    modifiedTime: termsOfService.lastUpdated,
});

export default function TermsOfServicePage() {
    return (
        <>
            <JsonLd data={legalPageSchema(termsOfService)} />
            <LegalDocumentView doc={termsOfService} />
        </>
    );
}
