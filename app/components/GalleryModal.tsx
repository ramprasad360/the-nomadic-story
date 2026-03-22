"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type Props = {
    images: string[];
};

export default function GalleryModal({ images }: Props) {
    const [index, setIndex] = useState<number | null>(null);
    const startX = useRef<number | null>(null);

    const close = () => setIndex(null);

    const next = useCallback(() => {
        setIndex((prev) =>
            prev === null ? null : (prev + 1) % images.length
        );
    }, [images.length]);

    const prev = useCallback(() => {
        setIndex((prev) =>
            prev === null ? null : (prev - 1 + images.length) % images.length
        );
    }, [images.length]);

    /* ================= KEYBOARD NAVIGATION ================= */
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (index === null) return;

            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") close();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index, next, prev]);

    /* ================= SCROLL LOCK ================= */
    useEffect(() => {
        if (index !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [index]);

    /* ================= MOBILE SWIPE ================= */
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
            {/* ================= IMAGE GRID ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery ${i + 1}`}
                            fill
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition duration-500"
                            placeholder="blur"
                            blurDataURL="/images/placeholder.jpg"
                        />
                    </div>
                ))}
            </div>

            {/* ================= MODAL ================= */}
            {index !== null && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fade"
                    onClick={close}
                >
                    {/* 🔥 PRELOAD NEXT IMAGE */}
                    <Image
                        src={images[(index + 1) % images.length]}
                        alt=""
                        width={1}
                        height={1}
                        className="hidden"
                    />

                    {/* 🔥 PRELOAD PREVIOUS IMAGE */}
                    <Image
                        src={images[(index - 1 + images.length) % images.length]}
                        alt=""
                        width={1}
                        height={1}
                        className="hidden"
                    />

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
                            placeholder="blur"
                            blurDataURL="/images/placeholder.jpg"
                        />
                    </div>

                    {/* CLOSE BUTTON */}
                    <button
                        tabIndex={0}
                        onClick={close}
                        className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 active:scale-90 transition"
                    >
                        ✕
                    </button>

                    {/* PREVIOUS */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-4 md:left-6 text-white text-4xl hover:opacity-70 active:scale-90 transition"
                    >
                        ‹
                    </button>

                    {/* NEXT */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-4 md:right-6 text-white text-4xl hover:opacity-70 active:scale-90 transition"
                    >
                        ›
                    </button>

                    {/* IMAGE COUNTER */}
                    <div className="absolute bottom-6 text-white text-sm tracking-wider">
                        {index + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}