"use client";

import { PORTFOLIO_CATEGORIES } from "@/data/portfolioData";

interface PortfolioFiltersProps {
    selectedCategory: string;
    selectedFormat: "Full-Form" | "Short-Form";
    onSelectCategory: (cat: string) => void;
    onSelectFormat: (format: "Full-Form" | "Short-Form") => void;
}

export default function PortfolioFilters({
    selectedCategory,
    selectedFormat,
    onSelectCategory,
    onSelectFormat,
}: PortfolioFiltersProps) {
    return (
        <div className="flex flex-col items-center gap-6 mb-12 sm:mb-16">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl">
                {PORTFOLIO_CATEGORIES.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => onSelectCategory(category)}
                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-sm ${
                                isActive
                                    ? "bg-primary text-white shadow-primary/25 shadow-md scale-105"
                                    : "bg-card-bg dark:bg-dark-card-bg text-slate-700 dark:text-slate-300 border border-border-color dark:border-dark-border-color hover:border-primary/40"
                            }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Format Toggle Pill (Full-Form vs Short-Form) */}
            <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-dark-card-bg border border-border-color dark:border-dark-border-color shadow-inner">
                {(["Full-Form", "Short-Form"] as const).map((format) => {
                    const isActive = selectedFormat === format;
                    return (
                        <button
                            key={format}
                            type="button"
                            onClick={() => onSelectFormat(format)}
                            className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                                isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/25"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            }`}
                        >
                            {format}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
