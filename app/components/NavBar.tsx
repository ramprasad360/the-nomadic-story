"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type CityGallery = Record<string, string[]>;
type CountryGallery = Record<string, CityGallery>;
type ContinentGallery = Record<string, CountryGallery>;

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [activeContinent, setActiveContinent] = useState<string | null>(null);
    const [activeCountry, setActiveCountry] = useState<string | null>(null);

    const gallery: ContinentGallery = {
        Asia: {
            China: { "Hong Kong": [] },
            Indonesia: { Bali: [] },
            "South Korea": { Seoul: [] },
            Thailand: { Bangkok: [] },
        },
        Europe: {
            Ireland: { Dublin: [] },
        },
    };

    const getISOCode = (country: string) => {
        const isoMap: Record<string, string> = {
            China: "cn",
            Indonesia: "id",
            "South Korea": "kr",
            Thailand: "th",
            Ireland: "ie",
        };
        return isoMap[country];
    };

    const navItemStyle =
        "relative inline-flex items-center h-full pb-2 hover:text-[#d4a373] transition duration-300 " +
        "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#d4a373] " +
        "after:transition-all after:duration-300 hover:after:w-full";

    return (
        <header className="bg-white relative z-50">
            <div className="w-full h-[1px] bg-gray-200" />

            {/* Brand */}
            <div className="flex flex-col items-center py-10">
                <Link
                    href="/"
                    className="font-[Taviraj,Georgia,Times,serif] text-4xl md:text-5xl tracking-[0.35em] uppercase font-light text-gray-900 hover:text-[#b89a5a] transition duration-500 hover:tracking-[0.5em]"
                >
                    The Nomadic Story
                </Link>

                <div className="mt-6 text-center">
                    <div className="w-12 h-[1px] bg-[#c6a75e] mx-auto mb-6" />
                    <p className="font-[Taviraj,Georgia,Times,serif] text-[13px] italic text-gray-500 tracking-wide">
                        Step forward. Discover more.
                    </p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200" />

            {/* Navigation */}
            <nav className="font-[Taviraj,Georgia,Times,serif]">
                <div className="max-w-6xl mx-auto py-6 flex justify-center items-center gap-12 text-[12px] tracking-[0.3em] uppercase font-normal text-gray-700">

                    <Link href="/" className={navItemStyle}>
                        Home
                    </Link>

                    {/* Destinations */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => {
                            setOpen(false);
                            setActiveContinent(null);
                            setActiveCountry(null);
                        }}
                    >
                        <button
                            onClick={() => setOpen(!open)}
                            className={`${navItemStyle}`}
                        >
                            DESTINATIONS
                        </button>

                        {open && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[240px] bg-white border border-gray-200 rounded-md shadow-xl flex flex-col">

                                {Object.entries(gallery).map(([continent, countries]) => {
                                    const isContinentOpen = activeContinent === continent;

                                    return (
                                        <div key={continent} className="relative">

                                            <div
                                                onClick={() =>
                                                    setActiveContinent(
                                                        isContinentOpen ? null : continent
                                                    )
                                                }
                                                onMouseEnter={() => setActiveContinent(continent)}
                                                className="px-5 py-3 text-[12px] uppercase text-center hover:bg-[#d4a373] hover:text-white transition cursor-pointer"
                                            >
                                                {continent}
                                            </div>

                                            {isContinentOpen && (
                                                <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-xl rounded-md whitespace-nowrap min-w-[200px]">

                                                    {Object.entries(countries).map(
                                                        ([country, cities]) => {
                                                            const isCountryOpen =
                                                                activeCountry === country;

                                                            return (
                                                                <div key={country} className="relative">

                                                                    <div
                                                                        onClick={() =>
                                                                            setActiveCountry(
                                                                                isCountryOpen ? null : country
                                                                            )
                                                                        }
                                                                        onMouseEnter={() =>
                                                                            setActiveCountry(country)
                                                                        }
                                                                        className="flex items-center gap-3 px-5 py-3 hover:bg-[#d4a373] hover:text-white transition cursor-pointer"
                                                                    >
                                                                        <Image
                                                                            src={`https://flagcdn.com/${getISOCode(
                                                                                country
                                                                            )}.svg`}
                                                                            alt={`${country} flag`}
                                                                            width={18}
                                                                            height={12}
                                                                            className="rounded-sm shadow-sm object-cover"
                                                                        />
                                                                        <span className="tracking-wide text-[12px]">
                                                                            {country}
                                                                        </span>
                                                                    </div>

                                                                    {isCountryOpen && (
                                                                        <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-xl rounded-md whitespace-nowrap min-w-[220px]">

                                                                            {Object.keys(cities).map((city) => (
                                                                                <Link
                                                                                    key={city}
                                                                                    href={`/${city
                                                                                        .toLowerCase()
                                                                                        .replace(/\s+/g, "-")}`}
                                                                                    onClick={() => {
                                                                                        setOpen(false);
                                                                                        setActiveContinent(null);
                                                                                        setActiveCountry(null);
                                                                                    }}
                                                                                    className="block px-5 py-3 text-[11px] uppercase hover:bg-[#d4a373] hover:text-white transition"
                                                                                >
                                                                                    {city}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <Link href="/gallery" className={navItemStyle}>
                        Gallery
                    </Link>

                    <Link href="/blog" className={navItemStyle}>
                        Blog
                    </Link>

                    <Link href="/about" className={navItemStyle}>
                        About
                    </Link>

                    <Link href="/contact" className={navItemStyle}>
                        Contact
                    </Link>

                </div>
            </nav>

            <div className="w-full h-[1px] bg-gray-200" />
        </header>
    );
}
//