// src/app/robots.ts
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = siteConfig?.url || "https://prodesignity.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/admin/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
