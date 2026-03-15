"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
    images: string[];
};

export default function GalleryLightbox({ images }: Props) {
    const [index, setIndex] = useState(-1);

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
                            alt={`Hong Kong Street ${i + 1}`}
                            fill
                            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* LIGHTBOX VIEW */}
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />
        </>
    );
}