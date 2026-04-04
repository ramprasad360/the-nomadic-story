export const dynamic = "force-dynamic";
import { MetadataRoute } from "next";
import { blogs } from "@/app/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://thenomadicstory.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about-me`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery/hong-kong`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.5,
        },

        // ✅ Dynamic blog pages
        ...blogs.map((blog) => ({
            url: `${baseUrl}/blog/${blog.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        })),
    ];
}