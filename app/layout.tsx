import "./globals.css";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    metadataBase: new URL("https://the-nomadic-story.vercel.app"),
    title: {
        default: "The Nomadic Story",
        template: "%s | The Nomadic Story",
    },
    description:
        "A luxury editorial travel journal exploring cities, culture, photography, and perspective.",
    keywords: [
        "travel journal",
        "editorial travel blog",
        "luxury travel writing",
        "city travel guide",
        "travel photography",
    ],
    authors: [{ name: "Ram" }],
    creator: "Ram",
    openGraph: {
        siteName: "The Nomadic Story",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
    },
};


export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-white text-black flex flex-col min-h-screen">

                <NavBar />

                <main className="flex-grow">{children}</main>

                <footer className="border-t border-gray-200 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} The Nomadic Story • All Rights Reserved
                    </div>
                </footer>

            </body>
        </html>
    );
}