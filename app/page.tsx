import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";

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
        url: "https://thenomadicstory.com",
        images: [
            {
                url: "/images/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "The Nomadic Story",
            },
        ],
    },
};

export default function Home() {
    return (
        <>
            {/* ✅ Structured Data (WebSite Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "The Nomadic Story",
                        url: "https://thenomadicstory.com",
                        description:
                            "A luxury editorial travel journal exploring cities, culture, photography, and perspective.",
                        author: {
                            "@type": "Person",
                            name: "Ram",
                        },
                    }),
                }}
            />

            <main className="bg-white">
                {/* ================= HERO SECTION ================= */}
                <section className="max-w-5xl mx-auto px-6 pt-14 pb-28 text-center">
                    <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
                        The Nomadic Story
                    </p>

                    <h1
                        className="font-[Taviraj,Georgia,Times,serif] 
            text-5xl md:text-6xl 
            font-light 
            tracking-[0.06em] 
            text-gray-900"
                    >
                        Cities. Culture. Perspective.
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-8 mb-12" />

                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
                        An editorial travel journal exploring cities through culture,
                        photography, and lived experience — beyond landmarks and guidebooks.
                    </p>

                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm mt-6 italic">
                        For those who travel with intention.
                    </p>
                </section>

                {/* ================= ABOUT SECTION ================= */}
                <section className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/ram_1.jpg"
                            alt="Ram Travel Portrait"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="font-[Taviraj,Georgia,Times,serif] text-3xl tracking-[0.2em] uppercase font-light text-gray-900">
                            The Story Behind The Journey
                        </h2>

                        <div className="w-12 h-[2px] bg-[#c6a75e] mt-6 mb-8" />

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded by Ram, a storyteller and observer of cultures,
                            The Nomadic Story began as a photographic archive and evolved
                            into a considered exploration of cities and their quiet details.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            The Nomadic Story is not about destinations — it’s about experiences.
                            From the skyline of Hong Kong to the temples of Bali,
                            each place carries its own rhythm.
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-8">
                            This journal is a collection of reflections — a visual and written
                            archive of places that inspire curiosity, calm, and connection.
                            It is an invitation to travel deeper, with intention.
                        </p>

                        <Link
                            href="/about"
                            className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                        >
                            Read My Story
                        </Link>
                    </div>
                </section>

                {/* ================= FEATURED DESTINATIONS ================= */}
                <section className="max-w-6xl mx-auto px-6 pb-28 text-center">
                    <h2 className="font-[Taviraj,Georgia,Times,serif] text-3xl tracking-[0.2em] uppercase font-light text-gray-900">
                        Featured Destinations
                    </h2>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6 mb-8" />

                    <p className="text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                        A curated collection of cities that left a lasting impression —
                        each explored through culture, architecture, and lived moments.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        <Link href="/hong-kong" className="group">
                            <div className="relative h-[380px] overflow-hidden">
                                <Image
                                    src="/images/hong_kong_4.jpg"
                                    alt="Hong Kong"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>
                            <h3 className="mt-6 text-lg tracking-[0.2em] uppercase group-hover:text-[#c6a75e] transition">
                                Hong Kong
                            </h3>
                        </Link>

                        <Link href="/bali" className="group">
                            <div className="relative h-[380px] overflow-hidden">
                                <Image
                                    src="/images/bali_1.jpg"
                                    alt="Bali"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>
                            <h3 className="mt-6 text-lg tracking-[0.2em] uppercase group-hover:text-[#c6a75e] transition">
                                Bali
                            </h3>
                        </Link>

                        <Link href="/seoul" className="group">
                            <div className="relative h-[380px] overflow-hidden">
                                <Image
                                    src="/images/seoul_1.jpg"
                                    alt="Seoul"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>
                            <h3 className="mt-6 text-lg tracking-[0.2em] uppercase group-hover:text-[#c6a75e] transition">
                                Seoul
                            </h3>
                        </Link>
                    </div>
                </section>

                {/* ================= SIGNATURE QUOTE ================= */}
                <section className="bg-gray-50 pt-24 pb-28 text-center px-6">
                    <p className="font-[Taviraj,Georgia,Times,serif] text-2xl md:text-3xl italic text-gray-800 max-w-3xl mx-auto">
                        “Travel is not about movement — it’s about perspective.”
                    </p>

                    <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
                        Every journey changes us quietly. The Nomadic Story exists
                        to preserve those transformations — one destination at a time.
                    </p>

                    <SocialSection title="The Nomadic Story - Travel Journal" />
                </section>
            </main>
        </>
    );
}