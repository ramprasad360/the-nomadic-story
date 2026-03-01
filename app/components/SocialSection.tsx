import SocialShare from "./SocialShare";
import FollowMe from "./FollowMe";

export default function SocialSection({ title }: { title: string }) {
    return (
        <div className="mt-16 text-center">

            <SocialShare title={title} />
            {/* Elegant separation */}
            <div className="w-12 h-[1px] bg-gray-200 mx-auto my-12"></div>

            <FollowMe />

        </div>
    );
}