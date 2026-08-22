"use client";

import { useState } from "react";
import PortfolioBackground from "./PortfolioBackground";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioCard from "./PortfolioCard";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";
import { HeaderPill } from "@/components/HeaderPill";

export default function FeaturedWorksSection() {
    const [selectedCategory, setSelectedCategory] =
        useState<string>("Video Editing");
    const [selectedFormat, setSelectedFormat] = useState<
        "Full-Form" | "Short-Form"
    >("Full-Form");

    const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
        const matchesCategory =
            selectedCategory === "Video Editing"
                ? true
                : item.category === selectedCategory;
        const matchesFormat = item.format === selectedFormat;
        return matchesCategory && matchesFormat;
    });

    return (
        <section className="relative py-20 lg:py-28 bg-white dark:bg-[#070B14] border-b border-border-color dark:border-dark-border-color transition-colors duration-300 font-sans overflow-hidden">
            <PortfolioBackground />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <HeaderPill
                        text="Our Portfolio"
                        inlineDivClassName="py-1.5"
                        className="mb-6 sm:mb-8"
                    />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                        Featured{" "}
                        <span className="bg-linear-to-r from-primary via-primary/65 to-cyan-500 dark:from-primary dark:via-dark-primary dark:to-cyan-400 bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                </div>

                {/* Filter Navigation */}
                <PortfolioFilters
                    selectedCategory={selectedCategory}
                    selectedFormat={selectedFormat}
                    onSelectCategory={setSelectedCategory}
                    onSelectFormat={setSelectedFormat}
                />

                {/* 2-Column Responsive Card Grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {filteredItems.map((item) => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 rounded-3xl bg-card-bg dark:bg-dark-card-bg border border-border-color dark:border-dark-border-color max-w-lg mx-auto">
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            No projects found for this selection.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
