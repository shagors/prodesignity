import BrandsMarquee from "./_components/BrandsMarquee";
import HeroSection from "./_components/hero/HeroSection";
import ProcessSection from "./_components/ProcessSection";
import ServicesMarquee from "./_components/ServicesMarquee";
import StatsSection from "./_components/StatsSection";

export default function Home() {
    return (
        <main className="">
            <HeroSection />
            <StatsSection />
            <BrandsMarquee />
            <ServicesMarquee />
            <ProcessSection />
        </main>
    );
}
