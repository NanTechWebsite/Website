import type { MetadataRoute } from "next";

const baseUrl = "https://www.trainpi.net";

const serviceSlugs = [
    "process-workflow-improvement",
    "project-program-management",
    "ai-strategy-solutions",
    "edtech-ai-learning",
    "workforce-development",
    "hr-talent-operations",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/about", "/services", "/industries", "/demo", "/privacy", "/terms"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
        })
    );

    const serviceRoutes = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...serviceRoutes];
}
