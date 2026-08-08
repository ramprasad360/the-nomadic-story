import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SocialSection from "@/app/components/SocialSection";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://thenomadicstory.com/gallery/seoul",
    },

    title: "Seoul Photography | The Nomadic Story",

    description:
        "A visual collection of Seoul through palace courtyards, traditional hanok neighborhoods, historic streets, modern architecture, and quiet moments across the city.",

    keywords: [
        "Seoul photography",
        "Seoul travel photography",
        "Seoul street photography",
        "Seoul photography gallery",
        "Gyeongbokgung Palace photography",
        "Bukchon Hanok Village photography",
        "Seoul travel photos",
        "The Nomadic Story Seoul",
    ],

    authors: [
        {
            name: "Ram",
            url: "https://thenomadicstory.com/about",
        },
    ],

    openGraph: {
        title: "Seoul Photography | The Nomadic Story",

        description:
            "A visual journey through Seoul — from palace courtyards and hanok rooftops to modern architecture and quiet city streets.",

        siteName: "The Nomadic Story",

        type: "website",

        url: "https://thenomadicstory.com/gallery/seoul",

        images: [
            {
                url: "/images/seoul/seoul-gwanghwamun-gate.jpg",
                width: 1200,
                height: 630,
                alt: "Gwanghwamun Gate in Seoul South Korea",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Seoul Photography | The Nomadic Story",

        description:
            "A visual journey through Seoul's historic architecture, traditional neighborhoods, and modern city life.",

        images: [
            "/images/seoul/seoul-gwanghwamun-gate.jpg",
        ],
    },
};

const photos = [
    {
        src: "/images/seoul/seoul-gwanghwamun-gate.jpg",
        title: "Gwanghwamun Gate",
        location: "Seoul",
        alt: "Gwanghwamun Gate in Seoul South Korea",
        aspect: "aspect-[16/10]",
    },

    {
        src: "/images/seoul/seoul-gyeongbokgung-palace-courtyard.jpg",
        title: "Gyeongbokgung Palace",
        location: "Seoul",
        alt: "Gyeongbokgung Palace courtyard in Seoul South Korea",
        aspect: "aspect-[4/5]",
    },

    {
        src: "/images/seoul/seoul-gyeonghoeru-pavilion.jpg",
        title: "Gyeonghoeru Pavilion",
        location: "Gyeongbokgung Palace",
        alt: "Gyeonghoeru Pavilion reflected in the palace pond in Seoul",
        aspect: "aspect-[4/5]",
    },

    {
        src: "/images/seoul/seoul-bukchon-hanok-alley.jpg",
        title: "Bukchon Hanok Alley",
        location: "Bukchon Hanok Village",
        alt: "Traditional hanok alley in Bukchon Seoul South Korea",
        aspect: "aspect-[4/5]",
    },

    {
        src: "/images/seoul/seoul-bukchon-hanok-rooftops.jpg",
        title: "Hanok Rooftops",
        location: "Bukchon Hanok Village",
        alt: "Traditional hanok rooftops in Bukchon Seoul",
        aspect: "aspect-[4/5]",
    },

    {
        src: "/images/seoul/seoul-starfield-library.jpg",
        title: "Starfield Library",
        location: "Seoul",
        alt: "Starfield Library interior in Seoul South Korea",
        aspect: "aspect-[4/5]",
    },

    {
        src: "/images/seoul/seoul-traditional-street-architecture.jpg",
        title: "Traditional Streets",
        location: "Seoul",
        alt: "Traditional hanok street architecture in Seoul",
        aspect: "aspect-[4/5]",
    },

    {
        src: "/images/seoul/seoul-love-locks.jpg",
        title: "Love Locks",
        location: "Seoul",
        alt: "Love locks overlooking Seoul",
        aspect: "aspect-[4/5]",
    },
];

export default function SeoulGalleryPage() {
    return (
        <main className="bg-white">

            {/* HERO / PAGE HEADER */}

            <section className="relative overflow-hidden">

                <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">

                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
                        The Nomadic Story
                    </p>

                    <h1 className="font-light text-4xl md:text-6xl tracking-[0.15em] uppercase text-gray-900 mb-6">
                        Seoul
                    </h1>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-8" />

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        A collection of moments from Seoul — where palace walls,
                        quiet hanok streets, modern architecture, and everyday life
                        exist side by side.
                    </p>

                </div>

            </section>


            {/* PHOTO COLLECTION */}

            <section className="max-w-6xl mx-auto px-6 pb-24">

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

                    {photos.map((photo, index) => (
                        <figure
                            key={photo.src}
                            className="mb-6 break-inside-avoid group"
                        >

                            <div
                                className={`relative w-full ${photo.aspect} overflow-hidden rounded-xl bg-gray-100`}
                            >

                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    quality={90}
                                    priority={index < 2}
                                />

                            </div>

                            <figcaption className="pt-4 px-1">

                                <h2 className="text-sm tracking-[0.15em] uppercase text-gray-800">
                                    {photo.title}
                                </h2>

                                <p className="mt-1 text-xs tracking-[0.15em] uppercase text-gray-400">
                                    {photo.location}
                                </p>

                            </figcaption>

                        </figure>
                    ))}

                </div>

            </section>


            {/* CLOSING */}

            <section className="py-24 px-6 text-center border-t border-gray-100">

                <div className="max-w-3xl mx-auto">

                    <blockquote className="italic text-2xl md:text-3xl text-gray-800 mb-8 font-light leading-relaxed">
                        Seoul is a city of layers — the old never quite disappears,
                        it simply finds its place within the new.
                    </blockquote>

                    <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-12" />

                    <Link
                        href="/seoul"
                        className="inline-block border border-[#c6a75e] px-6 py-3 text-xs tracking-[0.25em] uppercase text-[#c6a75e] hover:bg-[#c6a75e] hover:text-white transition duration-500"
                    >
                        Back to Seoul
                    </Link>

                </div>

            </section>


            {/* SOCIAL */}

            <section className="py-16 px-6 text-center">

                <div className="max-w-3xl mx-auto">

                    <SocialSection title="Seoul Photography | The Nomadic Story" />

                </div>

            </section>

        </main>
    );
}