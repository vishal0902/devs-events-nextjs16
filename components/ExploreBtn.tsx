"use client"
import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-5 mx-auto" onClick={() => console.log("clicked")}>
            <a href="#events" className="flex items-center gap-2">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" height={24} width={24} />
            </a>
        </button>
    );
};

export default ExploreBtn;
