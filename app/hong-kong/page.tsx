import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";
import GallerySlider from "@/app/components/GallerySlider";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/hong-kong",
    },

    title: "Hong Kong | Cities. Culture. Perspective.",

    description:
        "Explore Hong Kong through street photography, skyline views, markets, and cultural neighborhoods. A travel story and photography guide from The Nomadic Story.",

    keywords: [
        "Hong Kong travel guide",
        "Hong Kong street photography",
        "Hong Kong skyline Victoria Harbour",
        "Hong Kong travel blog",
        "Hong Kong photography locations",
        "The Nomadic Story Hong Kong",
    ],

    authors: [{ name: "Ram", url: "https://thenomadicstory.com/about" }],

    openGraph: {
        title: "Hong Kong | The Nomadic Story",
        description:
            "A considered exploration of Hong Kong's neon-lit streets, layered architecture, and cultural pulse.",
        siteName: "The Nomadic Story",
        type: "article",
        url: "https://thenomadicstory.com/hong-kong",
        images: [
            {
                url: "/images/hong-kong-city-skyline-view.png",
                width: 1200,
                height: 630,
                alt: "Hong Kong skyline at dusk with Victoria Harbour reflections",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Hong Kong | The Nomadic Story",
        description:
            "Street photography, skyline reflections, and cultural rhythms from Hong Kong.",
        images: ["/images/hong-kong-city-skyline-view.png"],
    },
};

export default function HongKongPage() {
    const galleryImages = [
        {
            src: "/images/hong-kong-city-skyline-view.png",
            alt: "Hong Kong skyline from Victoria Peak",
        },
        {
            src: "/images/bruce-lee-statue-victoria-harbour-hong-kong.jpg",
            alt: "Bruce Lee statue at Victoria Harbour Hong Kong",
        },
        {
            src: "/images/hong-kong-orange-tram-street.jpg",
            alt: "Orange tram crossing street in Hong Kong",
        },
        {
            src: "/images/hong-kong-blue-tram-city-street.jpg",
            alt: "Blue tram on Hong Kong street",
        },
        {
            src: "/images/hong-kong-night-street-bus.jpg",
            alt: "Night street bus scene in Hong Kong",
        },
        {
            src: "/images/hong-kong-old-man-street-photography.jpg",
            alt: "Old man walking on a Hong Kong street",
        },
        {
            src: "/images/hong-kong-local-market-shop.png",
            alt: "Local market shop in Hong Kong",
        },
    ];

    return (
        <main>
            {/* JSON-LD SEO */}
            <Script
                id="hong-kong-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Hong Kong | The Nomadic Story",
                        description: "Street photography and travel reflections from Hong Kong.",
                        mainEntityOfPage: "https://thenomadicstory.com/hong-kong",
                        author: {
                            "@type": "Person",
                            name: "Ram",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "The Nomadic Story",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://thenomadicstory.com/icon.svg",
                            },
                        },
                        image:
                            "https://thenomadicstory.com/images/hong-kong-city-skyline-view.png",
                    }),
                }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen overflow-hidden">
                <Image
                    src="/images/hong-kong-city-skyline-view.png"
                    alt="Hong Kong skyline symphony at dusk - Victoria Harbour reflections"
                    priority
                    fill
                    sizes="100vw"
                    className="object-cover"
                    quality={90}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/75 flex flex-col justify-end items-center text-white text-center px-4 pb-12 md:pb-20">
                    <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-3">
                        The Nomadic Story
                    </p>

                    <h1 className="text-4xl md:text-7xl font-light tracking-[0.1em] uppercase mb-3">
                        Hong Kong
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />

                    <p className="text-base md:text-2xl tracking-widest max-w-3xl">
                        Where Vertical Dreams Meet Horizontal Lives
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Hong Kong hums with tension — glass towers piercing low-hanging clouds,
                    neon characters flickering above dai pai dong steam, trams rattling
                    through centuries-old markets.
                </p>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />

                <p className="text-gray-500 italic text-lg">
                    A place where East meets West, past meets future.
                </p>
            </section>

            {/* URBAN RHYTHMS */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-2">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hong-kong-local-market-shop.png"
                                alt="Street market shop in Mong Kok district, Hong Kong"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Mong Kok Street Market • Hong Kong
                        </p>
                    </div>

                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Urban Rhythms
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Walk through Mong Kok at dusk and the city begins to reveal its pulse.
                            Neon signs glow above narrow streets while small vendors display herbs,
                            dried seafood, and local goods beneath buzzing fluorescent lights.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            In Hong Kong, everyday life unfolds vertically and horizontally —
                            balconies stacked above markets, trams gliding past storefronts,
                            and millions of quiet routines forming the rhythm of the city.
                        </p>
                    </div>
                </div>
            </section>

            {/* CITY IN MOTION */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="font-light text-3xl md:text-4xl tracking-[0.2em] uppercase text-gray-900 mb-6">
                        City in Motion
                    </h2>
                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto" />
                </div>

                <GallerySlider images={galleryImages} />
            </section>

            {/* PHOTOGRAPHY COLLECTION */}
            <section className="text-center py-16 px-6">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                    Photography Collection
                </p>

                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                    Explore Hong Kong Through My Lens
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    A curated collection of street moments, city architecture, and everyday
                    life captured across Hong Kong — from towering skylines to the quiet
                    rhythm of its markets and neighborhoods.
                </p>

                <Link
                    href="/gallery/hong-kong"
                    className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                >
                    View Full Hong Kong Photo Gallery
                </Link>
            </section>

            {/* PLAN YOUR TRIP */}
            <section className="py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Planning Your Trip
                    </p>

                    <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                        A Short Itinerary for Hong Kong
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        If you’re visiting Hong Kong for the first time, this short itinerary
                        highlights the city’s skyline, historic trams, neon-lit markets,
                        and local food culture.
                    </p>

                    <Link
                        href="/blog/hong-kong-3-day-itinerary"
                        className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                    >
                        View Itinerary
                    </Link>
                </div>
            </section>

            {/* FINAL REFLECTION */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <blockquote className="italic text-2xl md:text-3xl text-gray-800 mb-8 font-light leading-relaxed">
                        Hong Kong taught me photography is not about waiting for light.
                        It’s about finding rhythm in the chaos.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />

                    <SocialSection title="Hong Kong | The Nomadic Story" />
                </div>
            </section>
        </main>
    );
}