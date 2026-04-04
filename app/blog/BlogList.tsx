"use client";

import BlogCard from "./BlogCard";

interface Props {
    searchParams?: {
        q?: string;
        category?: string;
    };
}

export default function BlogList({ searchParams }: Props) {
    const query = searchParams?.q?.toLowerCase() || "";
    const category = searchParams?.category?.toLowerCase() || "";

    const blogs = [
        {
            title: "The Perfect 4-Day Hong Kong Guide",
            slug: "hong-kong-4-day-itinerary",
            category: "hong kong",
            description:
                "A relaxed 4-day journey through Hong Kong’s streets, skyline, markets, Lantau Island, and Disneyland experiences.",
            image: "/images/hong-kong/hong-kong-avenue-of-stars.jpg",
        },
    ];

    const filteredBlogs = blogs.filter((blog) => {
        return (
            blog.title.toLowerCase().includes(query) &&
            (category ? blog.category.includes(category) : true)
        );
    });

    return (
        <div className="grid md:grid-cols-2 gap-10">
            {filteredBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </div>
    );
}