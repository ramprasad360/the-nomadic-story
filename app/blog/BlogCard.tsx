import Image from "next/image";
import Link from "next/link";

type Blog = {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    featured?: boolean;
};

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

            {/* IMAGE */}
            <div className="relative w-full h-64">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
                <p className="text-xs text-gray-400 mb-2">
                    The Nomadic Story • 2026
                </p>

                <h2 className="text-xl font-semibold mb-3">
                    {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-5">
                    {blog.description}
                </p>

                <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block border border-[#c6a75e] px-5 py-2 text-sm hover:bg-[#c6a75e] hover:text-white transition"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
}