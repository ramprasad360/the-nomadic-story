"use client";

import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="max-w-2xl mx-auto px-6 py-24">
            {/* Title */}
            <h1 className="text-xl tracking-[0.4em] text-center">
                CONTACT
            </h1>

            {/* Gold Line */}
            <div className="w-16 h-[2px] bg-[#c6a75e] mx-auto my-6"></div>

            {/* Subtitle */}
            <p className="text-center text-gray-500 mb-12 text-sm">
                Have a question, collaboration idea, or just want to say hello?
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-b border-gray-300 p-3 outline-none focus:border-black"
                    value={form.name}
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border-b border-gray-300 p-3 outline-none focus:border-black"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />

                <textarea
                    placeholder="Your Message"
                    className="w-full border-b border-gray-300 p-3 h-32 outline-none focus:border-black"
                    value={form.message}
                    onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                    }
                    required
                />

                <button
                    type="submit"
                    className="w-full border border-black py-3 tracking-widest 
           text-black 
           hover:bg-[#c6a75e] hover:text-white 
           transition-all duration-300 ease-in-out"
                >
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
            </form>

            {/* Success Message */}
            {success && (
                <p className="text-center text-green-600 mt-6 text-sm">
                    Message sent successfully!
                </p>
            )}

            {/* Divider */}
            <div className="flex items-center my-10">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-4 text-gray-400 text-sm">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Direct Contact */}
            <p className="text-center text-sm text-gray-500">
                You can also email me at <br />
                <span className="text-black">your@email.com</span>
            </p>
        </section>
    );
}