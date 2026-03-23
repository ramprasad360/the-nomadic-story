import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {

    alternates: {
        canonical: "https://thenomadicstory.com/gallery",
    },

    title: "Travel Photography Gallery | The Nomadic Story",

    description:
        "Explore travel photography from Hong Kong, Bali, and Seoul. A curated gallery of street photography, culture, and city life.",

    openGraph: {
        title: "Travel Photography Gallery | The Nomadic Story",
        description:
            "Explore curated travel photography from cities and cultures around the world.",
        url: "https://thenomadicstory.com/gallery",
        siteName: "The Nomadic Story",
        images: [
            {
                url: "/images/hong-kong-city-skyline-view.png",
                width: 1200,
                height: 630,
                alt: "Travel photography gallery preview",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Travel Photography Gallery",
        description:
            "A curated collection of travel photography from Hong Kong, Bali, and Seoul.",
        images: ["/images/hong-kong-city-skyline-view.png"],
    },

    keywords: [
        "travel photography",
        "street photography gallery",
        "Hong Kong photos",
        "Bali travel photos",
        "Seoul photography",
        "travel blog gallery",
    ],
};

export default function GalleryPage() {
    const destinations = [
        { href: "/gallery/hong-kong", img: "/images/bruce-lee-statue-victoria-harbour-hong-kong.jpg", title: "Hong Kong" },
        { href: "/gallery/bali", img: "/images/bali-gates-of-heaven-temple-reflection.jpg", title: "Bali" },
        { href: "/gallery/seoul", img: "/images/seoul-gyeongbokgung-palace.jpg", title: "Seoul" },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <Script
                id="gallery-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Travel Photography Gallery",
                        description:
                            "A curated collection of travel photography from Hong Kong, Bali, and Seoul.",
                        url: "https://thenomadicstory.com/gallery",
                    }),
                }}
            />

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="heading text-3xl md:text-5xl">
                    Gallery
                </h1>
                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6 mb-6" />
                <p className="font-luxury text-gray-600 max-w-xl mx-auto">
                    A visual archive of cities and lived moments.
                </p>
            </div>  

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {destinations.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="group block cursor-pointer"
                    >
                        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl cursor-pointer">
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt={`${item.title} travel photography gallery`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index ===0}
                                className="object-cover transition duration-700 md:group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition duration-500 pointer-events-none" />
                            {/* Content */}
                            <div className="absolute bottom-6 left-0 right-0 text-center px-4">

                                {/* Title */}
                                <h3 className="text-white text-sm md:text-lg tracking-[0.15em] md:tracking-[0.3em] uppercase mb-2">
                                    {item.title}
                                </h3>

                                {/* CTA */}
                                <div className="mt-3 flex justify-center">
                                    <span className="btn-luxury active:scale-[0.97]">
                                        View Gallery
                                    </span>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>

        </main>
    );
}