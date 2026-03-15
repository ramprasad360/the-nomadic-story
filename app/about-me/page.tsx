import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/about-me",
    },

    title: "About Me | The Nomadic Story",

    description:
        "About Ram, a Chennai-based travel blogger and street photographer behind The Nomadic Story. Explore travel photography, itineraries, and travel stories from Ireland, Hong Kong, Bali, Seoul and more.",

    openGraph: {
        title: "About Me | The Nomadic Story",
        siteName: "The Nomadic Story",
        description:
            "Chennai-based traveler and street photographer sharing stories from Ireland to South Korea.",
        url: "https://thenomadicstory.com/about-me",
        type: "profile",
        images: [
            {
                url: "/images/ram-portrait.jpg",
                width: 1200,
                height: 630,
                alt: "Ram - Street Photographer & Traveler",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Me | The Nomadic Story",
        description:
            "Chennai-based traveler and street photographer sharing stories from Ireland to South Korea.",
        images: ["/images/ram-portrait.jpg"],
        creator: "@thenomadicstory",
        site: "@thenomadicstory"
    }, 
};

export default function AboutPage() {
    return (
        <main>
            <Script
                id="about-person-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Ram",
                        url: "https://thenomadicstory.com/about-me",
                        "mainEntityOfPage": "https://thenomadicstory.com/about-me",
                        "image": "https://thenomadicstory.com/images/ram-portrait.jpg",
                        jobTitle: "Travel Blogger and Street Photographer",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "The Nomadic Story"
                        },
                        sameAs: [
                            "https://instagram.com/thenomadicstory",
                            "https://twitter.com/thenomadicstory"
                        ]
                    }),
                }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen overflow-hidden">
                <Image
                    src="/images/ram-portrait.jpg"
                    alt="Ram, travel photographer and founder of The Nomadic Story"
                    priority
                    fill
                    sizes="100vw"
                    quality={90}
                    className="object-cover object-[center_68%] md:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 flex flex-col justify-end items-center text-white text-center px-4 pb-12 md:pb-20">
                    <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-3">
                        The Nomadic Story
                    </p>
                    <h1 className="text-4xl md:text-7xl font-light tracking-[0.1em] uppercase mb-3">
                        About Me
                    </h1>
                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />
                    <p className="text-base md:text-2xl tracking-widest max-w-3xl">
                        Stories from Streets Around the World
                    </p>
                </div>
            </section>

            {/* INTRODUCTION WITH PORTRAITS */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Hi, I’m <strong>Ram</strong> — Chennai-based traveler and street photographer behind{" "}
                            <strong>The Nomadic Story</strong>. What started as family trips across continents
                            evolved into capturing the pulse of cities through my lens.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/ram-cultural-festival-hong-kong.jpg"
                                alt="Ram at Lantau Island, Hong Kong"
                                fill
                                sizes="(max-width:768px) 200px, 300px"
                                className="object-cover"
                                quality={85}
                            />
                        </div>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/ram-global-travel-nami-island.jpg"
                                alt="Ram at Nami Island, South Korea during autumn"
                                fill
                                sizes="(max-width:768px) 200px, 300px"
                                className="object-cover"
                                quality={85}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />
                <p className="text-gray-500 italic text-lg text-center">
                    8 countries. Countless streets. One camera.
                </p>
            </section>

            {/* MY JOURNEY */}
            <section className="container-page py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            The Journey
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Launched in 2023 to document travels through Ireland, Scotland, England, Malaysia,
                            Thailand, Indonesia, Hong Kong, and South Korea.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Photography became my way to preserve fleeting moments and reveal stories
                            hidden in urban textures and human rhythms.
                        </p>
                    </div>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/ram-hong-kong-victoria-peak.jpg"
                            alt="Ram overlooking Hong Kong skyline from Victoria Peak"
                            fill
                            sizes="(max-width:768px) 100vw, 50vw"
                            className="object-cover"
                            quality={90}
                        />
                    </div>
                </div>
            </section>

            {/* WHAT I SHARE */}
            <section className="container-page py-24">
                <div className="text-center mb-16">
                    <h2 className="font-light text-3xl md:text-4xl tracking-[0.2em] uppercase text-gray-900 mb-6">
                        What I Share
                    </h2>
                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#c6a75e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">📷</span>
                        </div>
                        <h3 className="text-xl font-light tracking-wide mb-4">Street Photography</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Everyday moments, city architecture, and people that define places.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#c6a75e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">✈️</span>
                        </div>
                        <h3 className="text-xl font-light tracking-wide mb-4">Travel Stories</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Lived experiences beyond tourist routes, from neon streets to mountain temples.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#c6a75e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl">🗺️</span>
                        </div>
                        <h3 className="text-xl font-light tracking-wide mb-4">Practical Itineraries</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Thoughtful plans to explore destinations confidently and meaningfully.
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE THE STORIES */}
            <section className="container-page py-24 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Start Your Journey
                    </p>
                    <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                        Explore My Travel Stories
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Discover Hong Kong’s neon pulse, Bali’s temple rituals, Seoul’s modern-traditional dance.
                    </p>
                    <Link
                        href="/"
                        className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                    >
                        Visit The Blog
                    </Link>
                </div>
            </section>

            {/* FINAL REFLECTION WITH PHOTO STRIP */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">

                    <div className="grid grid-cols-3 gap-6 mt-6 mb-12 max-w-lg mx-auto items-center">

                        {/* LEFT IMAGE */}
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/hong-kong-car.jpg"
                                alt="Red taxis driving through a street in Hong Kong"
                                fill
                                sizes="200px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* CENTER IMAGE (FEATURED) */}
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group scale-110 z-10">
                            <Image
                                src="/images/ram-tegenungan-waterfall.jpg"
                                alt="Ram at Tegenungan waterfall, Bali"
                                fill
                                sizes="200px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/seoul-gyeongbokgung-palace.jpg"
                                alt="Entrance gate of Gyeongbokgung Palace in Seoul, South Korea"
                                fill
                                sizes="200px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                    </div>

                    {/* ADD HERE */}
                    <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
                        Moments from the road
                    </p>

                    <blockquote className="italic text-2xl md:text-3xl text-gray-800 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                        Travel showed me the world. Photography taught me how to truly see it.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />

                    <SocialSection title="About Me | The Nomadic Story" />

                </div>
            </section>
        </main>
    );
}
