import { blogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

interface Props {
    params: {
        slug: string;
    };
}

// ✅ Dynamic SEO (Next.js 16 FIX)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog | The Nomadic Story",
        };
    }

    return {
        title: `${blog.title} | The Nomadic Story`,
        description: blog.description,
    };
}

// ✅ Page (Next.js 16 FIX)
export default async function BlogPage({ params }: Props) {
    const { slug } = await params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return notFound();

    return (
        <div className="container mx-auto px-6 py-12 max-w-3xl">

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-light mb-4">
                {blog.title}
            </h1>

            {/* Description */}
            <p className="text-gray-500 mb-6">
                {blog.description}
            </p>

            {/* Image */}
            <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={600}
                className="rounded-xl mb-6"
            />

            {/* Content */}
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
            </div>

            {/* Back Button */}
            <div className="mt-10">
                <a
                    href="/blog"
                    className="text-sm text-[#c6a75e] hover:underline"
                >
                    ← Back to Blog
                </a>
            </div>

        </div>
    );
}