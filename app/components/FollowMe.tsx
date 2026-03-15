"use client";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function FollowMe() {
    return (
        <div className="text-center mt-12">

            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
                FOLLOW THE JOURNEY
            </p>

            <div className="flex justify-center items-center gap-8">

                <a
                    href="https://www.instagram.com/the_life_of_ram_29/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaInstagram size={12} />
                </a>

                <a
                    href="https://twitter.com/ramprasad2907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaXTwitter size={12} />
                </a>

            </div>

        </div>
    );
}