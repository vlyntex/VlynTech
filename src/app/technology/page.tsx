import Navigation from "@/components/layout/Navigation";
import DataAnnotationServices from "@/components/sections/DataAnnotationServices";
import AIAgentsAutomation from "@/components/sections/AIAgentsAutomation";
import SaaSServices from "@/components/sections/SaaSServices";
import TechnologyStack from "@/components/sections/TechnologyStack";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function TechnologyPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden bg-white">
      <Navigation />
      
      {/* Mini Hero for Technology */}
      <section className="relative w-full pt-48 pb-12 flex flex-col items-center justify-center px-6 text-center z-20 overflow-hidden">
        
        {/* Top Left Pink/Red Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/3 -translate-y-1/3"></div>
        
        {/* Bottom Left Deep Green Glow */}
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/2 translate-y-1/4"></div>
        
        {/* Top Right Light Yellow Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-yellow-300/20 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/4"></div>
        
        {/* Bottom Right Sky Blue Glow */}
        <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/4 translate-y-1/4"></div>

        <h1 className="relative z-10 font-geist font-bold text-5xl md:text-7xl tracking-tighter text-text-primary mb-6">
          Next-Generation <br />
          <span className="text-text-secondary/50">AI Infrastructure.</span>
        </h1>
        <p className="relative z-10 font-inter text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
          Explore the proprietary technology stack powering our high-performance AI agents, precision data annotation, and scalable enterprise SaaS solutions.
        </p>
      </section>

      <DataAnnotationServices />
      <AIAgentsAutomation />
      <SaaSServices />
      <TechnologyStack />
      <CTA />
      
      <Footer />
    </main>
  );
}
