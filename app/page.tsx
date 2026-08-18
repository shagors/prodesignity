import BrandsMarquee from "./_components/BrandsMarquee";
import HeroSection from "./_components/hero/HeroSection";
import StatsSection from "./_components/StatsSection";

export default function Home() {
    return (
        <main className="">
            <HeroSection />
            <StatsSection />
            <BrandsMarquee />
        </main>
    );
}
