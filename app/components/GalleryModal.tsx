"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
    images: string[];
};

export default function GalleryModal({ images }: Props) {
    const [index, setIndex] = useState<number | null>(null);
    const startX = useRef<number | null>(null);

    const close = () => setIndex(null);

    const next = () => {
        setIndex((prev) =>
            prev === null ? null : (prev + 1) % images.length
        );
    };

    const prev = () => {
        setIndex((prev) =>
            prev === null ? null : (prev - 1 + images.length) % images.length
        );
    };

    /* KEYBOARD NAVIGATION */
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (index === null) return;

            if (e.key === "ArrowRight") {
                setIndex((prev) =>
                    prev === null ? null : (prev + 1) % images.length
                );
            }

            if (e.key === "ArrowLeft") {
                setIndex((prev) =>
                    prev === null ? null : (prev - 1 + images.length) % images.length
                );
            }

            if (e.key === "Escape") {
                close();
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index, images.length]);

    /* MOBILE SWIPE */
    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;

        const diff = startX.current - e.changedTouches[0].clientX;

        if (diff > 50) next();
        if (diff < -50) prev();

        startX.current = null;
    };

    return (
        <>
            {/* IMAGE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={src}
                            alt={`Hong Kong ${i + 1}`}
                            fill
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {index !== null && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fade"
                    onClick={close}
                >
                    {/* IMAGE CONTAINER */}
                    <div
                        className="relative w-[90vw] h-[80vh] max-w-[650px]"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <Image
                            src={images[index]}
                            alt="Gallery Image"
                            fill
                            priority
                            className="object-contain rounded-lg"
                        />
                    </div>

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={close}
                        className="absolute top-6 right-6 text-white text-3xl hover:opacity-70"
                    >
                        ✕
                    </button>

                    {/* PREVIOUS */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-6 text-white text-4xl hover:opacity-70"
                    >
                        ‹
                    </button>

                    {/* NEXT */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-6 text-white text-4xl hover:opacity-70"
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}