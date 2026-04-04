import { Suspense } from "react";
import BlogList from "./BlogList";

interface Props {
    searchParams?: {
        q?: string;
        category?: string;
    };
}

export default function Page({ searchParams }: Props) {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>

            <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
                <BlogList searchParams={searchParams} />
            </Suspense>
        </div>
    );
}