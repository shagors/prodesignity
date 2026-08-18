import Link from "next/link";
import Image from "next/image";
import { Play, CheckCircle2, ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#090D16] py-12 md:py-20 lg:py-24 transition-colors duration-300 font-sans">
            {/* Background Decorative Ambient Glows */}
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-72 h-72 md:w-125 md:h-125 bg-violet-600/10 dark:bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-10 w-64 h-64 md:w-112.5 md:h-112.5 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                    {/* Left Column: Video Frame Showcase */}
                    <div className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none">
                        {/* Main Video Box */}
                        <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl group">
                            <Image
                                src="/assets/hero-showcase.jpg"
                                alt="ProDesignity Video Reel"
                                fill
                                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                                priority
                            />

                            {/* Center Play Button Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[1px]">
                                <button
                                    type="button"
                                    aria-label="Play Showreel"
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-all cursor-pointer"
                                >
                                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                                </button>
                                <span className="mt-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white drop-shadow">
                                    Watch Showreel
                                </span>
                            </div>
                        </div>

                        {/* Top Left Badge: Years of Experience */}
                        <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xl flex flex-col items-center z-10">
                            <span className="text-lg sm:text-xl font-black text-indigo-600 dark:text-indigo-400 leading-none">
                                5+
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 text-center leading-tight mt-1">
                                Years of
                                <br />
                                Experience
                            </span>
                        </div>

                        {/* Top Right Badge: Team Members */}
                        <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xl flex flex-col items-center z-10">
                            <span className="text-lg sm:text-xl font-black text-orange-500 dark:text-orange-400 leading-none">
                                12+
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 text-center leading-tight mt-1">
                                Creative
                                <br />
                                Team
                            </span>
                        </div>

                        {/* Bottom Left Badge: Completed Projects */}
                        <div className="absolute -bottom-5 left-4 sm:left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 z-10">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                                    500+ Projects
                                </p>
                                <p className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                                    Delivered Worldwide
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hero Content & Value Proposition */}
                    <div className="lg:col-span-6 space-y-6 text-center lg:text-left lg:pl-4">
                        {/* Social Proof Pill */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                            <span className="flex -space-x-1.5 overflow-hidden">
                                <span className="inline-block h-4 w-4 rounded-full ring-1 ring-white dark:ring-slate-900 bg-violet-600" />
                                <span className="inline-block h-4 w-4 rounded-full ring-1 ring-white dark:ring-slate-900 bg-indigo-500" />
                                <span className="inline-block h-4 w-4 rounded-full ring-1 ring-white dark:ring-slate-900 bg-orange-500" />
                            </span>
                            <span>Trusted by 100+ Brands &amp; Creators</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.1]">
                            Scaling Your <br className="hidden sm:inline" />
                            <span className="bg-linear-to-r from-violet-600 via-indigo-500 to-blue-500 dark:from-violet-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                                Online Growth
                            </span>
                        </h1>

                        {/* Subtitle Description */}
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            ProDesignity is a full-service creative agency
                            specializing in viral video editing, motion
                            graphics, thumbnails, brand strategy, and
                            high-impact visual design built to convert.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-violet-600 via-indigo-600 to-blue-600 hover:opacity-90 shadow-lg shadow-indigo-500/25 transition-all duration-200"
                            >
                                <span>Start a Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors duration-200"
                            >
                                Book a Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
