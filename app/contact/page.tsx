"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);

    const emailAddress = "contact@thenomadicstory.com";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(emailAddress);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setSuccess(true);
            setForm({ name: "", email: "", message: "" });

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        } finally {   
            setLoading(false);
        }
    }

    return (
        <section className="max-w-2xl mx-auto px-6 py-20 text-center">
            <h1 className="text-xl tracking-[0.4em] mb-4">CONTACT</h1>

            <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto mb-6"></div>

            <p className="text-gray-600 mb-12">
                Have a question, collaboration idea, or just want to say hello?
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                    required
                    className="w-full border-b border-gray-300 outline-none py-2 bg-transparent"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="w-full border-b border-gray-300 outline-none py-2 bg-transparent"
                />

                <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                    }
                    required
                    className="w-full border-b border-gray-300 outline-none py-2 bg-transparent resize-none"
                ></textarea>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer border border-[#c6a75e] text-[#c6a75e] py-3 tracking-[0.25em] transition-all duration-500 ease-out hover:bg-[#c6a75e] hover:text-white disabled:opacity-50"
                >
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
            </form>

            {/* SUCCESS / ERROR */}
            {success && (
                <p className="text-green-600 text-center mt-6 tracking-wide">
                    Message sent successfully ✨
                </p>
            )}

            {error && (
                <p className="text-red-500 text-center mt-6 tracking-wide">
                    {error}
                </p>
            )}

            {/* Divider */}
            <div className="flex items-center my-12">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm tracking-wider">
                    OR
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Email Section */}
            <div className="relative">
                <p className="text-sm tracking-wide text-gray-600">
                    You can also email me at
                </p>

                <div className="flex items-center justify-center gap-3 mt-3">
                    <a
                        href={`mailto:${emailAddress}`}
                        className="tracking-[0.15em] text-[14px] border-b border-transparent hover:border-[#c6a75e] hover:text-black transition-all duration-300"
                    >
                        {emailAddress}
                    </a>

                    <button
                        type="button"
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