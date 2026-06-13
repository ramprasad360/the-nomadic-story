import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/blog/bali-4-day-itinerary",
    },

    title: "Bali 4 Day Itinerary (2026 Guide) | The Nomadic Story",

    description:
        "Plan the perfect Bali 4 day itinerary with Ubud rice terraces, sacred temples, Lempuyang Temple, Uluwatu, and the Kecak Fire Dance.",

    keywords: [
        "Bali 4 day itinerary",
        "Bali itinerary 4 days",
        "4 days in Bali",
        "Bali travel guide",
        "Ubud rice terrace itinerary",
        "Lempuyang Temple plan",
        "Uluwatu Kecak Fire Dance Bali",
        "Uluwatu Temple itinerary",
    ],

    authors: [{ name: "Ram", url: "https://thenomadicstory.com/about" }],

    openGraph: {
        title: "Bali 4-Day Itinerary | The Nomadic Story",
        description:
            "Complete 4-day Bali travel guide featuring Ubud, sacred temples, Lempuyang Temple, Uluwatu, and the Kecak Fire Dance.",
        siteName: "The Nomadic Story",
        type: "article",
        url: "https://thenomadicstory.com/blog/bali-4-day-itinerary",
        images: [
            {
                url: "/images/bali/bali-river-valley-view.jpg",
                width: 1200,
                height: 630,
                alt: "Bali 4 day itinerary with rice terraces and temples"
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Bali 4-Day Itinerary | The Nomadic Story",
        description:
            "Explore Bali in 4 days: Ubud, sacred temples, Lempuyang Temple, Uluwatu, and the Kecak Fire Dance.",
        images: ["/images/bali/bali-river-valley-view.jpg"],
    },
};

export default function Bali4DayItinerary() {

    return (
        <main>

            {/* ================= SEO STRUCTURED DATA ================= */}

            <Script
                id="article-schema"
                strategy="afterInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Bali 4 Day Itinerary",
                        description:
                            "Complete 4-day Bali itinerary including Ubud rice terraces, sacred temples, Lempuyang Temple, Uluwatu Temple, and the Kecak Fire Dance.",
                        author: {
                            "@type": "Person",
                            name: "Ram",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "The Nomadic Story",
                        },
                        image:
                            "https://thenomadicstory.com/images/bali/ubud-rice-terraces.jpg",
                        mainEntityOfPage:
                            "https://thenomadicstory.com/blog/bali-4-day-itinerary",
                    }),
                }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Is 4 days enough for Bali?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, 4 days is enough to explore Ubud, sacred temples, Lempuyang Temple, and Uluwatu’s famous Kecak Fire Dance at a comfortable pace.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the best Bali itinerary?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A 4-day itinerary covering Ubud rice terraces, sacred temples, Lempuyang Temple, and Uluwatu Temple is ideal for first-time visitors.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Bali expensive for tourists?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Bali can suit different budgets, with affordable food and transport options available alongside luxury stays and experiences.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full h-[100vh] overflow-hidden">
                <Image
                    src="/images/bali/bali-river-valley-view.jpg"
                    alt="Bali Ubud rice terrace 4 day itinerary"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_70%]"   
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
                    <p className="text-xs tracking-[0.3em] uppercase mb-3">
                        The Nomadic Story
                    </p>

                    <h1 className="text-3xl md:text-6xl font-light tracking-wide mb-3">
                        Bali 4 Day Itinerary: Ubud, Lempuyang & Uluwatu
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />

                    <p className="text-base md:text-2xl tracking-widest">
                        4 Days • Rice Terraces • Temples • Culture
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    This Bali 4 day itinerary is built for travelers who want a mix of culture, landscapes, and slower travel.
                    Over four days, you’ll move from rice terraces to sacred temples, then to Lempuyang Temple and finally experience Uluwatu’s dramatic cliffs and the famous Kecak Fire Dance.
                </p>
                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10" />

                <p className="text-gray-500 italic text-lg">
                    This itinerary gives each experience its own space.
                </p>
            </section>

            {/* ROUTE SUMMARY */}
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
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 1</p>
                        <p className="text-gray-700 leading-relaxed">
                            Ubud rice terraces, scenic walks, coffee stops, and a relaxed introduction to Bali.
                        </p>
                    </div>

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 2</p>
                        <p className="text-gray-700 leading-relaxed">
                            Sacred temples, water rituals, and peaceful cultural stops across central Bali.
                        </p>
                    </div>

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 3</p>
                        <p className="text-gray-700 leading-relaxed">
                            Lempuyang Temple, sunrise views, mountain scenery, and a more photogenic day.
                        </p>
                    </div>

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 4</p>
                        <p className="text-gray-700 leading-relaxed">
                            Uluwatu Temple, cliffside ocean views, Kecak Fire Dance, and a spectacular sunset finale.
                        </p>
                    </div>
                </div>
            </section>

            {/* DAY 1: UBUD RICE TERRACES */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-2">
                        <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/bali/ubud-rice-terraces.jpg"
                                alt="Ubud rice terraces Bali"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Tegallalang Rice Terraces • Ubud
                        </p>
                    </div>

                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 1: Ubud Rice Terraces
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Morning</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Start in Ubud with a slow walk through the rice terraces, where Bali feels green, open, and deeply peaceful. The layered landscape, narrow paths, and early light make it the best way to begin the trip.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                            <span className="text-gray-400 mr-2">—</span>
                            After the terraces, spend time around Ubud’s cafés, craft shops, and relaxed lanes. This part of the day works well for lunch, coffee, and a slower cultural rhythm.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                            <span className="text-gray-400 mr-2">—</span>
                            End the day with a calm dinner and an early night, especially if you want to stay fresh for the temple-heavy days ahead. Ubud is the best place to ease into Bali without rushing.
                        </p>
                    </div>
                </div>
            </section>

            {/* DAY 2: SACRED TEMPLES */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 2: Sacred Temples
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />
                        <div>
                            <p className="text-gray-600 text-lg mb-4">
                                <span className="text-[#c6a75e] font-medium mr-1">Morning</span>
                                <span className="text-gray-400 mr-2">—</span>
                                Begin with a visit to one of Bali’s sacred temples, where water rituals, carved gateways, and still courtyards create a deeply spiritual atmosphere. This day is less about speed and more about observing traditions with respect.
                            </p>

                            <p className="text-gray-600 text-lg mb-4">
                                <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                                <span className="text-gray-400 mr-2">—</span>
                                Continue to another temple or cultural stop, especially places with lakes, gardens, or older stone structures. The goal is to keep the day peaceful and immersive rather than packed.
                            </p>

                            <p className="text-gray-600 text-lg">
                                <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                                <span className="text-gray-400 mr-2">—</span>
                                Return to your base for a quiet evening, or enjoy a traditional dinner in Ubud or nearby areas. After a temple-focused day, a relaxed end keeps the itinerary balanced.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/bali/bali-temple-area-green-surroundings.jpg"
                                    alt="Tirta Empul Temple"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="mt-5 text-xs tracking-[0.2em] uppercase text-gray-500 text-center">
                                Tirta Empul Temple
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* DAY 3: LEMPUYANG */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-2">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/bali/bali-gates-of-heaven-temple-reflection.jpg"
                                alt="Lempuyang Temple Bali itinerary"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover object-top"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Lempuyang Temple • East Bali
                        </p>
                    </div>

                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 3: Lempuyang Journey
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Morning</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Set out early for Lempuyang Temple, since this is the kind of day that rewards an early start. The drive itself is part of the experience, with mountain landscapes and glimpses of Bali’s eastern side along the way.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                            <span className="text-gray-400 mr-2">—</span>
                            At Lempuyang, the setting feels dramatic and memorable, especially if the weather is clear. Give yourself time to enjoy the surroundings instead of treating it as a quick photo stop.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mt-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Return from East Bali and enjoy a relaxed evening with mountain views or dinner in Ubud before your final day.
                        </p>

                    </div>
                </div>
            </section>

            {/* DAY 4: ULUWATU & KECak FIRE DANCE */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}
                    <div className="flex flex-col order-1 md:order-1">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/bali/bali-kecak-fire-dance-performance.jpg"
                                alt="Kecak Fire Dance Uluwatu Bali"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Kecak Fire Dance • Uluwatu
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="order-2">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 4: Uluwatu & Kecak Fire Dance
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Morning</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Enjoy a slower start after the previous day’s journey through East Bali.
                            Spend the morning exploring local cafés, boutique stores, or coastal viewpoints.
                            This relaxed pace allows you to soak in Bali’s atmosphere before the final cultural experience of the trip.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Head towards Uluwatu Temple, one of Bali’s most spectacular cliffside temples.
                            Perched high above the Indian Ocean, the temple offers dramatic coastal scenery,
                            sea breezes, and panoramic views that make it one of the island’s most iconic landmarks.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Stay for the famous Kecak Fire Dance performed at sunset.
                            As hundreds of performers chant rhythmically against the backdrop of the setting sun,
                            scenes from the Ramayana come to life through traditional storytelling and dance.
                            The combination of ocean views, Balinese culture, and golden-hour light creates an unforgettable finale to four days in Bali.
                        </p>
                    </div>

                </div>
            </section>

            {/* PHOTOGRAPHY NOTES */}
            <section className="text-center py-16 px-6">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                    Photography Tips
                </p>

                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-6">
                    Best Camera Spots From This Itinerary
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    Ubud rice terraces at sunrise, sacred temples in soft morning light, Lempuyang Temple during the early hours, and the Kecak Fire Dance at sunset in Uluwatu.
                </p>

                <Link
                    href="/gallery/bali"
                    className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                >
                    View Bali Photo Gallery
                </Link>
            </section>

            {/* BEST PHOTO TIMES */}
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
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 1 • Ubud Rice Terraces</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Morning is best for rice terraces because the light is softer and the weather is more comfortable.
                            Early hours also help avoid larger crowds.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 2 • Sacred Temples</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Visit Tirta Empul early in the morning when the temple is quieter and the light is softer around the water courtyards.
                            Midday can be brighter, but early hours usually feel more peaceful and photogenic.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 3 • Lempuyang</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Start as early as possible for better conditions and fewer visitors.
                            Clear skies make the mountain backdrop and temple setting much stronger.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 4 • Uluwatu & Kecak Dance</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Arrive before sunset for golden-hour cliff views at Uluwatu. Stay through the Kecak Fire Dance for dramatic silhouettes, fire effects, and ocean-backdrop photography.
                        </p>
                    </div>
                </div>
            </section>

            {/* PRACTICAL INFORMATION */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                        Practical Information
                    </p>

                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">
                        Plan Your Bali Trip Better
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Bali is easiest to enjoy when you balance travel time with slow moments.
                        Choose your base carefully, leave room for the roads, and split your trip between culture, scenery, and coast.
                    </p>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">When to Visit</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The dry season, generally from April to October, is often the most comfortable time for sightseeing,
                            photography, and beach days.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Where to Stay</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ubud works well for rice terraces and cultural stays, while Seminyak or Canggu are better for beaches,
                            shopping, and dining.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Getting Around</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Private drivers are the easiest way to cover longer routes in Bali.
                            Scooters are common, but only make sense if you are experienced and comfortable with local traffic.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">What to Eat</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Try nasi goreng, mie goreng, tempeh dishes, gado-gado, tropical fruits, Balinese coffee, and the many vegetarian-friendly cafés across Ubud and Canggu.
                        </p>
                    </div>
                </div>

                <div className="mt-12 space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Language</p>
                            <p className="text-gray-700 leading-relaxed">
                                Bahasa Indonesia is widely spoken, and English is common in tourist areas.
                            </p>
                        </div>

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Currency</p>
                            <p className="text-gray-700 leading-relaxed">
                                Bali uses the Indonesian Rupiah (IDR). Cards work in many places, but cash helps for small shops and entry fees.
                            </p>
                        </div>

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Travel Tip</p>
                            <p className="text-gray-700 leading-relaxed">
                                Start early for temples and long drives, and keep your afternoons flexible for traffic and slower sightseeing.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Navigation & Apps</p>
                            <p className="text-gray-700 leading-relaxed">
                                Google Maps is useful for planning, while a local driver or ride-hailing app makes point-to-point travel easier across Bali.
                            </p>
                        </div>

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Vegetarian Tip</p>
                            <p className="text-gray-700 leading-relaxed">
                                Bali is very vegetarian-friendly, especially in Ubud, Canggu, and Seminyak, where cafés and healthy eateries are easy to find.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 py-20">
                <h2 className="text-xl tracking-[0.3em] uppercase text-center mb-4">
                    Frequently Asked Questions
                </h2>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10"></div>

                <div className="space-y-8 text-gray-700">
                    <div>
                        <h3 className="font-medium text-lg mb-2">
                            Is 4 days enough for Bali?
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Yes, 4 days is enough to explore Ubud, sacred temples, Lempuyang Temple, and Uluwatu’s famous Kecak Fire Dance at a comfortable pace.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-2">
                            What is the best time to visit Bali?
                        </h3>
                        <p className="text-sm leading-relaxed">
                            April to October is usually best for clear weather, outdoor sightseeing, and beach time.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-2">
                            Is Bali expensive for tourists?
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Bali can fit many budgets, with affordable food, transport, and stays available alongside luxury experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL REFLECTION */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <blockquote className="italic text-2xl md:text-3xl text-gray-800 mb-8 font-light leading-relaxed">
                        Four days in Bali showed me how easily the island moves between stillness and motion.
                        From rice terraces and sacred temples to dramatic cliffs and traditional performances, every day revealed a different side of Bali.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />

                    <section className="text-center py-12 px-6">
                        <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                            Continue exploring
                        </p>
                        <Link
                            href="/blog"
                            className="inline-block border border-[#c6a75e] px-8 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition-all duration-300"
                        >
                            Explore more travel itineraries
                        </Link>
                    </section>

                    <SocialSection title="Bali 4-Day Itinerary | The Nomadic Story" />
                </div>
            </section>
        </main>
    );
}