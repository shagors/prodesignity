"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import HeroBadges from "./HeroBadges";

interface HeroVideoPlayerProps {
    videoId?: string;
    thumbnailSrc?: string;
}

export default function HeroVideoPlayer({
    videoId = "dQw4w9WgXcQ",
    thumbnailSrc = "/assets/hero-showcase.jpg",
}: HeroVideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Video Container */}
            <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl group">
                {isPlaying ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="ProDesignity Video Showreel"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                    />
                ) : (
                    <>
                        <Image
                            src={thumbnailSrc}
                            alt="ProDesignity Video Reel"
                            fill
                            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                            priority
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[1px]">
                            <button
                                type="button"
                                onClick={() => setIsPlaying(true)}
                                aria-label="Play Showreel"
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-all cursor-pointer"
                            >
                                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                            </button>
                            <span className="mt-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white drop-shadow">
                                Watch Showreel
                            </span>
                        </div>
                    </>
                )}
            </div>

            {/* Floating Badges (Hidden while playing) */}
            {!isPlaying && <HeroBadges />}
        </div>
    );
}
