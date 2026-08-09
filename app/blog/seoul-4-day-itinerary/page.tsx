import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    alternates: {
        canonical:
            "https://thenomadicstory.com/blog/seoul-4-day-itinerary",
    },

    title:
        "Seoul 4-Day Itinerary | Tradition. Rhythm. Perspective.",

    description:
        "A four-day Seoul itinerary covering Bukchon Hanok Village, Gyeongbokgung Palace, Gwanghwamun, Nami Island, Petite France, Italian Village, Starfield Library, and modern Seoul.",

    keywords: [
        "Seoul 4 day itinerary",
        "Seoul travel itinerary",
        "4 days in Seoul",
        "Seoul travel guide",
        "Bukchon Hanok Village",
        "Gyeongbokgung Palace",
        "Gwanghwamun",
        "Nami Island",
        "Petite France",
        "Italian Village",
        "Starfield Library Seoul",
        "Seoul travel photography",
        "Seoul travel blog",
        "The Nomadic Story Seoul",
    ],

    authors: [
        {
            name: "Ram",
            url: "https://thenomadicstory.com/about",
        },
    ],

    openGraph: {
        title:
            "Seoul 4-Day Itinerary | The Nomadic Story",

        description:
            "Four days through traditional Seoul, royal palaces, Nami Island, surrounding villages, and modern Seoul.",

        siteName: "The Nomadic Story",

        type: "article",

        url:
            "https://thenomadicstory.com/blog/seoul-4-day-itinerary",

        images: [
            {
                url:
                    "/images/seoul/seoul-gwanghwamun-gate.jpg",
                width: 1200,
                height: 630,
                alt:
                    "Gwanghwamun Gate in Seoul, South Korea",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Seoul 4-Day Itinerary | The Nomadic Story",

        description:
            "Bukchon, Gyeongbokgung, Nami Island, Petite France, Italian Village, Starfield Library and modern Seoul.",

        images: [
            "/images/seoul/seoul-gwanghwamun-gate.jpg",
        ],
    },
};


/* =========================================================
   DAY 1 GALLERY
========================================================= */

const day1Gallery = [
    {
        src:
            "/images/seoul/seoul-bukchon-hanok-alley.jpg",
        alt:
            "Traditional hanok alley in Bukchon Seoul",
        caption:
            "Bukchon Hanok Village",
    },

    {
        src:
            "/images/seoul/seoul-bukchon-hanok-courtyard.jpg",
        alt:
            "Traditional hanok courtyard in Bukchon Seoul",
        caption:
            "Hanok Courtyard",
    },

    {
        src:
            "/images/seoul/seoul-bukchon-hanok-rooftops.jpg",
        alt:
            "Traditional rooftops in Bukchon Hanok Village",
        caption:
            "Hanok Rooftops",
    },
];


/* =========================================================
   DAY 2 GALLERY
========================================================= */

const day2Gallery = [
    {
        src:
            "/images/seoul/seoul-gyeongbokgung-palace.jpg",
        alt:
            "Gyeongbokgung Palace in Seoul",
        caption:
            "Gyeongbokgung Palace",
    },

    {
        src:
            "/images/seoul/seoul-gyeonghoeru-pavilion.jpg",
        alt:
            "Gyeonghoeru Pavilion in Seoul",
        caption:
            "Gyeonghoeru Pavilion",
    },

    {
        src:
            "/images/seoul/seoul-gyeongbokgung-palace-gate.jpg",
        alt:
            "Traditional gate at Gyeongbokgung Palace",
        caption:
            "Palace Gate",
    },
];


/* =========================================================
   DAY 3 GALLERY
========================================================= */

const day3Gallery = [
    {
        src:
            "/images/seoul/seoul-winter-hanok-village.jpg",
        alt:
            "Scenic traditional village near Seoul",
        caption:
            "Nami Island",
    },

    {
        src:
            "/images/seoul/seoul-pink-building.jpg",
        alt:
            "Colourful village architecture near Seoul",
        caption:
            "Petite France",
    },

    {
        src:
            "/images/seoul/seoul-love-locks.jpg",
        alt:
            "Love locks near Seoul",
        caption:
            "Italian Village",
    },
];


/* =========================================================
   DAY 4 GALLERY
========================================================= */

const day4Gallery = [
    {
        src:
            "/images/seoul/seoul-starfield-library.jpg",
        alt:
            "Starfield Library in Seoul",
        caption:
            "Starfield Library",
    },

    {
        src:
            "/images/seoul/seoul-hand-sculpture-front.jpg",
        alt:
            "Large hand sculpture in Seoul",
        caption:
            "Public Art",
    },

    {
        src:
            "/images/seoul/seoul-korean-traditional-statue.jpg",
        alt:
            "Traditional Korean cultural detail",
        caption:
            "Modern Seoul",
    },
];

type ImageStripProps = {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
};

function ImageStrip({ images }: ImageStripProps) {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            {images.map((item, index) => (
                <div key={`${item.src}-${index}`} className="flex flex-col items-center">
                    <div className="w-full rounded-xl overflow-hidden">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {item.caption && (
                        <p className="mt-3 text-xs tracking-[0.2em] text-gray-400 uppercase text-center">
                            {item.caption}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

/* =========================================================
   PAGE
========================================================= */

export default function Seoul4DayItinerary() {
    return (
        <main>

            {/* =====================================================
                JSON-LD ARTICLE SCHEMA
            ===================================================== */}

            <Script
                id="seoul-itinerary-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",

                        headline:
                            "Seoul 4-Day Itinerary | The Nomadic Story",

                        description:
                            "Four-day Seoul itinerary covering traditional neighborhoods, palaces, Nami Island and modern Seoul.",

                        mainEntityOfPage:
                            "https://thenomadicstory.com/blog/seoul-4-day-itinerary",

                        author: {
                            "@type": "Person",
                            name: "Ram",
                        },

                        publisher: {
                            "@type": "Organization",
                            name: "The Nomadic Story",

                            logo: {
                                "@type": "ImageObject",
                                url:
                                    "https://thenomadicstory.com/icon.svg",
                            },
                        },

                        image:
                            "https://thenomadicstory.com/images/seoul/seoul-gwanghwamun-gate.jpg",
                    }),
                }}
            />


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative w-full h-[100vh] overflow-hidden">

                <Image
                    src="/images/seoul/seoul-gwanghwamun-gate.jpg"
                    alt="Gwanghwamun Gate in Seoul South Korea"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    quality={90}
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">

                    <p className="text-xs tracking-[0.3em] uppercase mb-3">
                        The Nomadic Story
                    </p>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
                        Seoul 4 Day Itinerary: Complete Travel Guide
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] my-6" />

                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />

                    <p className="text-base md:text-2xl tracking-widest">
                        4 Days • Tradition, Culture & Modern Seoul
                    </p>

                </div>

            </section>


            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="max-w-4xl mx-auto px-6 py-20 text-center">

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Seoul is a city of contrasts — quiet hanok lanes,
                    royal palace walls, traditional courtyards and
                    modern architecture all existing within the same
                    rhythm.

                    Over four days, I explored the historic heart of
                    Seoul, spent a full day beyond the city at Nami
                    Island and its surrounding villages, and finished
                    with a glimpse of modern Seoul.
                </p>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />

                <p className="text-gray-500 italic text-lg">
                    Four days were enough to see Seoul’s many layers —
                    but not enough to stop discovering them.
                </p>

            </section>


            {/* =====================================================
                ROUTE SUMMARY
            ===================================================== */}

            <section className="max-w-6xl mx-auto px-6 py-20">

                <div className="text-center mb-14">

                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Trip Overview
                    </p>

                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">
                        Day-by-Day Route Summary
                    </h2>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6" />

                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">

                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
                            Day 1
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Bukchon Hanok Village, traditional streets,
                            hanok courtyards, rooftops, and the quieter
                            side of Seoul.
                        </p>

                    </div>


                    <div className="bg-[#f8f6f1] rounded-2xl p-6">

                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
                            Day 2
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Gyeongbokgung Palace, Gwanghwamun Gate,
                            palace courtyards, Gyeonghoeru Pavilion,
                            and traditional Seoul.
                        </p>

                    </div>


                    <div className="bg-[#f8f6f1] rounded-2xl p-6">

                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
                            Day 3
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Nami Island, Petite France, Italian Village,
                            scenic surroundings, and a full day beyond
                            Seoul.
                        </p>

                    </div>


                    <div className="bg-[#f8f6f1] rounded-2xl p-6">

                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
                            Day 4
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Modern Seoul, Starfield Library, contemporary
                            architecture, public art, and everyday city
                            life.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                DAY 1
            ===================================================== */}

            {/* DAY 1: BUKCHON */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* TEXT — LEFT */}
                    <div className="order-2 md:order-1">


                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 01: Walking Through Bukchon
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Morning
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            I started the day walking through Bukchon Hanok Village,
                            where traditional Korean houses, tiled roofs, quiet alleys,
                            and stone walls create a completely different rhythm from
                            modern Seoul.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Afternoon
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            I continued through the quieter hanok streets and courtyards,
                            taking time to notice the traditional architecture and
                            everyday details around the neighbourhood.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Evening
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            The day was about slowing down and experiencing the historic
                            side of Seoul on foot rather than rushing between attractions.
                        </p>
                    </div>

                    {/* IMAGE — RIGHT */}
                    <div className="order-1 md:order-2">

                        <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/seoul/seoul-bukchon-hanok-alley.jpg"
                                alt="Bukchon Hanok Village"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Bukchon Hanok Village • Seoul
                        </p>

                        <ImageStrip
                            images={[
                                {
                                    src: "/images/seoul/seoul-bukchon-hanok-courtyard.jpg",
                                    alt: "Bukchon Hanok courtyard",
                                    caption: "Hanok Courtyard",
                                },
                                {
                                    src: "/images/seoul/seoul-bukchon-hanok-rooftops.jpg",
                                    alt: "Bukchon Hanok rooftops",
                                    caption: "Hanok Rooftops",
                                },
                            ]}
                        />

                    </div>

                </div>
            </section>


            {/* =====================================================
                DAY 2
            ===================================================== */}

            {/* DAY 2: GYEONGBOKGUNG */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* IMAGE — LEFT */}
                    <div className="order-1">

                        <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/seoul/seoul-gyeongbokgung-palace.jpg"
                                alt="Gyeongbokgung Palace"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400">
                            Gyeongbokgung Palace • Seoul
                        </p>

                        <ImageStrip
                            images={[
                                {
                                    src: "/images/seoul/seoul-gyeonghoeru-pavilion.jpg",
                                    alt: "Gyeonghoeru Pavilion",
                                    caption: "Gyeonghoeru Pavilion",
                                },
                                {
                                    src: "/images/seoul/seoul-gwanghwamun-gate.jpg",
                                    alt: "Gwanghwamun Gate",
                                    caption: "Palace Gate",
                                },
                            ]}
                        />

                    </div>

                    {/* TEXT — RIGHT */}
                    <div className="order-2">

                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 02: Gyeongbokgung & Gwanghwamun
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Morning
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Explore Gyeongbokgung Palace and its expansive courtyards,
                            traditional gates, detailed Korean architecture, and
                            historic palace grounds.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Afternoon
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Continue towards Gwanghwamun and experience the contrast
                            between Seoul’s royal past and the modern city surrounding it.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Late Afternoon
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Spend time around Gyeonghoeru Pavilion and the palace grounds,
                            where the architecture changes character with the light.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
                DAY 3
            ===================================================== */}

            {/* DAY 3: NAMI ISLAND */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* TEXT — LEFT */}
                    <div className="order-2 md:order-1">


                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 03: Nami Island & The Villages Beyond Seoul
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Morning
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            A full-day trip beyond Seoul, beginning with Nami Island
                            and its tree-lined paths, seasonal scenery, and quieter
                            surroundings.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Afternoon
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Continue to Petite France and the Italian Village, where
                            colourful buildings and European-inspired architecture
                            create a completely different atmosphere from Seoul.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Evening
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Return to Seoul after a relaxed day surrounded by nature,
                            small villages, and mountain scenery.
                        </p>

                    </div>

                    {/* IMAGE — RIGHT */}
                    <div className="order-1 md:order-2">

                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/seoul/seoul-winter-hanok-village.jpg"
                                alt="Nami Island and surrounding villages"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Nami Island • Beyond Seoul
                        </p>

                        <ImageStrip
                            images={[
                                {
                                    src: "/images/seoul/seoul-pink-building.jpg",
                                    alt: "Petite France village architecture",
                                    caption: "Petite France",
                                },
                                {
                                    src: "/images/seoul/seoul-love-locks.jpg",
                                    alt: "Italian Village love locks",
                                    caption: "Italian Village",
                                },
                            ]}
                        />

                    </div>

                </div>
            </section>


            {/* =====================================================
                DAY 4
            ===================================================== */}

            {/* DAY 4: MODERN SEOUL */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* IMAGE — LEFT */}
                    <div className="order-1">

                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/seoul/seoul-starfield-library.jpg"
                                alt="Modern Seoul and Starfield Library"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Starfield Library • Modern Seoul
                        </p>

                        <ImageStrip
                            images={[
                                {
                                    src: "/images/seoul/seoul-hand-sculpture.jpg",
                                    alt: "Large public hand sculpture in Seoul",
                                    caption: "Public Art",
                                },
                            ]}
                        />

                    </div>

                    {/* TEXT — RIGHT */}
                    <div className="order-2">

                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 4: Modern Seoul
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Morning
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Spend time experiencing a different side of Seoul, where
                            contemporary architecture and public spaces sit alongside
                            the city’s older neighbourhoods.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Afternoon
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Visit Starfield Library and take in its dramatic scale,
                            architecture, and modern urban atmosphere.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">
                                Evening
                            </span>
                            <span className="text-gray-400 mr-2">—</span>
                            Finish the journey with Seoul’s contemporary streets,
                            public art, and everyday city life.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
                PHOTOGRAPHY NOTES
            ===================================================== */}

            <section className="text-center py-16 px-6">

                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                    Photography Tips
                </p>

                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                    Best Camera Spots From This Itinerary
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    Bukchon Hanok Village in the morning, Gyeongbokgung
                    Palace through the afternoon, Nami Island and its
                    surrounding villages during the day, and Starfield
                    Library for a modern Seoul perspective.
                </p>

                <Link
                    href="/gallery/seoul"
                    className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                >
                    View Seoul Photo Gallery
                </Link>

            </section>


            {/* =====================================================
                BEST PHOTO TIMES
            ===================================================== */}

            <section className="max-w-6xl mx-auto px-6 py-20">

                <div className="text-center mb-14">

                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Photography Guide
                    </p>

                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">
                        Best Photo Times
                    </h2>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6" />

                </div>


                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            Day 1 • Bukchon Hanok Village
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Morning is ideal for Bukchon when the streets
                            are quieter and the light falls naturally
                            across the traditional hanok walls and
                            rooftops.
                        </p>

                    </div>


                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            Day 2 • Gyeongbokgung Palace
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Late afternoon works especially well around
                            the palace grounds and Gyeonghoeru Pavilion
                            when the changing light adds depth to the
                            traditional architecture.
                        </p>

                    </div>


                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            Day 3 • Nami Island
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Daylight gives the best balance for Nami Island
                            and the surrounding villages, especially when
                            photographing the trees, paths and colourful
                            architecture.
                        </p>

                    </div>


                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            Day 4 • Modern Seoul
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Daylight works well for Starfield Library and
                            public art, while later light adds atmosphere
                            to Seoul’s modern streets and architecture.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRACTICAL INFORMATION
            ===================================================== */}

            <section className="max-w-6xl mx-auto px-6 py-24">

                <div className="text-center mb-16">

                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Practical Information
                    </p>

                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">
                        Plan Your Seoul Trip Better
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Seoul is easy to explore, but a few smart choices
                        can make your trip smoother. Plan your transport,
                        choose the right neighbourhoods, and leave enough
                        time to experience both traditional Seoul and its
                        modern side.
                    </p>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6" />

                </div>


                {/* =================================================
                    MAIN PRACTICAL INFORMATION
                ================================================= */}

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

                    {/* WHEN TO VISIT */}

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            When to Visit
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Spring and autumn are especially comfortable
                            for walking and photography, while winter
                            brings a quieter atmosphere and the possibility
                            of snow around Seoul’s traditional architecture.
                        </p>

                    </div>


                    {/* WHERE TO STAY */}

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            Where to Stay
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Myeongdong, Insadong, Jongno and areas around
                            central Seoul are convenient for combining
                            traditional attractions, shopping, restaurants
                            and public transport.
                        </p>

                    </div>


                    {/* GETTING AROUND */}

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            Getting Around
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Seoul’s subway is one of the easiest ways to
                            move between major areas. Buses and taxis are
                            useful when travelling beyond the main subway
                            routes.
                        </p>

                    </div>


                    {/* WHAT TO EAT */}

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">
                            What to Eat
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Seoul offers everything from traditional Korean
                            dishes and street food to cafés, international
                            restaurants and vegetarian-friendly eateries.
                        </p>

                    </div>

                </div>


                {/* =================================================
                    LANGUAGE / CURRENCY / TRAVEL TIP
                ================================================= */}

                <div className="mt-12 space-y-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* LANGUAGE */}

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">

                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
                                Language
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Korean is the primary language, and English
                                is commonly available in major tourist
                                areas, hotels and transportation hubs.
                            </p>

                        </div>


                        {/* CURRENCY */}

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">

                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
                                Currency
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                South Korea uses the Korean Won (KRW).
                                Cards are widely accepted, but carrying
                                some cash is useful for smaller shops,
                                markets and occasional purchases.
                            </p>

                        </div>


                        {/* TRAVEL TIP */}

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">

                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
                                Travel Tip
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Start early for popular attractions such
                                as Bukchon and Gyeongbokgung, and keep
                                comfortable shoes with you because Seoul
                                involves plenty of walking.
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        NAVIGATION & VEGETARIAN
                    ================================================= */}

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                        {/* NAVIGATION & APPS */}

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">

                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
                                Navigation & Apps
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Use Naver Map or KakaoMap for detailed
                                walking and public transport directions.
                                A T-money card makes subway and bus travel
                                simple, while translation apps can help
                                when navigating local areas.
                            </p>

                        </div>


                        {/* VEGETARIAN TIP */}

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">

                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">
                                Vegetarian Tip
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Vegetarian options are available across
                                Seoul, with particularly good choices in
                                areas such as Insadong, Myeongdong and
                                Itaewon. Buddhist temple cuisine can also
                                be a good option for plant-based meals.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="max-w-3xl mx-auto px-6 py-20">

                <h2 className="text-xl tracking-[0.3em] uppercase text-center mb-4">
                    Frequently Asked Questions
                </h2>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />


                <div className="space-y-8 text-gray-700">

                    <div>

                        <h3 className="font-medium text-lg mb-2">
                            Is 4 days enough for Seoul?
                        </h3>

                        <p className="text-sm leading-relaxed">
                            Yes. Four days gives you enough time to explore
                            Seoul’s traditional neighbourhoods, major
                            palaces, modern attractions and take a full-day
                            excursion to Nami Island.
                        </p>

                    </div>


                    <div>

                        <h3 className="font-medium text-lg mb-2">
                            What is the best time to visit Seoul?
                        </h3>

                        <p className="text-sm leading-relaxed">
                            Spring and autumn are particularly comfortable
                            for walking and photography. Winter offers a
                            quieter atmosphere and a different visual
                            character.
                        </p>

                    </div>


                    <div>

                        <h3 className="font-medium text-lg mb-2">
                            Is Seoul easy to explore without a car?
                        </h3>

                        <p className="text-sm leading-relaxed">
                            Yes. Seoul has an extensive public transport
                            network, and many major attractions can be
                            reached easily by subway and bus.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL REFLECTION
            ===================================================== */}

            <section className="py-24 px-6 text-center">

                <div className="max-w-3xl mx-auto">

                    <blockquote className="italic text-2xl md:text-3xl text-gray-800 mb-8 font-light leading-relaxed">
                        Seoul reminded me that moving forward does not
                        always mean leaving the past behind.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />


                    {/* CONTINUE EXPLORING */}

                    <section className="text-center py-12 px-6">

                        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                            Continue Exploring
                        </p>

                        <Link
                            href="/blog"
                            className="inline-block border border-[#c6a75e] px-8 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition-all duration-300"
                        >
                            Explore More Travel Itineraries
                        </Link>

                    </section>


                    <SocialSection
                        title="Seoul 4-Day Itinerary | The Nomadic Story"
                    />

                </div>

            </section>

        </main>
    );
}