import { blogs } from "@/app/data/blogs";
import BlogList from "./BlogList";

export default function Page() {
    return (
        <div className="container mx-auto px-6 py-12">

            {/* TITLE */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-light tracking-wide">
                    The Nomadic Journal
                </h1>

                <div className="w-12 h-[2px] bg-[#c6a75e] mx-auto mt-4 mb-4"></div>

                <p className="text-gray-500 text-sm">
                    Travel guides, experiences & itineraries
                </p>
            </div>

            {/* BLOG LIST */}
            <BlogList blogs={blogs} />

        </div>
    );
}