import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { SERVICES } from '@/data/servicesData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    const routes = [
        '',
        '/about',
        '/careers',
        '/contact',
        '/privacy-policy',
        '/services',
        '/services/our-service',
        '/terms'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const serviceRoutes = SERVICES.map((service) => ({
        url: `${baseUrl}/services/our-service/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...serviceRoutes];
}
