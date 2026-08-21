import BrandsMarquee from "./_components/BrandsMarquee";
import HeroSection from "./_components/hero/HeroSection";
import FeaturedWorksSection from "./_components/portfolio/FeaturedWorksSection";
import PricingSection from "./_components/PricingSection";
import ProcessSection from "./_components/ProcessSection";
import RecentProjects from "./_components/recent-projects/RecentProjects";
import ServicesMarquee from "./_components/ServicesMarquee";
import StatsSection from "./_components/StatsSection";

export default function Home() {
    return (
        <main className="">
            <HeroSection />
            <StatsSection />
            <BrandsMarquee />
            <FeaturedWorksSection />
            <ServicesMarquee />
            <ProcessSection />
            <RecentProjects />
            <PricingSection />
        </main>
    );
}
