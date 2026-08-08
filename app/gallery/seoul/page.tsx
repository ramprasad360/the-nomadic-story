"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function SeoulGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const images = [
        // BUKCHON HANOK VILLAGE
        "/images/seoul/seoul-bukchon-hanok-alley.jpg",
        "/images/seoul/seoul-bukchon-hanok-streets-shop.jpg",
        "/images/seoul/seoul-bukchon-hanok-street-view.jpg",
        "/images/seoul/seoul-bukchon-hanok-courtyard.jpg",
        "/images/seoul/seoul-bukchon-hanok-rooftops.jpg",
        "/images/seoul/seoul-hanok-alley-sunlight.jpg",
        "/images/seoul/seoul-hanok-street-sunset.jpg",

        // GYEONGBOKGUNG PALACE
        "/images/seoul/seoul-gyeongbokgung-palace.jpg",
        "/images/seoul/seoul-gyeongbokgung-palace-courtyard.jpg",
        "/images/seoul/seoul-gyeongbokgung-palace-gate.jpg",
        "/images/seoul/seoul-gyeongbokgung-palace-interior.jpg",
        "/images/seoul/seoul-gyeongbokgung-palace-roof-detail.jpg",

        // GWANGHWAMUN & GYEONGHOERU
        "/images/seoul/seoul-gyeonghoeru-pavilion.jpg",

        // HANBOK & CULTURE
        "/images/seoul/seoul-hanbok-at-gwanghwamun.jpg",

        // HANOK DETAILS
        "/images/seoul/seoul-hanok-entrance.jpg",
        "/images/seoul/seoul-hanok-gate.jpg",
        "/images/seoul/seoul-hanok-interior-doorway.jpg",
        "/images/seoul/seoul-hanok-kitchen-interior.jpg",
        "/images/seoul/seoul-hanok-pottery-courtyard.jpg",
        "/images/seoul/seoul-hanok-rooftop.jpg",
        "/images/seoul/seoul-hanok-stone-gate.jpg",
        "/images/seoul/seoul-hanok-traditional-house-exterior.jpg",
        "/images/seoul/seoul-hanok-traditional-interior.jpg",
        "/images/seoul/seoul-hanok-traditional-room.jpg",

        // TRADITIONAL KOREAN DETAILS
        "/images/seoul/seoul-hand-sculpture.jpg",
        "/images/seoul/seoul-traditional-korean-jars.jpg",
        "/images/seoul/seoul-traditional-korean-well.jpg",
        "/images/seoul/seoul-korean-traditional-courtyard.jpg",

        // SEOUL CITY / STREET LIFE
        "/images/seoul/seoul-antiquariato-milano.jpg",
        "/images/seoul/seoul-scooter-hanok-street.jpg",
        "/images/seoul/seoul-love-locks.jpg",
        "/images/seoul/seoul-pink-building.jpg",

        // MODERN SEOUL
        "/images/seoul/seoul-starfield-library.jpg",

        // WINTER SEOUL
        "/images/seoul/seoul-snowy-hanok-stairs.jpg",
        "/images/seoul/seoul-snowy-park.jpg",
        "/images/seoul/seoul-winter-forest-sculpture.jpg",
        "/images/seoul/seoul-winter-hanok-alley.jpg",
        "/images/seoul/seoul-winter-hanok-sunset.jpg",
        "/images/seoul/seoul-winter-hanok-village-road.jpg",
        "/images/seoul/seoul-winter-mountain-village.jpg",
        "/images/seoul/seoul-winter-pine-forest.jpg",
        "/images/seoul/seoul-winter-shopping-alley.jpg",
        "/images/seoul/seoul-winter-wall-mural.jpg",
    ];

    const handlePrev = useCallback(() => {
        setSelectedIndex((prev) =>
            prev === null
                ? null
                : prev === 0
                    ? images.length - 1
                    : prev - 1
        );
    }, [images.length]);

    const handleNext = useCallback(() => {
        setSelectedIndex((prev) =>
            prev === null
                ? null
                : prev === images.length - 1
                    ? 0
                    : prev + 1
        );
    }, [images.length]);

    /* SWIPE */
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;

        const distance = touchStart - touchEnd;

        if (distance > minSwipeDistance) {
            handleNext();
        } else if (distance < -minSwipeDistance) {
            handlePrev();
        }
    };

    /* KEYBOARD */
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setSelectedIndex(null);
        };

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, handleNext, handlePrev]);

    /* SCROLL LOCK */
    useEffect(() => {
        document.body.style.overflow =
            selectedIndex !== null ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex]);

    return (
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">

            {/* HEADER */}

            <div className="text-center mb-16">
                <h1 className="text-2xl md:text-5xl tracking-[0.15em] md:tracking-[0.2em] uppercase font-light">
                    Seoul
                </h1>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6 mb-6" />

                <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
                    A visual archive of Seoul’s rhythm, traditions, and quiet moments.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

                {images.map((src, index) => (

                    <div
                        key={`${src}-${index}`}
                        onClick={() => setSelectedIndex(index)}
                        className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
                    >

                        <Image
                            src={src}
                            alt={`Seoul travel photograph ${index + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition duration-500"
                            quality={85}
                        />

                    </div>

                ))}

            </div>

            {/* LIGHTBOX */}
            {selectedIndex !== null && (

                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >

                    {/* CLOSE */}
                    <button
                        aria-label="Close image preview"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(null);
                        }}
                        className="absolute top-6 right-6 text-white z-50"
                    >
                        <X size={28} />
                    </button>

                    {/* LEFT */}
                    <button
                        aria-label="Previous image"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                        className="absolute left-4 text-white z-50"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    {/* IMAGE */}
                    <div
                        className="relative w-[95%] md:w-[80%] h-[75%] md:h-[85%]"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >

                        <Image
                            src={images[selectedIndex]}
                            alt={`Seoul travel photograph ${selectedIndex + 1
                                }`}
                            fill
                            sizes="95vw"
                            className="object-contain"
                            quality={90}
                            priority
                        />

                    </div>

                    {/* RIGHT */}
                    <button
                        aria-label="Next image"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 text-white z-50"
                    >
                        <ChevronRight size={40} />
                    </button>

                    {/* COUNTER */}
                    <div className="absolute bottom-6 text-white text-xs">
                        {selectedIndex + 1} / {images.length}
                    </div>

                </div>
            )}

        </main>
    );
}
