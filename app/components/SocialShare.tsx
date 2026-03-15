"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { FaXTwitter, FaFacebookF, FaWhatsapp, FaLink } from "react-icons/fa6";

export default function SocialShare({ title }: { title: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [copied, setCopied] = useState(false);

    // ✅ Build full URL safely (no window usage)
    const queryString = searchParams?.toString();
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://thenomadicstory.com";

    const url = `${baseUrl}${pathname}${queryString ? `?${queryString}` : ""
        }`;

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    useEffect(() => {
        if (!copied) return;

        const timer = setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [copied]);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    return (
        <div className="text-center relative">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
                Share This Article
            </p>

            <div className="flex justify-center items-center gap-6">
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaXTwitter size={13} />
                </a>

                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaFacebookF size={13} />
                </a>

                <a
                    href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaWhatsapp size={13} />
                </a>

                <button onClick={copyLink} className="social-icon">
                    <FaLink size={13} />
                </button>
            </div>

            <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-6 
                px-5 py-2 text-[10px] tracking-[0.25em] uppercase
                bg-[#c6a75e] text-white rounded-full shadow-md
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${copied
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
            >
                Link Copied
            </div>
        </div>
    );
}