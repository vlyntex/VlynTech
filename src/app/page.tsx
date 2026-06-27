import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import PerformanceMetrics from "@/components/sections/PerformanceMetrics";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden bg-white">
      <Navigation />
      
      <Hero />
      <WhoWeAre />
      <PerformanceMetrics />
      <CTA />
      
      <Footer />
    </main>
  );
}
