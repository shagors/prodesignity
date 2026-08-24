import JsonLd from "./_components/JsonLd";
import { homeSchema } from "@/lib/seo";
import BrandsMarquee from "./_components/BrandsMarquee";
import HeroSection from "./_components/hero/HeroSection";
import FeaturedWorksSection from "./_components/portfolio";

import PricingSection from "./_components/PricingSection";
import ProcessSection from "./_components/ProcessSection";
import RecentProjects from "./_components/recent-projects/RecentProjects";
import ReviewsSection from "./_components/ReviewsSection";
import ServicesMarquee from "./_components/ServicesMarquee";
import StatsSection from "./_components/StatsSection";

export default function Home() {
    return (
        <main className="">
            {/* Studio FAQ as FAQPage — the passages AI assistants quote. */}
            <JsonLd data={homeSchema()} />

            <HeroSection />
            <StatsSection />
            <BrandsMarquee />
            <FeaturedWorksSection />
            <ServicesMarquee />
            <ProcessSection />
            <RecentProjects />
            <PricingSection />
            <ReviewsSection />
        </main>
    );
}
