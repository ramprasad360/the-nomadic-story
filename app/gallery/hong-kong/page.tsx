"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HongKongGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const images = [
        "/images/hong-kong/bruce-lee-statue-victoria-harbour-hong-kong.jpg",
        "/images/hong-kong/harbor-aerial-view-city-skyline.png",
        "/images/hong-kong/hong-kong-city-skyline-view.png",
        "/images/hong-kong/harbour-boat-seascape.jpg",
        "/images/hong-kong/mountain-cable-car-view.png",
        "/images/hong-kong/ferris-wheel-waterfront.jpg",
        "/images/hong-kong/tian-tan-buddha-stairs-view.png",
        "/images/hong-kong/buddha-statue-garden-path.jpg",
        "/images/hong-kong/temple-arch-gate-entrance.jpg",
        "/images/hong-kong/temple-courtyard-main-hall.jpg",
        "/images/hong-kong/temple-entrance-traditional-architecture.jpg",
        "/images/hong-kong/temple-roof-detail-architecture.jpg",
        "/images/hong-kong/buddhist-temple-interior-golden-statues.jpg",
        "/images/hong-kong/lantern-temple.jpg",
        "/images/hong-kong/hong-kong-blue-tram-city-street.jpg",
        "/images/hong-kong/hong-kong-orange-tram-street.jpg",
        "/images/hong-kong/hong-kong-street-traffic-urban-canyon.png",
        "/images/hong-kong/hong-kong-street-coffee-shop.jpg",
        "/images/hong-kong/hong-kong-sign-street-market.jpg",
        "/images/hong-kong/street-market-shopping-crowd.jpg",
        "/images/hong-kong/hong-kong-local-market-shop.png",
        "/images/hong-kong/hong-kong-old-man-street-photography.jpg",
        "/images/hong-kong/hong-kong-night-street-bus.jpg",
        "/images/hong-kong/neon-sign-night-city.jpg",
        "/images/hong-kong/night-market.jpg",
        "/images/hong-kong/hong-kong-car.jpg",
        "/images/hong-kong/victoria-harbour-statue-black-white.png",
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
                    Hong Kong
                </h1>

                <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mt-6 mb-6" />

                <p className="text-gray-500 max-w-xl mx-auto">
                    A visual archive of the city’s rhythm, contrasts, and quiet moments.
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
                            alt={`Hong Kong ${index + 1}`}
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