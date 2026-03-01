import Image from "next/image";
import SocialSection from "@/app/components/SocialSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/hong-kong",
    },
    title: "Hong Kong Travel Guide",
    description:
        "A curated Hong Kong travel guide covering culture, street photography, skyline views, and essential travel tips.",
    openGraph: {
        title: "Hong Kong Travel Guide | The Nomadic Story",
        description:
            "Explore Hong Kong through culture, architecture, and street photography.",
        images: [
            {
                url: "/images/hong_kong_1.jpg",
                width: 1200,
                height: 630,
                alt: "Hong Kong Skyline",
            },
        ],
    },
};

export default function HongKongPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800 font-[Taviraj,Georgia,Times,serif]">

            {/* HERO SECTION */}
            <section className="relative w-full h-[75vh]">
                <Image
                    src="/images/hong_kong_1.jpg"
                    alt="Hong Kong Street"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
                    <h1 className="text-4xl md:text-6xl tracking-widest uppercase mb-4">
                        Hong Kong
                    </h1>
                    <p className="text-lg md:text-xl tracking-wide">
                        Where Neon Lights Meet Timeless Tradition
                    </p>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <p className="text-lg leading-relaxed">
                    Hong Kong is a city of contrasts — towering glass skyscrapers rising above
                    century-old temples, neon-lit streets blending with traditional markets,
                    and a fast-paced urban rhythm softened by coastal views and mountain peaks.
                    Whether you are a street photographer, a food lover, or an urban explorer,
                    Hong Kong offers an endlessly dynamic visual story.
                </p>
            </section>

            {/* QUICK FACTS */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl uppercase tracking-widest mb-4">Quick Facts</h2>
                        <ul className="space-y-2 text-sm tracking-wide">
                            <li><strong>Country:</strong> China (SAR)</li>
                            <li><strong>Currency:</strong> HKD</li>
                            <li><strong>Languages:</strong> Cantonese, English</li>
                            <li><strong>Best Time:</strong> Oct – Dec</li>
                            <li><strong>Ideal Stay:</strong> 3–4 Days</li>
                            <li><strong>Transport:</strong> MTR, Star Ferry</li>
                        </ul>
                    </div>
                    <div className="text-sm leading-relaxed">
                        Hong Kong blends Eastern heritage with global modernity.
                        Efficient public transport, world-class food, and cinematic
                        street scenes make it one of Asia’s most compelling destinations.
                    </div>
                </div>
            </section>

            {/* PHOTO GALLERY */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-2xl uppercase tracking-widest text-center mb-10">
                    Street Moments
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative aspect-[4/5]">
                        <Image
                            src="/images/hong_kong_1.jpg"
                            alt="Hong Kong Cafe"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="relative aspect-[4/5]">
                        <Image
                            src="/images/hong_kong_2.jpg"
                            alt="Hong Kong Street Sign"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="relative aspect-[4/5]">
                        <Image
                            src="/images/hong_kong_3.jpg"
                            alt="Hong Kong Market"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* STREET PHOTOGRAPHY */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl uppercase tracking-widest mb-6">
                        Street Photography in Hong Kong
                    </h2>
                    <p className="text-lg leading-relaxed">
                        The city’s vertical architecture, layered signage, and constant motion
                        create powerful compositions. Evening light enhances reflections,
                        especially after rain. Markets, trams, and neon-lit cafes offer endless
                        storytelling opportunities.
                    </p>
                </div>
            </section>

            {/* TRAVEL TIPS */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl uppercase tracking-widest mb-6">
                    Travel Tips
                </h2>

                <ul className="space-y-3 text-sm tracking-wide mb-12">
                    <li>• Get an Octopus Card for transport convenience</li>
                    <li>• Explore Central and Mong Kok by foot</li>
                    <li>• Visit Victoria Peak before sunset</li>
                    <li>• Carry light rain protection for sudden showers</li>
                </ul>

                {/* ✅ Clean Combined Social Section */}
                <SocialSection title="Hong Kong Travel Guide | The Nomadic Story" />
            </section>

        </main>
    );
}