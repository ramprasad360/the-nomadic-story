"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ImageItem {
    src: string;
    alt: string;
}

export default function GallerySlider({ images }: { images: ImageItem[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const touchStartX = useRef(0);

    /* ================= NAVIGATION ================= */

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % images.length : prev
        );
    };

    const handlePrev = () => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev - 1 + images.length) % images.length : prev
        );
    };

    /* ================= KEYBOARD ================= */

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedIndex !== null) {
                if (e.key === "ArrowRight") handleNext();
                if (e.key === "ArrowLeft") handlePrev();
                if (e.key === "Escape") setSelectedIndex(null);
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

    /* ================= SCROLL LOCK ================= */

    useEffect(() => {
        document.body.style.overflow =
            selectedIndex !== null ? "hidden" : "auto";
    }, [selectedIndex]);

    /* ================= AUTO SCROLL ================= */

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            const children = slider.children;

            const nextIndex = (activeIndex + 1) % children.length;
            const nextChild = children[nextIndex] as HTMLElement;

            slider.scrollTo({
                left: nextChild.offsetLeft,
                behavior: "smooth",
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    /* ================= ACTIVE DOT TRACK ================= */

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const children = Array.from(slider.children) as HTMLElement[];

            let closestIndex = 0;
            let minDiff = Infinity;

            children.forEach((child, index) => {
                const diff = Math.abs(child.offsetLeft - slider.scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        slider.addEventListener("scroll", handleScroll);
        return () => slider.removeEventListener("scroll", handleScroll);
    }, []);

    /* ================= SWIPE ================= */

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;

        if (diff > 50) handleNext();
        if (diff < -50) handlePrev();
    };

    return (
        <>
            {/* ================= SLIDER ================= */}
            <div className="relative overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="snap-start min-w-[80%] md:min-w-[40%] lg:min-w-[30%] relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* ================= DOTS ================= */}
                <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const slider = sliderRef.current;
                                if (!slider) return;

                                const child = slider.children[index] as HTMLElement;

                                slider.scrollTo({
                                    left: child.offsetLeft,
                                    behavior: "smooth",
                                });
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
                                    ? "bg-[#c6a75e] scale-125"
                                    : "bg-gray-400 opacity-50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ================= MODAL ================= */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* CLOSE */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(null);
                        }}
                        className="absolute top-6 right-6 text-white text-3xl z-[100]"
                    >
                        ✕
                    </button>

                    {/* LEFT */}
                    <div
                        onClick={handlePrev}
                        className="absolute left-0 top-0 h-full w-1/2 z-50 cursor-pointer flex items-center justify-start pl-6"
                    >
                        <span className="text-white text-4xl">‹</span>
                    </div>

                    {/* RIGHT */}
                    <div
                        onClick={handleNext}
                        className="absolute right-0 top-0 h-full w-1/2 z-50 cursor-pointer flex items-center justify-end pr-6"
                    >
                        <span className="text-white text-4xl">›</span>
                    </div>

                    {/* IMAGE */}
                    <div className="relative w-full h-[80vh] flex items-center justify-center px-6 pointer-events-none">
                        <Image
                            src={images[selectedIndex].src}
                            alt={images[selectedIndex].alt}
                            fill
                            className="object-contain rounded-lg"
                            sizes="100vw"
                        />
                    </div>

                    {/* COUNTER */}
                    <div className="absolute bottom-6 text-white text-xs tracking-[0.3em] uppercase">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}