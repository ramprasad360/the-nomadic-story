import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";
    
export const metadata: Metadata = {
    title: "Cities. Culture. Perspective.",
    description:
        "An editorial travel journal exploring cities through culture, photography, and lived experience — beyond landmarks and guidebooks.",
    alternates: {
        canonical: "https://thenomadicstory.com",
    },
    openGraph: {
        title: "The Nomadic Story",
        description:
            "An editorial travel journal exploring cities, culture, and perspective.",
        siteName: "The Nomadic Story",
        url: "https://thenomadicstory.com",
        type: "website",
        images: [
            {
                url: "/images/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "The Nomadic Story",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "The Nomadic Story",
        description:
            "An editorial travel journal exploring cities, culture, and perspective.",
        images: ["/images/og-home.jpg"],
    },
};

export default function Home() {
    return (
        <>
            {/* Structured Data */}
            <Script
                id="website-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "The Nomadic Story",
                        url: "https://thenomadicstory.com",
                        author: {
                            "@type": "Person",
                            name: "Ram",
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "The Nomadic Story",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://thenomadicstory.com/icon.svg"
                            }
                        },
                        sameAs: [
                            "https://instagram.com/thenomadicstory",
                            "https://twitter.com/thenomadicstory",
                        ],
                    }),
                }}
            />

            <main>

                {/* ================= HERO ================= */}
                <section className="max-w-4xl md:max-w-5xl mx-auto px-6 pt-16 sm:pt-20 pb-20 sm:pb-24 md:pb-28 text-center">

                    <p className="text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-gray-400 mb-6">
                        The Nomadic Story
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.06em] text-gray-900 leading-tight">
                        Cities. Culture. Perspective.
                    </h1>

                    <div className="w-14 sm:w-16 md:w-20 h-[2px] bg-[#c6a75e] mx-auto mt-6 sm:mt-8 mb-10 sm:mb-12" />

                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                        An editorial travel journal exploring cities through culture,
                        photography, and lived experience — beyond landmarks and guidebooks.
                    </p>

                    <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm mt-6 italic">
                        For those who travel with intention.
                    </p>
                </section>

                {/* ================= ABOUT ================= */}
                <section className="max-w-6xl mx-auto px-6 pb-20 sm:pb-24 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                    <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/personal/ram-travel-photographer-the-nomadic-story.jpg"
                            alt="Ram – travel photographer and founder of The Nomadic Story"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] uppercase font-light text-gray-900 leading-tight">
                            The Story Behind The Journey
                        </h2>

                        <div className="w-12 sm:w-14 md:w-16 h-[2px] bg-[#c6a75e] mt-6 mb-8" />

                        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                            Founded by Ram, a storyteller and observer of cultures,
                            The Nomadic Story began as a photographic archive and evolved
                            into a considered exploration of cities and their quiet details.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                            From the skyline of Hong Kong to the temples of Bali,
                            each place carries its own rhythm.
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
                            This journal is a collection of reflections — a visual and written
                            archive of places that inspire curiosity, calm, and connection.
                        </p>

                        <Link
                            href="/about-me"
                            className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                        >
                            Read My Story
                        </Link>
                    </div>
                </section>

 
                {/* ================= FEATURED DESTINATIONS ================= */}
                <section className="max-w-6xl mx-auto px-6 pb-20 sm:pb-24 md:pb-28 text-center">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] uppercase font-light text-gray-900">
                        Featured Destinations
                    </h2>

                    <div className="w-14 sm:w-16 md:w-20 h-[2px] bg-[#c6a75e] mx-auto mt-6 mb-8" />

                    <p className="text-gray-500 max-w-2xl mx-auto mb-14 sm:mb-16 leading-relaxed text-sm sm:text-base">
                        A curated collection of cities that left a lasting impression —
                        explored through culture and lived moments.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

                        {[
                            {
                                href: "/hong-kong",
                                img: "/images/hong-kong/bruce-lee-statue-victoria-harbour-hong-kong.jpg",
                                title: "Hong Kong",
                            },
                            {
                                href: "/bali",
                                img: "/images/bali/bali-gates-of-heaven-temple-reflection.jpg",
                                title: "Bali",
                            },
                            {
                                href: "/seoul",
                                img: "/images/seoul/seoul-traditional-street-architecture.jpg",
                                title: "Seoul",
                            },
                        ].map((item) => (

                            <Link key={item.href} href={item.href} className="group block">

                                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">

                                    {/* IMAGE */}
                                    <Image
                                        src={item.img}
                                        alt={`${item.title} travel photography`}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

                                    {/* TITLE (Styled like button) */}
                                    <div className="absolute inset-0 flex items-end justify-center pb-10">

                                        <div className="
                        border border-[#c6a75e]
                        px-6 py-2
                        text-xs tracking-[0.4em] uppercase
                        text-[#c6a75e]
                        bg-black/40 backdrop-blur-sm
                        transition duration-300
                        group-hover:bg-[#c6a75e] group-hover:text-white
                    ">
                                            {item.title}
                                        </div>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </section>
                {/* ================= SIGNATURE QUOTE ================= */}
                <section className="bg-gray-50 py-16 sm:py-20 md:py-24 text-center px-6">

                    <p className="text-xl sm:text-2xl md:text-3xl italic text-gray-800 max-w-3xl mx-auto font-light leading-relaxed">
                        “Travel is not about movement — it’s about perspective.”
                    </p>

                    <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                        Every journey changes us quietly.
                        The Nomadic Story exists to preserve those transformations —
                        one destination at a time.
                    </p>

                    <div className="mt-12">
                        <SocialSection title="The Nomadic Story - Travel Journal" />
                    </div>
                </section>

            </main>
        </>
    );
}