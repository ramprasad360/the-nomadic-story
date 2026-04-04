import Image from "next/image";
import Link from "next/link";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {

    alternates: {
        canonical: "https://thenomadicstory.com/blog/hong-kong-4-day-itinerary",
    },

    title: "Hong Kong 4 Day Itinerary (2026 Guide) | The Nomadic Story",

    description:
        "Plan the perfect Hong Kong 4 day itinerary with Victoria Harbour, Lantau Island, Disneyland, markets, and travel tips for first-time visitors.",

    keywords: [
        "Hong Kong 4 day itinerary",
        "Hong Kong itinerary 4 days",
        "4 days in Hong Kong",
        "Hong Kong travel guide",
        "Lantau Island itinerary",
        "Hong Kong Disneyland plan",
    ],

    authors: [{ name: "Ram", url: "https://thenomadicstory.com/about" }],

    openGraph: {
        title: "Hong Kong 4-Day Itinerary | The Nomadic Story",
        description:
            "Complete 4-day Hong Kong travel guide with skyline views, Lantau Island, Disneyland, and local markets.",
        siteName: "The Nomadic Story",
        type: "article",
        url: "https://thenomadicstory.com/blog/hong-kong-4-day-itinerary",
        images: [
            {
                url: "/images/hong-kong/hong-kong-avenue-of-stars.jpg",
                width: 1200,
                height: 630,
                alt: "Hong Kong skyline Victoria Harbour itinerary",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Hong Kong 4-Day Itinerary | The Nomadic Story",
        description:
            "Explore Hong Kong in 4 days: skyline, Lantau Island, Disneyland, and markets.",
        images: ["/images/hong-kong/hong-kong-avenue-of-stars.jpg"],
    },
};

export default function HongKong4DayItinerary() {
    const day2Gallery = [
        {
            src: "/images/hong-kong/hong-kong-avenue-of-stars.jpg",
            alt: "Hong Kong Avenue of Stars skyline view",
            caption: "Avenue of Stars • Victoria Harbour",
        },
        {
            src: "/images/hong-kong/ferris-wheel-waterfront.jpg",
            alt: "Hong Kong ferris wheel waterfront",
            caption: "Observation Wheel",
        },
        {
            src: "/images/hong-kong/temple-street-vendor.jpg",
            alt: "Temple Street Night Market vendor",
            caption: "Temple Street Night Market",
        },
    ];

    return (
        <main>


            {/* ================= SEO STRUCTURED DATA ================= */}

            {/* Article Schema */}
            <Script
                id="article-schema"
                strategy="afterInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "Hong Kong 4 Day Itinerary",
                        description:
                            "Complete 4-day Hong Kong itinerary including Victoria Peak, Lantau Island, Disneyland and markets.",
                        author: {
                            "@type": "Person",
                            name: "Ram",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "The Nomadic Story",
                        },
                        image:
                            "https://thenomadicstory.com/images/hong-kong/hong-kong-avenue-of-stars.jpg",
                        mainEntityOfPage:
                            "https://thenomadicstory.com/blog/hong-kong-4-day-itinerary",
                    }),
                }}
            />

            {/* FAQ Schema */}
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
                                name: "Is 4 days enough for Hong Kong?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, 4 days is enough to explore Victoria Harbour, Lantau Island, Disneyland, and local markets comfortably.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the best Hong Kong itinerary?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A 4-day itinerary covering Victoria Peak, Lantau Island, Disneyland, and Kowloon markets is ideal.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Hong Kong expensive for tourists?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Hong Kong can be expensive, but using public transport and local food makes it affordable.",
                                },
                            },
                        ],
                    }),
                }}
            />


            {/* HERO SECTION */}
            <section className="relative w-full h-[100vh] overflow-hidden">

                <Image
                    src="/images/hong-kong/hong-kong-avenue-of-stars.jpg"
                    alt="Hong Kong skyline Victoria Harbour 4 day itinerary"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">

                    <p className="text-xs tracking-[0.3em] uppercase mb-3">
                        The Nomadic Story
                    </p>

                    <h1 className="text-3xl md:text-6xl font-light tracking-wide mb-3">
                        Hong Kong 4 Day Itinerary: Complete Travel Guide
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mb-6" />

                    <p className="text-base md:text-2xl tracking-widest">
                        4 Days • Skyline • Markets • Disneyland
                    </p>

                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    This Hong Kong 4 day itinerary surprised me in ways I didn’t expect  — not just the skyline,
                    but the streets, the rhythm, and the contrast between chaos and calm.
                    Over four days, I explored both its iconic views and its quieter corners.
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
                            Sheung Wan streets, Cat Street, Man Mo Temple, and sunset at Victoria Peak.
                        </p>
                    </div>

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 2</p>
                        <p className="text-gray-700 leading-relaxed">
                            Avenue of Stars, Observation Wheel, Temple Street, and Ladies Market in Mong Kok.
                        </p>
                    </div>

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 3</p>
                        <p className="text-gray-700 leading-relaxed">
                            Lantau Island, Ngong Ping cable car, Tian Tan Buddha, and peaceful monastery views.
                        </p>
                    </div>

                    <div className="bg-[#f8f6f1] rounded-2xl p-6">
                        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">Day 4</p>
                        <p className="text-gray-700 leading-relaxed">
                            Full day at Hong Kong Disneyland with evening fireworks and a relaxed final day.
                        </p>
                    </div>
                </div>
            </section>

            {/* DAY 1: SHEUNG WAN & CENTRAL */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-2">
                        <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hong-kong/sheung-wan-dried-seafood-street-hong-kong.jpg"
                                alt="Meat Market Street Sheung Wan local vendors"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Meat Market Street • Sheung Wan
                        </p>
                    </div>

                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 1: Sheung Wan Streets
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Morning</span>
                            <span className="text-gray-400 mr-2">—</span>
                            I started the day in Sheung Wan, walking through Meat Market Street where the city feels raw and unfiltered. Wet markets, dried seafood shops, and local vendors create an atmosphere that is chaotic but incredibly authentic. A short walk leads to Cat Street, where antique shops and vintage pieces slow things down — it’s the kind of place where you explore without rushing.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                            <span className="text-gray-400 mr-2">—</span>
                            From the busy streets, stepping into Man Mo Temple felt like entering another world. The hanging incense coils, dim lighting, and calm atmosphere create a quiet contrast to the city outside.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                            <span className="text-gray-400 mr-2">—</span>
                            The day ends at Victoria Peak. Taking the tram up is part of the experience, but the real moment is at the top — seeing the entire skyline open up in front of you. It’s especially enjoyable if you’re traveling with family, and visiting around sunset makes it even more memorable.
                        </p>
                    </div>
                </div>
            </section>

            {/* DAY 2: KOWLOON & HARBOUR */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* TEXT */}
                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 2: Kowloon Nights
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />
                        <div>
                            <p className="text-gray-600 text-lg mb-4">
                                <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                                <span className="text-gray-400 mr-2">—</span>
                                I started at the Avenue of Stars, walking along the harbour with one of the best views of the Hong Kong skyline. It’s the kind of place where you slow down, take photos, and just observe the city from a distance. The Observation Wheel nearby adds a calm and relaxed perspective of the harbour.
                            </p>

                            <p className="text-gray-600 text-lg mb-4">
                                <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                                <span className="text-gray-400 mr-2">—</span>
                                As the sun sets, Temple Street Night Market becomes one of the most vibrant places in Hong Kong. This is where street lovers will enjoy the most — food stalls, neon lights, and constant movement. It’s not just about what you eat, but the overall atmosphere that makes it memorable.
                            </p>

                            <p className="text-gray-600 text-lg">
                                <span className="text-[#c6a75e] font-medium mr-1">Late Night</span>
                                <span className="text-gray-400 mr-2">—</span>
                                Later, I explored Ladies Market in Mong Kok. The crowd, lights, and energy make it feel alive. It’s a great place for street photography, casual shopping, and just observing how the city moves at night.
                            </p>
                        </div>
                    </div>

                    {/* IMAGES */}
                    <div>
                        <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={day2Gallery[0].src}
                                alt={day2Gallery[0].alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>

                        <p className="mt-3 text-xs tracking-[0.2em] text-gray-400 uppercase text-center">
                            {day2Gallery[0].caption}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {day2Gallery.slice(1).map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="w-full rounded-xl overflow-hidden">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    <p className="mt-3 text-xs tracking-[0.2em] text-gray-400 uppercase text-center">
                                        {item.caption}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* DAY 3: LANTAU ISLAND */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-2">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hong-kong/tian-tan-buddha.jpg"
                                alt="Tian Tan Buddha Lantau Island Hong Kong itinerary"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover object-top"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Tian Tan Buddha • Lantau Island
                        </p>
                    </div>

                    <div className="order-2 md:order-1">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 3: Lantau Escape
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Morning</span>
                            <span className="text-gray-400 mr-2">—</span>
                            The cable car ride to Lantau Island was one of the best experiences of the entire trip. As the city slowly fades behind you, the view opens up to mountains, greenery, and the sea — it feels like a complete escape from the busy streets of Hong Kong.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">Afternoon</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Climbing up to the Tian Tan Buddha takes effort, but the experience is worth it. The atmosphere here is calm and peaceful, completely different from the city. Exploring the monastery surroundings adds to the feeling of slowing down and disconnecting.
                        </p>
                    </div>
                </div>
            </section>

            {/* DAY 4: DISNEYLAND */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-1 md:order-1">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hong-kong/disneyland-castle.jpg"
                                alt="Hong Kong Disneyland castle at night"
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                quality={90}
                            />
                        </div>

                        <p className="mt-4 text-xs tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                            Hong Kong Disneyland
                        </p>
                    </div>

                    <div className="order-2">
                        <h2 className="font-light text-3xl md:text-4xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                            Day 4: Hong Kong Disneyland
                        </h2>

                        <div className="w-16 h-[2px] bg-[#c6a75e] mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="text-[#c6a75e] font-medium mr-1">Full Day</span>
                            <span className="text-gray-400 mr-2">—</span>
                            Saving Disneyland for the last day made the entire trip feel well balanced. Spending a full day here means you don’t have to rush — you can enjoy the rides, shows, and themed areas at your own pace.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            <span className="text-[#c6a75e] font-medium mr-1">Evening</span>
                            <span className="text-gray-400 mr-2">—</span>
                            The day ends with fireworks, which is a perfect way to wrap up the trip. After experiencing the city, local streets, and nature, this feels like a fun and light conclusion.
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
                    Meat Market Street at sunrise, Victoria Peak at blue hour, Temple Street after dark,
                    Tian Tan Buddha during the cable car ride, and Disneyland at castle lights.
                </p>

                <Link
                    href="/gallery/hong-kong"
                    className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                >
                    View Hong Kong Photo Gallery
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
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 1 • Sheung Wan & Victoria Peak</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Morning is best for Meat Market Street and Cat Street when the streets feel active but not too crowded.
                            For Victoria Peak, go around sunset or blue hour for the skyline and city lights.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 2 • Kowloon & Harbour</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Late afternoon works best for the Avenue of Stars and Observation Wheel.
                            Stay through blue hour for Temple Street and Ladies Market when neon lights and street energy look strongest.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 3 • Tian Tan Buddha</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Early morning is ideal for the cable car and Buddha views because the light is softer and the crowds are lighter.
                            Clearer skies usually make the mountain and sea views more rewarding.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Day 4 • Disneyland</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Arrive early for the main attractions and stay until evening for the castle lights and fireworks.
                            Sunset and night are the best times for the most atmospheric photos.
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
                        Plan Your Hong Kong Trip Better
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Hong Kong is easy to love, but a few smart choices can make your trip smoother.
                        Pick the right season, stay in the right neighborhood, and leave room for both
                        skyline views and street-level discoveries.
                    </p>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">When to Visit</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The best time to visit Hong Kong is generally from October to March, when the weather is cooler
                            and more comfortable for walking, sightseeing, and photography.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Where to Stay</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Central and Sheung Wan are ideal for a stylish, well-connected stay, while Tsim Sha Tsui works
                            well if you want harbour views, shopping, and easy access to Kowloon.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">Getting Around</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The MTR is fast, clean, and reliable, and it is the easiest way to move between major areas.
                            Trams, ferries, and buses add a more local layer to the experience.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-[#c6a75e] font-medium text-lg mb-3">What to Eat</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Try Hong Kong-style milk tea, egg tarts, dim sum, roast meats, curry fish balls, and noodle bowls
                            from street markets and neighborhood eateries.
                        </p>
                    </div>

                </div>

                {/*<div className="mt-12 grid md:grid-cols-3 gap-6">*/}
                <div className="mt-12 space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Language</p>
                            <p className="text-gray-700 leading-relaxed">
                                Cantonese is widely spoken, and English is commonly understood in tourist areas.
                            </p>
                        </div>

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Currency</p>
                            <p className="text-gray-700 leading-relaxed">
                                Hong Kong uses the Hong Kong Dollar (HKD). Cards work in most places, but cash is useful for markets.
                            </p>
                        </div>

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Travel Tip</p>
                            <p className="text-gray-700 leading-relaxed">
                                Start early for better light, fewer crowds, and a calmer experience at popular viewpoints and markets.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Navigation & Apps</p>
                            <p className="text-gray-700 leading-relaxed">
                                Google Maps works seamlessly for walking and transit. MTR Mobile helps with train routes,
                                and using an Octopus card makes transport and small payments effortless across the city.
                            </p>
                        </div>

                        <div className="bg-[#f8f6f1] rounded-2xl p-6 text-center">
                            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-2">Vegetarian Tip</p>
                            <p className="text-gray-700 leading-relaxed">
                                Vegetarian options are limited in street markets, but Central and Tsim Sha Tsui have great Indian and vegan restaurants.
                            </p>
                        </div>
                    </div>
                </div>

            </section>


            <section className="max-w-3xl mx-auto px-6 py-20">
                <h2 className="text-xl tracking-[0.3em] uppercase text-center mb-4">
                    Frequently Asked Questions
                </h2>

                {/* Underline */}
                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-10"></div>

                <div className="space-y-8 text-gray-700">
                    <div>
                        <h3 className="font-medium text-lg mb-2">
                            Is 4 days enough for Hong Kong?
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Yes, 4 days is perfect to explore Hong Kong’s skyline, markets,
                            Lantau Island, and Disneyland at a relaxed pace.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-2">
                            What is the best time to visit Hong Kong?
                        </h3>
                        <p className="text-sm leading-relaxed">
                            October to March offers pleasant weather, ideal for sightseeing and outdoor experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-2">
                            Is Hong Kong expensive for tourists?
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Hong Kong can be expensive, but budget options for food, transport, and attractions are widely available.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL REFLECTION */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <blockquote className="italic text-2xl md:text-3xl text-gray-800 mb-8 font-light leading-relaxed">
                        Four days taught me Hong Kong rewards the curious walker.
                        Every alley hides a story, every peak reveals a new angle.
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

                    <SocialSection title="Hong Kong 4-Day Itinerary | The Nomadic Story" />
                </div>
            </section>


        </main>
    );
}