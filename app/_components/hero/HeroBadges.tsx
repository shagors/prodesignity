import { CheckCircle2 } from "lucide-react";
import Counter from "./Counter";

export default function HeroBadges() {
    return (
        <>
            {/* Top Left: Experience */}
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

            {/* Top Right: Team Members */}
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

            {/* Bottom Left: Completed Projects */}
            <div className="absolute -bottom-5 left-4 sm:left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                    <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                        <Counter target={500} />+ Projects
                    </p>
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Delivered Worldwide
                    </p>
                </div>
            </div>
        </>
    );
}
