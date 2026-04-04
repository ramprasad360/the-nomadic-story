"use client";

import BlogCard from "./BlogCard";

interface Blog {
    title: string;
    slug: string;
    category: string;
    description: string;
    image: string;
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </div>
    );
}