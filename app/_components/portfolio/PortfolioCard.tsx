"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolioData";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close modal when pressing the Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            {/* 1. Main Grid Portfolio Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-border-color dark:border-dark-border-color shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Left Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary text-white text-[10px] font-black tracking-wider uppercase shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {item.badge}
                    </div>

                    {/* Top Right Resolution Badge */}
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-wider">
                        {item.resolution}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[0.5px]">
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            aria-label={`Play ${item.title}`}
                            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary hover:bg-primary-hover dark:bg-dark-primary dark:hover:bg-dark-primary-hover text-white flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition-all cursor-pointer focus:outline-none"
                        >
                            <Play className="w-7 h-7 fill-white ml-1" />
                        </button>
                    </div>

                    {/* Bottom Title & Category Info Bar */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-linear-to-t from-black/90 via-black/50 to-transparent">
                        <p className="text-xs font-bold text-primary dark:text-dark-primary uppercase tracking-widest">
                            {item.category}
                        </p>
                        <h3 className="text-sm sm:text-base font-black text-white leading-snug drop-shadow-sm">
                            {item.title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* 2. Modal Video Player Popup */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
                        />

                        {/* Modal Dialog Window */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.88, y: 25 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.88, y: 25 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="relative w-full max-w-4xl z-10"
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Video"
                                className="absolute -top-12 right-0 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer focus:outline-none"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* 16:9 Video Frame */}
                            <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                    title={item.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
