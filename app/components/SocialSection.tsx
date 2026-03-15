"use client";

import SocialShare from "./SocialShare";
import FollowMe from "./FollowMe";
import { Suspense } from "react";

export default function SocialSection({ title }: { title: string }) {
    return (
        <div className="mt-16 text-center">

            <Suspense fallback={null}>
                <SocialShare title={title} />
            </Suspense>

            <FollowMe />

        </div>
    );
}