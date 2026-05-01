"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BaliGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const images = [
        "/images/bali/bali-buddha-statue-garden.jpg",
        "/images/bali/bali-cultural-dance-performance-stage.jpg",
        "/images/bali/bali-gates-of-heaven-temple-reflection.jpg",
        "/images/bali/bali-hill-viewpoint-greenery.jpg",
        "/images/bali/bali-jungle-view-scenic.jpg",
        "/images/bali/bali-kecak-fire-dance-performance.jpg",
        "/images/bali/bali-monument-cultural-statue.jpg",
        "/images/bali/bali-rice-field-landscape.jpg",
        "/images/bali/bali-river-valley-view.jpg",
        "/images/bali/bali-statue-architecture-blue-sky.jpg",
        "/images/bali/bali-temple-area-green-surroundings.jpg",
        "/images/bali/bali-temple-complex-wide-view.jpg",
        "/images/bali/bali-temple-courtyard-top-view.jpg",
        "/images/bali/bali-temple-entrance-gate-carving.jpg",
        "/images/bali/bali-temple-structure-landscape.jpg",
        "/images/bali/bali-traditional-temple-entrance.jpg",
        "/images/bali/bali-water-temple-tirta-empul.jpg",
        "/images/bali/hanuman-character-ramayana-performance-bali.jpg",
        "/images/bali/lempuyang-temple-stairs-bali.jpg",
        "/images/bali/ravana-character-ramayana-performance-bali.jpg",
        "/images/bali/ubud-rice-terraces.jpg",
        "/images/bali/tirtta_ganga_statue.jpg",
    ];

    const handlePrev = useCallback(() => {
        setSelectedIndex((prev) =>
            prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
        );
    }, [images.length]);

    const handleNext = useCallback(() => {
        setSelectedIndex((prev) =>
            prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
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
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        if (distance > minSwipeDistance) handleNext();
        else if (distance < -minSwipeDistance) handlePrev();
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
                    Bali
                </h1>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6 mb-6" />

                <p className="text-gray-500 max-w-xl mx-auto">
                    A visual archive of Bali’s temples, jungles, beaches, and soul.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {images.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
                    >
                        <Image
                            src={src}
                            alt={`Bali ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition"
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
                            alt="Preview"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* RIGHT */}
                    <button
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