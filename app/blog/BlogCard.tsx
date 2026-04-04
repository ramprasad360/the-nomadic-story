"use client";

import Link from "next/link";
import Image from "next/image";
import SocialShare from "@/app/components/SocialShare";

interface Blog {
    title: string;
    slug: string;
    category: string;
    description: string;
    image: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
            <div className="relative overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={500}
                    className="w-full h-auto group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-white/90 text-xs px-3 py-1 rounded-full">
                        {blog.category}
                    </span>
                </div>
            </div>

            <div className="p-5 text-center">
                <h2 className="text-xl font-light leading-snug">
                    <Link
                        href={`/blog/${blog.slug}`}
                        className="hover:text-[#d4a373]"
                    >
                        {blog.title}
                    </Link>
                </h2>

                <p className="text-gray-400 text-xs mt-1">
                    The Nomadic Story • 2026
                </p>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {blog.description}
                </p>

                <div className="mt-8 flex justify-center">
                    <SocialShare title={blog.title} />
                </div>

                <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block mt-5 px-5 py-1.5 text-sm border border-[#c6a75e] text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}