"use client";

import Link from "next/link";
import Image from "next/image";
import SocialShare from "@/app/components/SocialShare";

export default function BlogPage() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
                    <div className="relative overflow-hidden">
                        <Image
                            src="/images/hong-kong/hong-kong-avenue-of-stars.jpg"
                            alt="Hong Kong"
                            width={800}
                            height={500}
                            className="w-full h-auto group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute bottom-3 left-3 flex gap-2">
                            <span className="bg-white/90 text-xs px-3 py-1 rounded-full">
                                Hong Kong
                            </span>
                            <span className="bg-white/90 text-xs px-3 py-1 rounded-full">
                                Itinerary
                            </span>
                        </div>
                    </div>

                    <div className="p-5 text-center">
                        <h2 className="text-xl font-light leading-snug">
                            <Link
                                href="/blog/hong-kong-4-day-itinerary"
                                className="relative inline-block text-gray-900 transition duration-300 hover:text-[#d4a373]
                                           after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px]
                                           after:w-0 after:bg-[#d4a373] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                The Perfect 4-Day Hong Kong Guide
                            </Link>
                        </h2>

                        <p className="text-gray-400 text-xs mt-1">
                            The Nomadic Story • 2026
                        </p>

                        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                            A relaxed 4-day journey through Hong Kong’s streets, skyline,
                            markets, Lantau Island, and Disneyland experiences.
                        </p>

                        <div className="mt-8 flex justify-center">
                            <SocialShare title="Hong Kong 4-Day Itinerary" />
                        </div>

                        <Link
                            href="/blog/hong-kong-4-day-itinerary"
                            className="inline-block mt-5 px-5 py-1.5 text-sm border border-[#c6a75e] text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}