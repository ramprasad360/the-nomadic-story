import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";
import GallerySlider from "@/app/components/GallerySlider";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/seoul",
    },

    title: "Seoul | Tradition. Rhythm. Perspective.",

    description:
        "Explore Seoul through traditional palaces, hanok neighborhoods, historic streets, cultural moments, and the rhythm of modern city life.",

    keywords: [
        "Seoul travel guide",
        "Seoul travel photography",
        "Seoul street photography",
        "Seoul travel blog",
        "Gyeongbokgung Palace",
        "Gwanghwamun Gate",
        "Bukchon Hanok Village",
        "Seoul photography",
        "Seoul itinerary",
        "The Nomadic Story Seoul",
    ],

    authors: [{ name: "Ram", url: "https://thenomadicstory.com/about" }],

    openGraph: {
        title: "Seoul | The Nomadic Story",
        description:
            "A considered exploration of Seoul's traditional streets, palace architecture, hanok neighborhoods, and cultural rhythm.",
        siteName: "The Nomadic Story",
        type: "article",
        url: "https://thenomadicstory.com/seoul",
        images: [
            {
                url: "/images/seoul/seoul-gwanghwamun-gate.jpg",
                width: 1200,
                height: 630,
                alt: "Gwanghwamun Gate in Seoul, South Korea",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Seoul | The Nomadic Story",
        description:
            "Traditional palaces, hanok streets, cultural moments, and everyday life from Seoul.",
        images: ["/images/seoul/seoul-gwanghwamun-gate.jpg"],
    },
};

export default function SeoulPage() {
    const galleryImages = [
        {
            src: "/images/seoul/seoul-bukchon-hanok-alley.jpg",
            alt: "Traditional hanok alley in Bukchon Seoul",
        },

        {
            src: "/images/seoul/seoul-gyeongbokgung-palace.jpg",
            alt: "Gyeongbokgung Palace in Seoul",
        },
        {
            src: "/images/seoul/seoul-hand-sculpture.jpg",
            alt: "Large hand sculpture in Seoul",
        },
        {
            src: "/images/seoul/seoul-hanok-village-night.jpg",
            alt: "Hanok village street at night in Seoul",
        },
        {
            src: "/images/seoul/seoul-gyeonghoeru-pavilion.jpg",
            alt: "Gyeonghoeru Pavilion in Seoul",
        },
        {
            src: "/images/seoul/seoul-hanbok-at-gwanghwamun.jpg",
            alt: "Traditional Korean hanbok near Gwanghwamun",
        },
        {
            src: "/images/seoul/seoul-bukchon-hanok-courtyard.jpg",
            alt: "Traditional hanok courtyard in Bukchon Seoul",
        },
        {
            src: "/images/seoul/seoul-bukchon-hanok-rooftops.jpg",
            alt: "Traditional rooftops in Bukchon Hanok Village",
        },
        {
            src: "/images/seoul/seoul-gyeongbokgung-palace-gate.jpg",
            alt: "Gate and traditional architecture at Gyeongbokgung Palace",
        },
        {
            src: "/images/seoul/seoul-hanok-traditional-house-exterior.jpg",
            alt: "Traditional Korean hanok house exterior",
        },
        {
            src: "/images/seoul/seoul-traditional-korean-jars.jpg",
            alt: "Traditional Korean pottery jars",
        },
        {
            src: "/images/seoul/seoul-winter-hanok-village.jpg",
            alt: "Snow-covered traditional hanok village near Seoul",
        },
    ];

    return (
        <main>

            {/* JSON-LD SEO */}
            <Script
                id="seoul-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Seoul | The Nomadic Story",
                        description:
                            "Street photography and travel reflections from Seoul.",
                        mainEntityOfPage:
                            "https://thenomadicstory.com/seoul",
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
                            "https://thenomadicstory.com/images/seoul/seoul-gwanghwamun-gate.jpg",
                    }),
                }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen overflow-hidden">

                <Image
                    src="/images/seoul/seoul-gwanghwamun-gate.jpg"
                    alt="Gwanghwamun Gate in Seoul South Korea"
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
                        Seoul
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />

                    <p className="text-base md:text-2xl tracking-widest max-w-3xl">
                        Where Ancient Streets Meet Modern Rhythm
                    </p>

                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Seoul moves between contrasts — palace walls standing beneath
                    glass towers, quiet hanok lanes opening into modern streets,
                    and centuries-old traditions finding their place in everyday life.
                </p>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />

                <p className="text-gray-500 italic text-lg">
                    A place where the old and the new move together.
                </p>

            </section>

            {/* CITY RHYTHMS */}
            <section className="max-w-6xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="flex flex-col order-1 md:order-2">

                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">

                            <Image
                                src="/images/seoul/seoul-bukchon-hanok-alley.jpg"
                                alt="Traditional hanok alley in Bukchon Seoul"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />

                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Bukchon Hanok Village • Seoul
                        </p>

                    </div>

                    <div className="order-2 md:order-1">

                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            City Rhythms
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Walk through Bukchon and the city begins to reveal its
                            layers. Traditional tiled roofs line quiet alleys while
                            modern Seoul rises beyond them, creating a rhythm where
                            history and everyday life exist side by side.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            From palace courtyards and hanok homes to busy streets,
                            cafés, markets, and glowing signs, Seoul is constantly
                            moving — yet its history remains woven into the city.
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
                    Explore Seoul Through My Lens
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    A curated collection of traditional streets, palace architecture,
                    hanok neighborhoods, cultural moments, and everyday life captured
                    across Seoul — from its historic heart to its quieter corners.
                </p>

                <Link
                    href="/gallery/seoul"
                    className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                >
                    View Full Seoul Photo Gallery
                </Link>

            </section>

            {/* PLAN YOUR TRIP */}
            <section className="py-20 px-6 text-center">

                <div className="max-w-3xl mx-auto">

                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Planning Your Trip
                    </p>

                    <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                        A Short Itinerary for Seoul
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        From Gwanghwamun and Gyeongbokgung Palace to the traditional
                        lanes of Bukchon, vibrant streets, cultural landmarks, and
                        quiet corners of the city, this short itinerary explores
                        Seoul through its many layers.
                    </p>

                    <Link
                        href="/blog/seoul-itinerary"
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
                        Seoul reminded me that moving forward does not always
                        mean leaving the past behind.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />

                    <SocialSection title="Seoul | The Nomadic Story" />

                </div>

            </section>

        </main>
    );

}
