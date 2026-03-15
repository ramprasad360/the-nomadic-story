"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Add lucide-react for mobile menu icons

type CityGallery = Record<string, string[]>;
type CountryGallery = Record<string, CityGallery>;
type ContinentGallery = Record<string, CountryGallery>;

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeContinent, setActiveContinent] = useState<string | null>(null);
    const [activeCountry, setActiveCountry] = useState<string | null>(null);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const closeAllMenus = () => {
        setOpen(false);
        setMobileMenuOpen(false);
        setActiveContinent(null);
        setActiveCountry(null);
    };

    return (
        <header className="bg-white relative z-50">
            <div className="w-full h-[1px] bg-gray-200" />

            {/* Brand */}
            <div className="flex flex-col items-center py-6 md:py-10">
                <Link
                    href="/"
                    className="font-[Taviraj,Georgia,Times,serif] text-3xl md:text-4xl lg:text-5xl tracking-[0.35em] uppercase font-light text-gray-900 hover:text-[#b89a5a] transition duration-500 hover:tracking-[0.5em] px-4 md:px-0"
                    onClick={closeAllMenus}
                >
                    The Nomadic Story
                </Link>

                <div className="mt-4 md:mt-6 text-center px-4 md:px-0">
                    <div className="w-12 h-[1px] bg-[#c6a75e] mx-auto mb-4 md:mb-6" />
                    <p className="font-[Taviraj,Georgia,Times,serif] text-xs md:text-[13px] italic text-gray-500 tracking-wide px-2">
                        Step forward. Discover more.
                    </p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200" />

            {/* Desktop Navigation */}
            <nav className="font-[Taviraj,Georgia,Times,serif] hidden lg:block">
                <div className="max-w-6xl mx-auto py-6 flex justify-center items-center gap-12 text-[12px] tracking-[0.3em] uppercase font-normal text-gray-700">
                    <Link href="/" className={navItemStyle}>
                        Home
                    </Link>

                    {/* Desktop Destinations Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => {
                            setOpen(false);
                            setActiveContinent(null);
                            setActiveCountry(null);
                        }}
                    >
                        <button className={`${navItemStyle}`}>
                            DESTINATIONS
                        </button>

                        {open && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] md:w-[320px] bg-white border border-gray-200 rounded-md shadow-xl flex flex-col z-50">

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
                                                <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-xl rounded-md whitespace-nowrap min-w-[220px] z-50">

                                                    {Object.entries(countries).map(([country, cities]) => {
                                                        const isCountryOpen = activeCountry === country;

                                                        return (
                                                            <div key={country} className="relative">
                                                                <div
                                                                    onClick={() =>
                                                                        setActiveCountry(
                                                                            isCountryOpen ? null : country
                                                                        )
                                                                    }
                                                                    onMouseEnter={() => setActiveCountry(country)}
                                                                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#d4a373] hover:text-white transition cursor-pointer"
                                                                >
                                                                    <Image
                                                                        src={`https://flagcdn.com/${getISOCode(country)}.svg`}
                                                                        alt={`${country} flag`}
                                                                        width={18}
                                                                        height={12}
                                                                        className="rounded-sm shadow-sm object-cover flex-shrink-0"
                                                                    />
                                                                    <span className="tracking-wide text-[12px] truncate">
                                                                        {country}
                                                                    </span>
                                                                </div>

                                                                {isCountryOpen && (
                                                                    <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-xl rounded-md whitespace-nowrap min-w-[220px] z-50">
                                                                        {Object.keys(cities).map((city) => (
                                                                            <Link
                                                                                key={city}
                                                                                href={`/${city.toLowerCase().replace(/\s+/g, "-")}`}
                                                                                onClick={closeAllMenus}
                                                                                className="block px-5 py-3 text-[11px] uppercase hover:bg-[#d4a373] hover:text-white transition"
                                                                            >
                                                                                {city}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
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
                    <Link href="/about-me" className={navItemStyle}>
                        About Me
                    </Link>
                    <Link href="/contact" className={navItemStyle}>
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="font-[Taviraj,Georgia,Times,serif] lg:hidden">
                <div className="max-w-4xl mx-auto py-4 px-6 flex items-center justify-between">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
                )}

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    //<div className="fixed top-[220px] left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 lg:hidden">
                    <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
                        <div className="max-w-4xl mx-auto px-6 py-6 space-y-4 text-sm tracking-[0.2em] uppercase font-normal text-gray-700">

                            <Link
                                href="/"
                                className="block py-3 hover:text-[#d4a373] transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={closeAllMenus}
                            >
                                Home
                            </Link>

                            <details className="group">
                                <summary className="py-3 cursor-pointer hover:text-[#d4a373] transition-colors border-b border-gray-100 list-none flex items-center justify-between">
                                    Destinations
                                    <span className="text-xs text-gray-400 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>

                                <div className="mt-2 ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                                    {Object.entries(gallery).map(([continent]) => (
                                        <details key={continent} className="group/continent">
                                            <summary className="py-2 cursor-pointer hover:text-[#d4a373] transition-colors list-none flex items-center justify-between text-xs">
                                                {continent}
                                                <span className="text-xs text-gray-400 group-open/continent:rotate-180 transition-transform">
                                                    ▼
                                                </span>
                                            </summary>

                                            <div className="mt-2 ml-4 space-y-1 border-l border-gray-200 pl-4 pt-2">
                                                {Object.entries(gallery[continent as keyof ContinentGallery]!).map(([country]) => (
                                                    <details key={country} className="group/country">
                                                        <summary className="py-1.5 cursor-pointer hover:text-[#d4a373] transition-colors list-none flex items-center gap-2 text-xs">
                                                            <Image
                                                                src={`https://flagcdn.com/${getISOCode(country)}.svg`}
                                                                alt={`${country} flag`}
                                                                width={14}
                                                                height={10}
                                                                className="rounded-sm flex-shrink-0"
                                                            />
                                                            {country}
                                                        </summary>

                                                        <div className="mt-1 ml-4 space-y-1">
                                                            {Object.keys(gallery[continent as keyof ContinentGallery]![country as keyof CityGallery]!).map((city) => (
                                                                <Link
                                                                    key={city}
                                                                    href={`/${city.toLowerCase().replace(/\s+/g, "-")}`}
                                                                    className="block py-1 text-xs hover:text-[#d4a373] transition-colors pl-2 -ml-1"
                                                                    onClick={closeAllMenus}
                                                                >
                                                                    {city}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </details>
                                                ))}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </details>

                            <Link
                                href="/gallery"
                                className="block py-3 hover:text-[#d4a373] transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={closeAllMenus}
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/blog"
                                className="block py-3 hover:text-[#d4a373] transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={closeAllMenus}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about"
                                className="block py-3 hover:text-[#d4a373] transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={closeAllMenus}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="block py-3 hover:text-[#d4a373] transition-colors"
                                onClick={closeAllMenus}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <div className="w-full h-[1px] bg-gray-200" />
        </header>
    );
}
