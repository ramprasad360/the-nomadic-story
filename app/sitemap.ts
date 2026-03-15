import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://thenomadicstory.com";

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/hong-kong`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about-me`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
    ];
}