import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";
import GallerySlider from "@/app/components/GallerySlider";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/bali",
    },

    title: "Bali | Islands. Rituals. Stillness.",

    description:
        "Explore Bali through temples, rice terraces, ocean rhythms, and cultural rituals. A travel story and photography guide from The Nomadic Story.",

    keywords: [
        "Bali travel guide",
        "Bali temples photography",
        "Ubud rice terraces Bali",
        "Bali travel blog",
        "Bali itinerary",
        "The Nomadic Story Bali",
    ],

    authors: [{ name: "Ram", url: "https://thenomadicstory.com/about" }],

    openGraph: {
        title: "Bali | The Nomadic Story",
        description:
            "A quiet exploration of Bali's temples, landscapes, and spiritual rhythm.",
        siteName: "The Nomadic Story",
        type: "article",
        url: "https://thenomadicstory.com/bali",
        images: [
            {
                url: "/images/bali/bali-gates-of-heaven-temple-reflection.jpg",
                width: 1200,
                height: 630,
                alt: "Lempuyang Temple gates reflection Bali",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Bali | The Nomadic Story",
        description:
            "Temples, ocean tides, and slow living from Bali.",
        images: ["/images/bali/bali-gates-of-heaven-temple-reflection.jpg"],
    },
};

export default function BaliPage() {
    const galleryImages = [
        {
            src: "/images/bali/bali-gates-of-heaven-temple-reflection.jpg",
            alt: "Lempuyang Temple gates reflection with Mount Agung Bali",
        },
        {
            src: "/images/bali/ubud-rice-terraces.jpg",
            alt: "Ubud rice terraces landscape Bali Indonesia",
        },
        {
            src: "/images/bali/bali-kecak-fire-dance-performance.jpg",
            alt: "Kecak fire dance cultural performance Bali Indonesia",
        },
        {
            src: "/images/bali/bali-water-temple-tirta-empul.jpg",
            alt: "Tirta Empul water temple holy spring Bali",
        },
        {
            src: "/images/bali/bali-jungle-view-scenic.jpg",
            alt: "Lush jungle landscape in Bali Indonesia",
        },
    ];

    return (
        <main>
            {/* JSON-LD SEO */}
            <Script
                id="bali-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Bali | The Nomadic Story",
                        description:
                            "A visual and narrative exploration of Bali’s temples, landscapes, and spiritual rhythm.",
                        mainEntityOfPage: "https://thenomadicstory.com/bali",
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
                            "https://thenomadicstory.com/images/bali/bali-gates-of-heaven-temple-reflection.jpg",
                    }),
                }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen overflow-hidden">
                <Image
                    src="/images/bali/bali-gates-of-heaven-temple-reflection.jpg"
                    alt="Lempuyang Temple gates reflection Bali"
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

                    <h1 className="text-4xl md:text-7xl font-light tracking-[0.15em] uppercase mb-4">
                        Bali
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />

                    <p className="text-base md:text-2xl tracking-[0.25em] max-w-3xl">
                        Where Time Slows and Rituals Speak
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Bali moves in quiet rhythms — incense curling through temple gates,
                    terraces folding into the hills, waves arriving without urgency.
                </p>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />

                <p className="text-gray-500 italic text-lg">
                    A place where devotion shapes the rhythm of everyday life.
                </p>
            </section>

            {/* ISLAND RHYTHM */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-2">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/bali/ubud-rice-terraces.jpg"
                                alt="Ubud rice terraces landscape Bali Indonesia"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Ubud Rice Terraces • Bali
                        </p>
                    </div>

                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Island Rhythm
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Mornings begin with offerings — small woven baskets of flowers placed
                            gently on doorsteps. By afternoon, the island hums with quiet movement.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Bali moves differently. It’s not about speed — it’s about presence.
                        </p>
                    </div>
                </div>
            </section>

            {/* ISLAND IN MOTION */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="font-light text-3xl md:text-4xl tracking-[0.2em] uppercase text-gray-900 mb-6">
                        Island in Motion
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
                    Explore Bali Through My Lens
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    A curated collection of temples, landscapes, and quiet island moments.
                </p>

                <Link
                    href="/gallery/bali"
                    className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                >
                    View Full Bali Photo Gallery
                </Link>
            </section>

            {/* PLAN YOUR TRIP */}
            <section className="py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Planning Your Trip
                    </p>

                    <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                        A Short Itinerary for Bali
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        From the gates of Lempuyang and the terraces of Tegalalang to Uluwatu’s cliffs
                        and Tirta Gangga’s quiet pools, this short itinerary traces a journey through
                        Bali’s most defining landscapes and rituals.
                    </p>

                    <Link
                        href="/blog/bali-5-day-itinerary"
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
                        Bali reminded me that not every journey needs movement.
                        Some journeys need stillness.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />

                    <SocialSection title="Bali | The Nomadic Story" />
                </div>
            </section>
        </main>
    );
}