"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export default function ContactPage() {
    const [showToast, setShowToast] = useState(false);

    const email = "contact@thenomadicstory.com";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <section className="max-w-2xl mx-auto px-6 py-20 text-center">
            {/* Title */}
            <h1 className="text-xl tracking-[0.4em] mb-4">CONTACT</h1>

            {/* Underline */}
            <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-6"></div>

            {/* Subtitle */}
            <p className="text-gray-600 mb-12">
                Have a question, collaboration idea, or just want to say hello?
            </p>

            {/* Form */}
            <form className="space-y-8 text-left">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-b border-gray-300 outline-none py-2 bg-transparent"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border-b border-gray-300 outline-none py-2 bg-transparent"
                />

                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full border-b border-gray-300 outline-none py-2 bg-transparent resize-none"
                ></textarea>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full cursor-pointer border border-[#c6a75e] text-[#c6a75e] py-3 tracking-[0.25em] transition-all duration-500 ease-out hover:bg-[#c6a75e] hover:text-white hover:shadow-[0_6px_25px_rgba(198,167,94,0.35)] hover:scale-[1.01] active:scale-[0.97]"
                >
                    SEND MESSAGE
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-12">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm tracking-wider">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Email Section */}
            <div className="relative">
                <p className="text-sm tracking-wide text-gray-600">
                    You can also email me at
                </p>

                <div className="flex items-center justify-center gap-3 mt-3">
                    {/* Mailto link */}
                    <a
                        href={`mailto:${email}`}
                        className="tracking-[0.15em] text-[14px] border-b border-transparent hover:border-[#c6a75e] hover:text-black transition-all duration-300"
                    >
                        {email}
                    </a>

                    {/* Copy icon */}
                    <button
                        onClick={handleCopy}
                        className="cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 -mt-[2px]"
                        aria-label="Copy email"
                    >
                        <Copy size={16} />
                    </button>
                </div>

                {/* Toast */}
                <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-4 text-xs tracking-wider bg-black text-white px-4 py-2 rounded-sm transition-all duration-500 ${showToast
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                >
                    Email copied
                </div>
            </div>
        </section>
    );
}